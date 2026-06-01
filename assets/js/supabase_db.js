/**
 * Supabase Database Layer for FarmTrack
 * Handles all cloud persistence and session management
 */

let SUPABASE_URL = localStorage.getItem('farmtrack-supabase-url') || '';
let SUPABASE_ANON_KEY = localStorage.getItem('farmtrack-supabase-anon-key') || '';

let supabaseClient = null;

const supabasePromise = (async () => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    try {
      console.log("[Auto-Config] Fetching config from local Flask backend...");
      const res = await fetch('http://localhost:5000/api/config');
      if (res.ok) {
        const data = await res.json();
        if (data.supabaseUrl && data.supabaseAnonKey) {
          SUPABASE_URL = data.supabaseUrl;
          SUPABASE_ANON_KEY = data.supabaseAnonKey;
          localStorage.setItem('farmtrack-supabase-url', SUPABASE_URL);
          localStorage.setItem('farmtrack-supabase-anon-key', SUPABASE_ANON_KEY);
          console.log("[Auto-Config] Supabase credentials loaded from local Flask backend!");
        }
      }
    } catch (e) {
      console.warn("[Auto-Config] Could not auto-configure Supabase (Flask backend on port 5000 not running):", e);
    }
  }

  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
})();

const db_layer = {
  // SESSION
  async getSession() {
    await supabasePromise;
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient.auth.getSession();
    return data.session;
  },

  async signUp(email, password) {
    await supabasePromise;
    if (!supabaseClient) return { error: 'Supabase not configured' };
    return await supabaseClient.auth.signUp({ email, password });
  },

  async signIn(email, password) {
    await supabasePromise;
    if (!supabaseClient) return { error: 'Supabase not configured' };
    return await supabaseClient.auth.signInWithPassword({ email, password });
  },

  async signOut() {
    await supabasePromise;
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    localStorage.removeItem('farmtrack-user-profile');
  },

  // PROFILE
  async getProfile(userId) {
    await supabasePromise;
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (data) {
      localStorage.setItem('farmtrack-user-profile', JSON.stringify(data));
      window.userRole = data.role || 'worker';
    }
    return data;
  },

  async updateProfile(profile) {
    await supabasePromise;
    if (!supabaseClient) return;
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return;
    return await supabaseClient
      .from('profiles')
      .upsert({ id: user.id, ...profile });
  },

  async getAllProfiles() {
    await supabasePromise;
    if (!supabaseClient) return { data: [], error: { message: 'Not configured' } };
    return await supabaseClient
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
  },

  async updateProfileById(id, updates) {
    await supabasePromise;
    if (!supabaseClient) return { error: { message: 'Not configured' } };
    return await supabaseClient
      .from('profiles')
      .update(updates)
      .eq('id', id);
  },

  // GENERIC CRUD
  async fetchData(table) {
    await supabasePromise;
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from(table)
      .select('*')
      .order('id', { ascending: false });
    return data || [];
  },

  getSyncQueue() {
    return JSON.parse(localStorage.getItem('ft-sync-queue') || '[]');
  },

  addToQueue(op, table, data, id = null) {
    const q = db_layer.getSyncQueue();
    q.push({ op, table, data, id: id || Date.now(), timestamp: Date.now() });
    localStorage.setItem('ft-sync-queue', JSON.stringify(q));
    console.log(`[Offline] Queued ${op} for ${table}`);
  },

  async processQueue() {
    await supabasePromise;
    if (!navigator.onLine || !supabaseClient) return;
    const q = db_layer.getSyncQueue();
    if (q.length === 0) return;
    
    console.log(`[Sync] Processing ${q.length} queued items...`);
    const remaining = [];
    for (const item of q) {
      try {
        let res;
        if (item.op === 'INSERT') {
          res = await db_layer.insertData(item.table, item.data, true);
        } else if (item.op === 'UPDATE') {
          res = await db_layer.updateData(item.table, item.id, item.data, true);
        } else if (item.op === 'DELETE') {
          res = await db_layer.deleteData(item.table, item.id, true);
        }
        
        if (res && res.error) {
          console.error(`[Sync] Failed item:`, res.error);
          remaining.push(item);
        }
      } catch (e) {
        remaining.push(item);
      }
    }
    localStorage.setItem('ft-sync-queue', JSON.stringify(remaining));
    if (remaining.length === 0) {
      if (typeof showToast === 'function') showToast('Cloud sync complete ✓');
    }
    if (typeof updateSyncStatus === 'function') updateSyncStatus();
  },

  async insertData(table, record, fromQueue = false) {
    await supabasePromise;
    if (!navigator.onLine && !fromQueue) {
      db_layer.addToQueue('INSERT', table, record);
      if (typeof updateSyncStatus === 'function') updateSyncStatus();
      return { data: null, error: null };
    }
    if (!supabaseClient) return { error: { message: 'Supabase not configured' } };
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return { error: { message: 'Not authenticated' } };
    return await supabaseClient
      .from(table)
      .insert([{ ...record, user_id: user.id }]);
  },

  async updateData(table, id, updates, fromQueue = false) {
    await supabasePromise;
    if (!navigator.onLine && !fromQueue) {
      db_layer.addToQueue('UPDATE', table, updates, id);
      if (typeof updateSyncStatus === 'function') updateSyncStatus();
      return { data: null, error: null };
    }
    if (!supabaseClient) return { error: { message: 'Supabase not configured' } };
    return await supabaseClient
      .from(table)
      .update(updates)
      .eq('id', id);
  },

  async deleteData(table, id, fromQueue = false) {
    await supabasePromise;
    if (!navigator.onLine && !fromQueue) {
      db_layer.addToQueue('DELETE', table, null, id);
      if (typeof updateSyncStatus === 'function') updateSyncStatus();
      return { data: null, error: null };
    }
    if (!supabaseClient) return { error: { message: 'Supabase not configured' } };
    return await supabaseClient
      .from(table)
      .delete()
      .eq('id', id);
  }
};;

window.db_layer = db_layer;
window.addEventListener('online', () => db_layer.processQueue());
setInterval(() => db_layer.processQueue(), 60000);

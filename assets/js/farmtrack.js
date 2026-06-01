// ===== DATA =====
const db = {
  fields:[
    {id:1,name:'North Field A',size:1.2,soil:'Sandy Loam',location:'Northern Block',notes:'Good drainage',lat:-15.385,lng:28.324},
    {id:2,name:'South Plot B',size:0.8,soil:'Clay Loam',location:'Southern Block',notes:'Slightly waterlogged',lat:-15.387,lng:28.326},
    {id:3,name:'East Garden',size:0.5,soil:'Loamy Sand',location:'Eastern Block',notes:'Dry season use',lat:-15.386,lng:28.328},
  ],
  crops:[
    {id:1,name:'Maize',field:'North Field A',planted:'2025-11-01',harvest:'2026-03-15',stage:'Growing',seeds:25,notes:'Hybrid SC403'},
    {id:2,name:'Soya Bean',field:'South Plot B',planted:'2025-11-10',harvest:'2026-02-28',stage:'Fertilizing',seeds:40,notes:'Early variety'},
    {id:3,name:'Groundnuts',field:'East Garden',planted:'2025-12-01',harvest:'2026-03-30',stage:'Planting',seeds:15,notes:'Local variety'},
    {id:4,name:'Sweet Potato',field:'North Field A',planted:'2025-10-15',harvest:'2026-01-20',stage:'Harvesting',seeds:0,notes:'200 vines planted'},
    {id:5,name:'Tobacco',field:'South Plot B',planted:'2025-11-05',harvest:'2026-04-10',stage:'Growing',seeds:8,notes:'Flue-cured variety'},
    {id:6,name:'Wheat',field:'East Garden',planted:'2025-11-20',harvest:'2026-03-25',stage:'Fertilizing',seeds:22,notes:'Dryland trial plot'},
    {id:7,name:'Barley',field:'North Field A',planted:'2025-11-18',harvest:'2026-03-18',stage:'Growing',seeds:18,notes:'Feed barley'},
    {id:8,name:'Vegetables',field:'East Garden',planted:'2025-12-08',harvest:'2026-02-14',stage:'Planting',seeds:10,notes:'Mixed greens and cabbage'},
  ],
  workers:[
    {id:1,name:'Bwalya Mwila',role:'Supervisor',rate:180,phone:'+260971234567',start:'2025-09-01',days:45},
    {id:2,name:'Esther Phiri',role:'General Labour',rate:120,phone:'+260972345678',start:'2025-10-01',days:38},
    {id:3,name:'Joseph Tembo',role:'Tractor Operator',rate:200,phone:'+260973456789',start:'2025-09-15',days:42},
    {id:4,name:'Chanda Mutale',role:'General Labour',rate:120,phone:'+260974567890',start:'2025-10-01',days:35},
    {id:5,name:'Grace Banda',role:'Spray Technician',rate:150,phone:'+260975678901',start:'2025-11-01',days:30},
    {id:6,name:'Moses Zulu',role:'General Labour',rate:120,phone:'+260976789012',start:'2025-11-01',days:28},
    {id:7,name:'Lucy Nkonde',role:'Irrigation Worker',rate:140,phone:'+260977890123',start:'2020-10-15',days:32},
  ],
  tasks:[
    {id:1,name:'Weed North Field A',field:'North Field A',worker:'Esther Phiri',due:'2026-01-10',priority:'High',status:'In Progress',desc:'Remove all weeds before fertilizer application'},
    {id:2,name:'Apply Top Dress Fertilizer',field:'South Plot B',worker:'Bwalya Mwila',due:'2026-01-08',priority:'High',status:'Pending',desc:'Apply CAN fertilizer at 200kg/ha'},
    {id:3,name:'Spray Fungicide',field:'East Garden',worker:'Grace Banda',due:'2026-01-15',priority:'Medium',status:'Pending',desc:'Preventative spray'},
    {id:4,name:'Irrigation Check',field:'North Field A',worker:'Lucy Nkonde',due:'2026-01-07',priority:'High',status:'Completed',desc:'Check all drip lines'},
    {id:5,name:'Harvest Sweet Potato',field:'North Field A',worker:'Joseph Tembo',due:'2026-01-20',priority:'Medium',status:'Pending',desc:'Use tractor for main rows'},
    {id:6,name:'Inspect Soya Growth',field:'South Plot B',worker:'Bwalya Mwila',due:'2026-01-25',priority:'Low',status:'Pending',desc:'Check for leaf discoloration and pests'},
  ],
  inputs:[
    {id:1,name:'Urea Fertilizer',type:'Fertilizer',crop:'Maize',qty:100,unit:'kg',cost:850,date:'2025-12-01'},
    {id:2,name:'SC403 Seed',type:'Seed',crop:'Maize',qty:25,unit:'kg',cost:1200,date:'2025-11-01'},
    {id:3,name:'Glyphosate Herbicide',type:'Herbicide',crop:'Soya Bean',qty:5,unit:'litres',cost:320,date:'2025-11-15'},
    {id:4,name:'CAN Fertilizer',type:'Fertilizer',crop:'Soya Bean',qty:80,unit:'kg',cost:680,date:'2025-12-10'},
    {id:5,name:'Groundnut Seed',type:'Seed',crop:'Groundnuts',qty:15,unit:'kg',cost:450,date:'2025-12-01'},
    {id:6,name:'Diesel Fuel',type:'Fuel',crop:'Maize',qty:50,unit:'litres',cost:600,date:'2025-11-20'},
    {id:7,name:'Dimethoate Pesticide',type:'Pesticide',crop:'Groundnuts',qty:2,unit:'litres',cost:280,date:'2026-01-02'},
  ],
  harvests:[
    {id:1,crop:'Sweet Potato',date:'2025-12-20',yield:800,price:4.5,field:'North Field A',buyer:'Lusaka City Market'},
    {id:2,crop:'Soya Bean',date:'2026-01-05',yield:1200,price:8.0,field:'South Plot B',buyer:'Zambia Farmers Union'},
  ],
  attendance:[
    {id:1,worker:'Bwalya Mwila',date:'2026-01-06',hours:8,task:'Supervision & Planning',status:'Present'},
    {id:2,worker:'Esther Phiri',date:'2026-01-06',hours:8,task:'Weeding North Field A',status:'Present'},
    {id:3,worker:'Joseph Tembo',date:'2026-01-06',hours:6,task:'Tractor Work',status:'Half Day'},
    {id:4,worker:'Grace Banda',date:'2026-01-05',hours:8,task:'Spray Application',status:'Present'},
    {id:5,worker:'Moses Zulu',date:'2026-01-06',hours:0,task:'—',status:'Absent'},
  ],
  smsLog:[
    {id:1,to:'All Workers',msg:'Roll call tomorrow at 06:30. Please bring your tools. North Field A weeding continues.',time:'Yesterday 17:00',count:7},
    {id:2,to:'Bwalya Mwila',msg:'Please prepare the fertilizer application schedule for South Plot B by Friday.',time:'2 days ago',count:1},
  ],
  chatHistory:[],
  inventory:[],
  advances:[],
  batches:[
    { id: 'B26-001', commodity: 'Maize', field: 'North Plot A', weight: 2500, status: 'Ready' },
    { id: 'B26-002', commodity: 'Soya Bean', field: 'South Plot B', weight: 1200, status: 'Pending' }
  ],
  expenses:[],
  pestReports:[],
  reminders:[]
};

// ===== REGIONAL DATA =====
const LANGUAGES = {
  en: { name:'English', flag:'🇬🇧' },
  ny: { name:'Nyanja / Chewa', flag:'🇿🇲' },
  bem: { name:'Bemba', flag:'🇿🇲' },
  toi: { name:'Tonga', flag:'🇿🇲' },
  loz: { name:'Lozi', flag:'🇿🇲' },
  sw: { name:'Kiswahili', flag:'🇹🇿' },
  ak: { name:'Twi / Akan', flag:'🇬🇭' },
  zu: { name:'isiZulu', flag:'🇿🇦' },
};
const COUNTRIES = {
  ZM: { name: 'Zambia', flag: '🇿🇲', currency: 'ZMW', langs: ['en', 'ny', 'bem', 'toi', 'loz'], season: 'Nov–Apr', region: 'Southern Africa' },
  GH: { name: 'Ghana', flag: '🇬🇭', currency: 'GHS', langs: ['en', 'ak'], season: 'May–Oct', region: 'West Africa' },
  TZ: { name: 'Tanzania', flag: '🇹🇿', currency: 'TZS', langs: ['sw', 'en'], season: 'Mar–Jun', region: 'East Africa' },
  ZA: { name: 'South Africa', flag: '🇿🇦', currency: 'ZAR', langs: ['en', 'zu'], season: 'Sep–Mar', region: 'Southern Africa' }
};
let currentCountry = localStorage.getItem('farmtrack-country') || 'ZM';
let currentCurrency = COUNTRIES[currentCountry] ? COUNTRIES[currentCountry].currency : 'ZMW';
let currentLang = localStorage.getItem('farmtrack-lang') || 'en';

// ===== NOTIFICATIONS =====
let notifications = [
  { id: 1, type: 'info', icon: '⚠️', bg: '#fef4e0', text: 'Heavy rain expected Thursday — avoid spraying Wednesday', time: '2 hours ago', read: false },
  { id: 2, type: 'info', icon: '✅', bg: '#e6f7ec', text: 'Task "Irrigation Check" completed by Lucy Nkonde', time: '5 hours ago', read: false },
  { id: 3, type: 'info', icon: '💰', bg: '#e3f0fa', text: 'Harvest revenue recorded: Soya Bean ZMW 9,600', time: 'Yesterday', read: false },
  { id: 4, type: 'info', icon: '👥', bg: '#f5ede4', text: 'Moses Zulu marked absent — reassign his task', time: 'Today 07:30', read: false },
];

function setCountry(code) {
  if (!COUNTRIES[code]) return;
  currentCountry = code;
  currentCurrency = COUNTRIES[code].currency;
  localStorage.setItem('farmtrack-country', code);
  
  const supported = COUNTRIES[code].langs;
  if (!supported.includes(currentLang)) {
    setLang(supported[0]);
  } else {
    applyTranslations();
    renderAll();
  }
  showToast(`Region set to ${COUNTRIES[code].name} (${currentCurrency}) ✓`);
}

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  en: {
    dashboard: "Dashboard",
    crops: "Crop Management",
    fields: "Fields & Plots",
    harvest: "Harvest Records",
    inputs: "Input Tracking",
    workers: "Labour Management",
    tasks: "Task Assignment",
    weather: "Weather & Alerts",
    ai: "AI Crop Advisor",
    sms: "SMS Notifications",
    reports: "Reports & Analytics",
    export: "Export Data",
    add_record: "+ Add Record",
    welcome: "Welcome back to",
    active_crops: "Active Crops",
    workers_on_duty: "Workers on Duty",
    pending_tasks: "Pending Tasks",
    revenue: "Revenue",
  },
  ny: {
    dashboard: "Zochitika",
    crops: "Kusamalira Mbewu",
    fields: "Minda",
    harvest: "Zokolola",
    inputs: "Zogwiritsira Ntchito",
    workers: "Ogwira Ntchito",
    tasks: "Ntchito",
    weather: "Nyengo",
    ai: "AI Advisor",
    sms: "Uthenga (SMS)",
    reports: "Malipoti",
    export: "Tumizani Data",
    add_record: "+ Onjezani",
    welcome: "Takulandilani ku",
    active_crops: "Mbewu Zilipo",
    workers_on_duty: "Ogwira Ntchito",
    pending_tasks: "Ntchito Zotsala",
    revenue: "Ndalama",
  }
};

function applyTranslations() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  // This is a simplified version, in a real app you'd use data-i18n attributes
  const titleMap = {
    dashboard: t.dashboard,
    crops: t.crops,
    fields: t.fields,
    harvest: t.harvest,
    inputs: t.inputs,
    workers: t.workers,
    tasks: t.tasks,
    weather: t.weather,
    ai: t.ai,
    sms: t.sms,
    reports: t.reports,
    export: t.export
  };
  Object.assign(pageTitles, titleMap);
  
  // Update UI elements that are always visible
  const topBtn = $('topbar-btn');
  if (topBtn && !topBtn.dataset.custom) topBtn.textContent = t.add_record;
  
  const welcomeText = document.querySelector('.hero-title');
  if (welcomeText && welcomeText.firstChild) {
    // Keep the span (farm name) but change the prefix
    const farmName = welcomeText.querySelector('span')?.outerHTML || "";
    welcomeText.innerHTML = `${t.welcome}<br>${farmName}`;
  }
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('farmtrack-lang', lang);
  applyTranslations();
  renderAll();
  showToast(`Language set to ${LANGUAGES[lang].name} ✓`);
}

// ===== SYNC INDICATOR =====
function updateSyncStatus() {
  const right = document.querySelector('.topbar-right');
  let indicator = $('sync-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'sync-indicator';
    indicator.style.cssText = 'display:flex; align-items:center; gap:5px; font-size:11px; padding:4px 8px; border-radius:12px; background:var(--gray-100); color:var(--gray-600);';
    right.prepend(indicator);
  }
  
  const isOnline = navigator.onLine;
  const queue = db_layer.getSyncQueue();
  
  if (!isOnline) {
    indicator.innerHTML = '<span style="color:var(--red-600)">●</span> Offline';
    indicator.title = 'You are currently offline. Changes will be saved locally.';
  } else if (queue.length > 0) {
    indicator.innerHTML = `<span style="color:var(--amber-600)" class="spin">↻</span> Syncing (${queue.length})`;
    indicator.title = `${queue.length} items waiting to be uploaded to cloud.`;
  } else {
    indicator.innerHTML = '<span style="color:var(--green-600)">●</span> Synced';
    indicator.title = 'All data is saved to cloud.';
  }
}
window.addEventListener('online', updateSyncStatus);
window.addEventListener('offline', updateSyncStatus);
setInterval(updateSyncStatus, 5000);

// ===== SESSION & AUTH =====
let currentUser = null;
let userProfile = null;
let conversionRate = 27.5; // 1 USD = 27.5 ZMW (Approx for 2026)

function isAuthSignUpTab() {
  return document.getElementById('signupPanel')?.classList.contains('active');
}

async function initAuth() {
  applyTranslations();
  updateSyncStatus();
  const session = await db_layer.getSession();
  if (session) {
    currentUser = session.user;
    userProfile = await db_layer.getProfile(currentUser.id);
    if (typeof hideLoader === 'function') hideLoader();
    hideAuth();
    document.body.classList.add('dash-theme');
    if (!userProfile || !userProfile.farm_name) {
      showOnboarding();
    } else {
      loadUserData();
    }
  } else {
    showAuth();
    if (typeof hideLoader === 'function') {
      setTimeout(hideLoader, 3600);
    }
  }
}

function showAuth() {
  const overlay = $('auth-overlay');
  if (overlay) overlay.classList.add('active');
  if (typeof setLandingVisible === 'function') setLandingVisible(true);
  document.body.classList.remove('dash-theme');
}

function hideAuth() {
  const overlay = $('auth-overlay');
  if (overlay) overlay.classList.remove('active');
  if (typeof setLandingVisible === 'function') setLandingVisible(false);
  if (typeof hideLoader === 'function') hideLoader();
  document.body.classList.add('dash-theme');
  if (!window.userRole) {
    window.userRole = localStorage.getItem('farmtrack-demo-role') || 'owner';
  }
  if (typeof applyRoleSecurity === 'function') applyRoleSecurity();
  loadSidebarWeather();
  if (typeof renderAll === 'function') renderAll();
}

let isSignUp = false;

async function handleAuth() {
  const signingUp = isAuthSignUpTab();
  isSignUp = signingUp;
  const emailEl = signingUp ? $('signup-email') : $('auth-email');
  const pwEl = signingUp ? $('signup-password') : $('auth-password');
  const email = emailEl?.value?.trim() || '';
  const password = pwEl?.value || '';
  if (!email || !password) {
    showToast('Please enter email and password');
    return;
  }

  const btn = signingUp ? $('btn-auth-signup') : $('btn-auth-login');
  const textEl = signingUp ? $('signupBtnText') : $('loginBtnText');
  const defaultLabel = signingUp
    ? '🌱 Create Farmer Account'
    : 'Enter FarmTrack Dashboard';
  const statusEl = $('auth-status');

  if (btn) btn.disabled = true;
  if (textEl) textEl.innerHTML = '<span class="btn-spinner"></span> Processing…';
  if (statusEl) statusEl.textContent = '⌛ Authenticating…';

  try {
    const { data, error } = signingUp
      ? await db_layer.signUp(email, password)
      : await db_layer.signIn(email, password);

    if (error) {
      if (statusEl) statusEl.textContent = '❌ ' + error.message;
      showToast(error.message);
      if (btn) btn.disabled = false;
      if (textEl) textEl.textContent = defaultLabel;
    } else {
      if (signingUp && data?.user) {
        const farm_name = $('auth-farm-name')?.value?.trim() || '';
        const location = $('auth-location')?.value?.trim() || '';
        const phone = $('auth-phone')?.value?.trim() || '';
        const farm_size_ha = parseFloat($('auth-size')?.value) || 0;

        if (farm_name || location || phone || farm_size_ha) {
          await db_layer.updateProfile({
            farm_name,
            location,
            phone,
            farm_size_ha,
            currency: 'ZMW',
            role: 'owner',
          });
        } else {
          await db_layer.updateProfile({ role: 'owner' });
        }
      }

      if (statusEl) statusEl.textContent = '✅ Success! Redirecting…';
      if (signingUp && data?.user && !data.session) {
        if (statusEl) statusEl.textContent = '✅ Check your email for verification link!';
        showToast('Verification email sent! ✓');
        if (btn) btn.disabled = false;
        if (textEl) textEl.textContent = defaultLabel;
      } else {
        setTimeout(() => location.reload(), 1000);
      }
    }
  } catch {
    if (statusEl) statusEl.textContent = '❌ Connection error';
    showToast('Auth failed. Check your connection.');
    if (btn) btn.disabled = false;
    if (textEl) textEl.textContent = defaultLabel;
  }
}

async function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    await db_layer.signOut();
    location.reload();
  }
}

function showOnboarding() { $('modal-onboarding').classList.add('active'); }
function hideOnboarding() { $('modal-onboarding').classList.remove('active'); }

async function completeOnboarding() {
  const farm_name = $('ob-farm-name').value.trim();
  const location = $('ob-location').value.trim();
  const farm_size_ha = parseFloat($('ob-size').value) || 0;

  if (!farm_name) { showToast('Please enter your Farm Name'); return; }

  await db_layer.updateProfile({ farm_name, location, farm_size_ha, currency: 'ZMW' });
  hideOnboarding();
  showToast('Welcome aboard! Let\'s start farming. ✓');
  location.reload();
}

// CURRENCY
function setCurrency(code) {
  currentCurrency = code;
  $('btn-curr-zmw').classList.toggle('active', code === 'ZMW');
  $('btn-curr-usd').classList.toggle('active', code === 'USD');
  renderAll();
  showToast(`Currency set to ${code} ✓`);
}

function formatCurr(amount) {
  let val = amount;
  if (currentCurrency === 'USD') val = amount / conversionRate;
  return new Intl.NumberFormat('en-ZM', { 
    style: 'currency', 
    currency: currentCurrency,
    maximumFractionDigits: currentCurrency === 'ZMW' ? 0 : 2
  }).format(val);
}

async function loadUserData() {
  // Update UI with profile data
  if (userProfile) {
    $('display-farm-name').textContent = userProfile.farm_name || "My Farm";
    $('display-location').textContent = `${userProfile.location || "Zambia"} ${userProfile.farm_size_ha || 0} ha`;
    const greet = document.getElementById('dash-greeting');
    if (greet) greet.textContent = `Welcome back to ${userProfile.farm_name || 'your farm'}`;
  }

  // Fetch all tables
  const tables = ['crops', 'fields', 'workers', 'tasks', 'inputs', 'harvests', 'attendance', 'sms_log', 'inventory', 'advances'];
  for (const t of tables) {
    try {
      const data = await db_layer.fetchData(t);
      if (data && data.length > 0) {
        const localKey = t === 'sms_log' ? 'smsLog' : t;
        db[localKey] = data;
      }
    } catch (e) {
      console.error(`Error fetching ${t}:`, e);
    }
  }
  
  renderAll();
  if (typeof applyRoleSecurity === 'function') applyRoleSecurity();
  const demoSel = document.getElementById('demo-role-select');
  if (demoSel) demoSel.value = getFarmRole ? getFarmRole() : (window.userRole || 'owner');
}

// ===== UTILS =====
const $=id=>document.getElementById(id);
function fmt(n){return Number(n).toLocaleString()}
function today(){return new Date().toISOString().split('T')[0]}
function stageColor(s){return'badge-'+({'Land Preparation':'gray','Planting':'blue','Fertilizing':'amber','Spraying':'amber','Growing':'green','Harvesting':'earth'}[s]||'gray')}
function statusColor(s){return'badge-'+({'Pending':'amber','In Progress':'blue','Completed':'green','Present':'green','Half Day':'amber','Absent':'red'}[s]||'gray')}
function priorityColor(p){return p==='High'?'badge-red':p==='Medium'?'badge-amber':'badge-gray'}
function cropIcon(c){return({'Maize':'🌽','Soya Bean':'🫘','Groundnuts':'🥜','Sweet Potato':'🍠','Tomato':'🍅','Cabbage':'🥬','Onion':'🧅','Sorghum':'🌾','Tobacco':'🍂','Wheat':'🌾','Barley':'🌾','Cassava':'🥔','Fruit':'🍎','Vegetables':'🥦'}[c]||'🌱')}
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function initDateFields(){['c-planted','c-harvest','h-date','i-date','w-start','a-date','t-due'].forEach(id=>{const el=$(id);if(el)el.value=today()})}

// ===== MODALS =====
function openModal(id){populateSelects();initDateFields();$(id).classList.add('open')}
function closeModal(id){$(id).classList.remove('open')}
window.addEventListener('click',e=>{if(e.target.classList.contains('modal-overlay'))e.target.classList.remove('open')})

function populateSelects(){
  const fn=db.fields.map(f=>f.name),cn=db.crops.map(c=>c.name),wn=db.workers.map(w=>w.name);
  const map={'c-field':fn,'h-field':fn,'t-field':fn,'s-field':fn,'h-crop':cn,'i-crop':cn,'a-worker':wn,'t-worker':wn};
  for(const[id,opts]of Object.entries(map)){const el=$(id);if(!el)continue;const cur=el.value;el.innerHTML=opts.map(o=>`<option${o===cur?' selected':''}>${o}</option>`).join('')}
  const dd=$('worker-select-dd');if(dd){dd.innerHTML='<option value="">+ Add recipient...</option>'+db.workers.map(w=>`<option value="${w.name}">${w.name} (${w.phone})</option>`).join('')}
}

// ===== SAVES =====
async function saveCrop(){
  const n=$('c-name').value.trim();
  if(!n)return;
  const record = {name:n,field:$('c-field').value,planted:$('c-planted').value,harvest:$('c-harvest').value,stage:$('c-stage').value,seeds:+$('c-seeds').value||0,notes:$('c-notes').value};
  const { data, error } = await db_layer.insertData('crops', record);
  if (!error) {
    db.crops.unshift({id: Date.now(), ...record}); // Update local UI immediately
    closeModal('modal-crop');
    renderAll();
    showToast('Crop added to cloud ✓');
  } else {
    showToast('Error saving crop: ' + error.message);
  }
}

async function saveField(){
  const n=$('f-name').value.trim();
  if(!n)return;
  const lat=+$('f-lat').value||-15.385;
  const lng=+$('f-lng').value||28.324;
  const inZambia = lat >= ZAMBIA_BOUNDS.latMin && lat <= ZAMBIA_BOUNDS.latMax && lng >= ZAMBIA_BOUNDS.lngMin && lng <= ZAMBIA_BOUNDS.lngMax;
  if(!inZambia){
    showToast('GPS point must be inside Zambia bounds.');
    return;
  }
  const record = {
    name:n,
    size:+$('f-size').value||0,
    soil:$('f-soil').value,
    location:$('f-loc').value || 'Zambia',
    notes:$('f-notes').value,
    lat,
    lng
  };
  const { error } = await db_layer.insertData('fields', record);
  if (!error) {
    db.fields.unshift({id: Date.now(), ...record});
    closeModal('modal-field');
    renderAll();
    showToast('Field added to cloud ✓');
  } else {
    showToast('Error saving field: ' + error.message);
  }
}

async function saveHarvest(){
  const y=+$('h-yield').value;
  if(!y)return;
  const record = {crop:$('h-crop').value,field:$('h-field').value,date:$('h-date').value,yield:y,price:+$('h-price').value,buyer:$('h-buyer').value};
  const { error } = await db_layer.insertData('harvests', record);
  if (!error) {
    db.harvests.unshift({id: Date.now(), ...record});
    closeModal('modal-harvest');
    renderAll();
    showToast('Harvest recorded in cloud ✓');
  } else {
    showToast('Error saving harvest: ' + error.message);
  }
}

async function saveInput(){
  const n=$('i-name').value.trim();
  if(!n)return;
  const record = {name:n,type:$('i-type').value,crop:$('i-crop').value,qty:+$('i-qty').value||0,unit:$('i-unit').value,cost:+$('i-cost').value||0,date:$('i-date').value};
  const { error } = await db_layer.insertData('inputs', record);
  if (!error) {
    db.inputs.unshift({id: Date.now(), ...record});
    closeModal('modal-input');
    renderAll();
    showToast('Input logged in cloud ✓');
  } else {
    showToast('Error saving input: ' + error.message);
  }
}

async function saveWorker(){
  const n=$('w-name').value.trim();
  if(!n)return;
  const record = {name:n,role:$('w-role').value,rate:+$('w-rate').value||0,phone:$('w-phone').value,start:$('w-start').value,days:0};
  const { error } = await db_layer.insertData('workers', record);
  if (!error) {
    db.workers.unshift({id: Date.now(), ...record});
    closeModal('modal-worker');
    renderAll();
    showToast('Worker added to cloud ✓');
  } else {
    showToast('Error saving worker: ' + error.message);
  }
}

async function saveAttendance(){
  const w=$('a-worker').value;
  if(!w)return;
  const record = {worker:w,date:$('a-date').value,hours:+$('a-hours').value||8,task:$('a-task').value,status:$('a-status').value};
  const { error } = await db_layer.insertData('attendance', record);
  if (!error) {
    db.attendance.unshift({id: Date.now(), ...record});
    const wk=db.workers.find(x=>x.name===w);
    if(wk&&$('a-status').value!=='Absent'){wk.days+=$('a-status').value==='Half Day'?0.5:1}
    closeModal('modal-attendance');
    renderAll();
    showToast('Attendance logged in cloud ✓');
  } else {
    showToast('Error saving attendance: ' + error.message);
  }
}

async function saveTask(){
  const n=$('t-name').value.trim();
  if(!n)return;
  const record = {name:n,field:$('t-field').value,worker:$('t-worker').value,due:$('t-due').value,priority:$('t-priority').value,status:$('t-status').value,description:$('t-desc').value};
  const { error } = await db_layer.insertData('tasks', record);
  if (!error) {
    db.tasks.unshift({id: Date.now(), ...record});
    closeModal('modal-task');
    renderAll();
    showToast('Task assigned in cloud ✓');
  } else {
    showToast('Error saving task: ' + error.message);
  }
}

async function saveInventoryItem() {
  const n = $('inv-name').value.trim();
  if (!n) return;
  const record = {
    item: n,
    category: $('inv-type').value,
    qty: +$('inv-qty').value || 0,
    unit: $('inv-unit').value,
    cost_per_unit: (+$('inv-cost').value || 0) / (+$('inv-qty').value || 1)
  };
  const { error } = await db_layer.insertData('inventory', record);
  if (!error) {
    db.inventory.unshift({ id: Date.now(), ...record });
    closeModal('modal-inventory-add');
    renderAll();
    showToast('Stock added to cloud ✓');
  } else {
    showToast('Error saving stock: ' + error.message);
  }
}

async function saveAdvance() {
  const w = $('adv-worker').value;
  if (!w) return;
  const record = {
    worker: w,
    amount: +$('adv-amount').value || 0,
    date: $('adv-date').value,
    reason: $('adv-reason').value
  };
  const { error } = await db_layer.insertData('advances', record);
  if (!error) {
    db.advances.unshift({ id: Date.now(), ...record });
    closeModal('modal-advance');
    renderAll();
    showToast('Advance recorded in cloud ✓');
  } else {
    showToast('Error saving advance: ' + error.message);
  }
}
async function completeTask(id){
  const t=db.tasks.find(x=>x.id===id);
  if(t){
    const { error } = await db_layer.updateData('tasks', id, { status: 'Completed' });
    if (!error) {
      t.status='Completed';
      renderAll();
      showToast('Task marked complete in cloud ✓');
    } else {
      showToast('Error updating task: ' + error.message);
    }
  }
}

async function editCropStage(id){
  const c=db.crops.find(x=>x.id===id);
  const stages=['Land Preparation','Planting','Fertilizing','Spraying','Growing','Harvesting'];
  const idx=stages.indexOf(c.stage);
  if(idx<stages.length-1){
    const nextStage = stages[idx+1];
    const { error } = await db_layer.updateData('crops', id, { stage: nextStage });
    if (!error) {
      c.stage=nextStage;
      renderAll();
      showToast(`${c.name} → ${c.stage} in cloud ✓`);
    } else {
      showToast('Error updating crop: ' + error.message);
    }
  } else {
    showToast(`Already at Harvesting stage`);
  }
}

async function deleteRecord(type,id){
  if(!confirm('Are you sure you want to delete this record?')) return;
  if(!db[type]) return;
  const { error } = await db_layer.deleteData(type, id);
  if (!error) {
    db[type]=db[type].filter(x=>x.id!==id);
    renderAll();
    showToast('Record deleted from cloud ✓');
  } else {
    showToast('Error deleting record: ' + error.message);
  }
}

// ===== RENDERS =====
const stagePct = { 'Land Preparation': 10, Planting: 25, Fertilizing: 40, Spraying: 55, Growing: 75, Harvesting: 95 };

function cropHealthColor(pct) {
  if (pct >= 85) return 'good';
  if (pct >= 70) return 'warn';
  return 'alert';
}

function cropBarColor(color) {
  if (color === 'good') return 'var(--sage)';
  if (color === 'warn') return 'var(--harvest)';
  return 'var(--rust)';
}

function activityDotColor(dot) {
  const map = { green: 'var(--sage)', blue: 'var(--sky)', amber: 'var(--harvest)', earth: 'var(--wheat)', gray: 'var(--white-60)' };
  return map[dot] || 'var(--sage)';
}

async function loadSidebarWeather() {
  const tempEl = document.getElementById('sbTemp');
  const descEl = document.getElementById('sbDesc');
  const iconEl = document.getElementById('sbWxIcon');
  if (!tempEl) return;
  try {
    const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-15.42&longitude=28.28&current_weather=true&timezone=Africa/Lusaka');
    const d = await r.json();
    const w = d.current_weather;
    const icons = { 0: '☀️', 1: '🌤', 2: '⛅', 3: '☁️', 61: '🌧', 80: '🌦', 95: '⛈' };
    const descs = { 0: 'Clear Sky', 1: 'Mainly Clear', 2: 'Partly Cloudy', 3: 'Overcast', 61: 'Rain', 80: 'Showers', 95: 'Thunderstorm' };
    const code = w.weathercode;
    if (iconEl) iconEl.textContent = icons[code] || '🌡';
    tempEl.textContent = Math.round(w.temperature) + '°C';
    if (descEl) descEl.textContent = descs[code] || 'Variable';
  } catch {
    if (iconEl) iconEl.textContent = '⛅';
    tempEl.textContent = '28°C';
    if (descEl) descEl.textContent = 'Partly Cloudy';
  }
}

function renderDashboardCharts() {
  const cb = document.getElementById('chartBars');
  if (!cb) return;
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const harvest = [18, 22, 28, 35, 42, 38, 52, 48];
  const rain = [55, 72, 88, 65, 48, 58, 76, 61];
  const hMax = Math.max(...harvest, 1);
  const rMax = Math.max(...rain, 1);
  cb.innerHTML = months.map((m, i) => {
    const hH = Math.round((harvest[i] / hMax) * 100);
    const rH = Math.round((rain[i] / rMax) * 100);
    return `<div class="bar-group"><div class="bar-wrap"><div class="bar harvest-bar" style="height:${hH}%"></div><div class="bar rain-bar" style="height:${rH}%"></div></div><div class="bar-label">${m}</div></div>`;
  }).join('');

  const rd = document.getElementById('rainDays');
  if (rd) {
    const rainDays = [{ d: 'Mo', v: 8 }, { d: 'Tu', v: 0 }, { d: 'We', v: 14 }, { d: 'Th', v: 3 }, { d: 'Fr', v: 0 }, { d: 'Sa', v: 6 }, { d: 'Su', v: 3 }];
    const rMax2 = Math.max(...rainDays.map((x) => x.v), 1);
    const total = rainDays.reduce((a, x) => a + x.v, 0);
    const totalEl = document.getElementById('rainfallTotal');
    if (totalEl) totalEl.innerHTML = total + '<span style="font-size:.9rem;color:var(--white-60)">mm</span>';
    rd.innerHTML = rainDays.map((r) => {
      const h = r.v ? Math.max(20, Math.round((r.v / rMax2) * 40)) : 6;
      return `<div class="rain-day"><div class="rain-bar ${r.v ? 'has-rain' : ''}" style="height:${h}px"></div><div class="rain-day-lbl">${r.d}</div></div>`;
    }).join('');
  }
}

function renderDashboard() {
  const farmName = userProfile?.farm_name || document.getElementById('display-farm-name')?.textContent || 'your farm';
  const greet = document.getElementById('dash-greeting');
  if (greet) greet.textContent = `Welcome back to ${farmName}`;

  const cropCount = db.crops.length;
  const workerCount = db.workers.length;
  const pendingTasks = db.tasks.filter((t) => t.status !== 'Completed').length;
  const rev = db.harvests.reduce((a, h) => a + h.yield * h.price, 0);

  if ($('s-crops')) $('s-crops').textContent = cropCount;
  if ($('s-workers')) $('s-workers').textContent = workerCount;
  if ($('s-tasks')) $('s-tasks').textContent = pendingTasks;
  if ($('s-revenue')) {
    const revStr = formatCurr(Math.round(rev));
    $('s-revenue').textContent = revStr.length > 12 ? revStr.replace(currentCurrency, '').trim() : revStr;
  }

  const subCrops = document.getElementById('kpi-crops-sub');
  if (subCrops) subCrops.textContent = `Across ${db.fields.length} field(s)`;
  const subWorkers = document.getElementById('kpi-workers-sub');
  if (subWorkers) subWorkers.textContent = `${db.attendance.filter((a) => a.status === 'Present').length} present today`;
  const subTasks = document.getElementById('kpi-tasks-sub');
  if (subTasks) subTasks.textContent = `${db.tasks.filter((t) => t.status === 'Pending').length} pending`;
  const subRev = document.getElementById('kpi-revenue-sub');
  if (subRev) subRev.textContent = `${db.harvests.length} harvest record(s)`;

  const mapSub = document.getElementById('field-map-sub');
  if (mapSub) mapSub.textContent = `${farmName} · ${db.fields.reduce((a, f) => a + (f.size || 0), 0).toFixed(1)} ha`;
  const cropSub = document.getElementById('crop-list-sub');
  if (cropSub) cropSub.textContent = `${cropCount} active crop(s) · live data`;

  const cl = document.getElementById('cropList');
  if (cl) {
    cl.innerHTML = db.crops.slice(0, 6).map((c) => {
      const pct = stagePct[c.stage] || 50;
      const color = cropHealthColor(pct);
      return `<div class="crop-row" onclick="showPage('crops')"><div class="crop-icon">${cropIcon(c.name)}</div><div class="crop-info"><div class="crop-name">${c.name}</div><div class="crop-detail">${c.field} · ${c.stage}</div></div><div class="crop-status"><div class="crop-pct ${color}">${pct}%</div><div class="crop-stage">${c.stage}</div></div></div><div class="crop-bar-wrap"><div class="crop-bar-bg"><div class="crop-bar-fg" style="width:${pct}%;background:${cropBarColor(color)}"></div></div></div>`;
    }).join('') || '<div style="padding:24px;color:var(--white-60);font-size:.85rem">No crops yet — add your first crop.</div>';
  }

  const activities = [];
  db.harvests.slice(0, 2).forEach((h) => activities.push({ dot: 'green', text: `<strong>Harvest</strong> of ${h.crop} — ${fmt(h.yield)} kg`, time: h.date }));
  db.tasks.filter((t) => t.status === 'Completed').slice(0, 2).forEach((t) => activities.push({ dot: 'blue', text: `<strong>Task done:</strong> ${t.name}`, time: 'Recently' }));
  db.inputs.slice(0, 2).forEach((i) => activities.push({ dot: 'amber', text: `<strong>Input:</strong> ${i.name} — ${formatCurr(i.cost)}`, time: i.date }));
  if (!activities.length) activities.push({ dot: 'gray', text: 'No recent activity yet.', time: 'Add records to see updates' });

  const al = document.getElementById('activityList');
  if (al) {
    al.innerHTML = activities.slice(0, 6).map((a) => `<div class="activity-item"><div class="ai-line"><div class="ai-dot" style="background:${activityDotColor(a.dot)}"></div><div class="ai-connector"></div></div><div class="ai-body"><div class="ai-text">${a.text}</div><div class="ai-time">${a.time}</div></div></div>`).join('');
  }

  const wl = document.getElementById('workerList');
  if (wl) {
    const gradients = ['linear-gradient(135deg,#4A7C3F,#7FB069)', 'linear-gradient(135deg,#5C3D1E,#C8A96E)', 'linear-gradient(135deg,#7FB069,#C8A96E)', 'linear-gradient(135deg,#C4622D,#E8C547)'];
    const todayStr = today();
    wl.innerHTML = db.workers.slice(0, 5).map((w, i) => {
      const init = w.name.split(' ').map((x) => x[0]).join('').slice(0, 2);
      const task = db.tasks.find((t) => t.worker === w.name && t.status !== 'Completed');
      const att = db.attendance.find((a) => a.worker === w.name && a.date === todayStr);
      const st = att?.status || '—';
      const status = st === 'Absent' ? ['ws-off', 'Absent'] : st === 'Half Day' ? ['ws-break', 'Half day'] : st === 'Present' ? ['ws-field', 'Present'] : ['ws-break', 'Tap to mark'];
      const safeName = w.name.replace(/'/g, "\\'");
      return `<div class="worker-row"><div class="worker-avatar" style="background:${gradients[i % gradients.length]}" onclick="openEditWorker(${w.id})" title="Edit worker">${init}</div><div class="worker-info" onclick="openEditWorker(${w.id})"><div class="worker-name">${w.name}</div><div class="worker-task">${task ? task.name : w.role}</div></div><span class="worker-status ${status[0]} click-badge" onclick="cycleWorkerToday('${safeName}')" title="Tap to change today">${status[1]}</span></div>`;
    }).join('') || '<div style="padding:20px 24px;color:var(--white-60);font-size:.85rem">No workers yet.</div>';
  }

  const pending = db.tasks.filter((t) => t.status !== 'Completed').slice(0, 6);
  const tl = document.getElementById('taskList');
  const taskDone = document.getElementById('taskDone');
  const taskTotal = document.getElementById('taskTotal');
  if (taskTotal) taskTotal.textContent = pending.length;
  if (taskDone) taskDone.textContent = db.tasks.filter((t) => t.status === 'Completed').length;
  if (tl) {
    tl.innerHTML = pending.map((t) => {
      const tag = t.priority === 'High' ? ['tt-urgent', 'Urgent'] : ['tt-crop', t.priority || 'Task'];
      return `<div class="task-item"><div class="task-check click-badge" onclick="toggleTaskComplete(${t.id})" title="Mark done"></div><div class="task-body" onclick="openEditTask(${t.id})" title="Edit task"><div class="task-text">${t.name}</div><div class="task-meta"><span class="task-tag ${tag[0]}">${tag[1]}</span><span class="task-due">${t.due}</span></div></div></div>`;
    }).join('') || '<div style="padding:20px 24px;color:var(--white-60);font-size:.85rem">No pending tasks.</div>';
  }

  renderDashboardCharts();
  renderWeatherMini();
}
function renderCrops(){$('crops-table').innerHTML=db.crops.map(c=>`<tr><td><strong>${cropIcon(c.name)} ${c.name}</strong>${c.notes?`<br><span style="font-size:11px;color:var(--gray-500)">${c.notes}</span>`:''}</td><td>${c.field}</td><td>${c.planted}</td><td>${c.harvest}</td><td><span class="badge ${stageColor(c.stage)}">${c.stage}</span></td><td>${c.seeds>0?c.seeds+' kg':'—'}</td><td><button class="btn btn-secondary btn-sm" onclick="editCropStage(${c.id})">Update Stage</button></td></tr>`).join('')}
function renderFields(){const cm={};db.crops.forEach(c=>{if(!cm[c.field])cm[c.field]=[];cm[c.field].push(c.name)});const sc={'Sandy Loam':'earth','Clay Loam':'blue','Sandy':'amber','Red Clay':'red','Loamy Sand':'green'};$('fields-grid').innerHTML=db.fields.map(f=>`<div class="plot-card"><div class="crop-icon">🌿</div><div class="plot-name">${f.name}</div><div class="plot-sub">${f.location}</div><div style="margin-top:8px"><span class="badge badge-${sc[f.soil]||'gray'}">${f.soil}</span></div><div class="plot-stats"><div class="plot-stat"><strong>${f.size} ha</strong>Size</div><div class="plot-stat"><strong>${(cm[f.name]||[]).length}</strong>Crops</div></div>${(cm[f.name]||[]).map(c=>`<span class="tag">${cropIcon(c)} ${c}</span>`).join('')}${f.notes?`<div style="font-size:11.5px;color:var(--gray-500);margin-top:8px">${f.notes}</div>`:''}</div>`).join('')}
function renderHarvest(){$('harvest-table').innerHTML=db.harvests.map(h=>`<tr><td><strong>${cropIcon(h.crop)} ${h.crop}</strong></td><td>${h.date}</td><td>${fmt(h.yield)} kg</td><td>${currentCurrency} ${h.price.toFixed(2)}</td><td style="color:var(--green-700);font-weight:600">${currentCurrency} ${fmt(Math.round(h.yield*h.price))}</td><td>${h.field}</td></tr>`).join('')}
function renderInputs(){const tc={'Fertilizer':'green','Seed':'earth','Herbicide':'amber','Pesticide':'amber','Fuel':'blue','Other':'gray'};$('inputs-table').innerHTML=db.inputs.map(i=>`<tr><td><strong>${i.name}</strong></td><td><span class="badge badge-${tc[i.type]||'gray'}">${i.type}</span></td><td>${i.crop}</td><td>${i.qty}</td><td>${i.unit}</td><td>${currentCurrency} ${fmt(i.cost)}</td><td>${i.date}</td></tr>`).join('')}
function renderWorkers(){$('workers-table').innerHTML=db.workers.map(w=>`<tr><td><div style="display:flex;align-items:center;gap:10px"><div class="avatar avatar-green">${w.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><div><strong>${w.name}</strong><br><span style="font-size:11px;color:var(--gray-500)">${w.phone}</span></div></div></td><td>${w.role}</td><td>${currentCurrency} ${fmt(w.rate)}</td><td>${w.days}</td><td style="color:var(--green-700);font-weight:600">${currentCurrency} ${fmt(Math.round(w.rate*w.days))}</td><td><span class="badge badge-green">Active</span></td></tr>`).join('');$('attendance-table').innerHTML=db.attendance.map(a=>`<tr><td>${a.worker}</td><td>${a.date}</td><td>${a.hours}h</td><td>${a.task}</td><td><span class="badge ${statusColor(a.status)}">${a.status}</span></td></tr>`).join('')}
function renderTasks(){$('tasks-table').innerHTML=db.tasks.map(t=>`<tr><td><strong>${t.name}</strong>${t.desc?`<br><span style="font-size:11px;color:var(--gray-500)">${t.desc}</span>`:''}</td><td>${t.field}</td><td>${t.worker}</td><td>${t.due}</td><td><span class="badge ${priorityColor(t.priority)}">${t.priority}</span></td><td><span class="badge ${statusColor(t.status)}">${t.status}</span></td><td>${t.status!=='Completed'?`<button class="btn btn-secondary btn-sm" onclick="completeTask(${t.id})">Done</button>`:'—'}</td></tr>`).join('')}
function renderReports(){
  const totalRev=db.harvests.reduce((a,h)=>a+h.yield*h.price,0);
  const totalInp=db.inputs.reduce((a,i)=>a+i.cost,0);
  const totalLab=db.workers.reduce((a,w)=>a+w.rate*w.days,0);
  const net=totalRev-totalInp-totalLab;
  $('report-summary').innerHTML=`<div class="report-card"><div class="rc-label">Total Revenue</div><div class="rc-value rc-revenue">${formatCurr(Math.round(totalRev))}</div></div><div class="report-card"><div class="rc-label">Total Costs</div><div class="rc-value rc-cost">${formatCurr(Math.round(totalInp+totalLab))}</div></div><div class="report-card"><div class="rc-label">Net Profit</div><div class="rc-value rc-profit">${formatCurr(Math.round(net))}</div></div>`;
  const cd={};db.crops.forEach(c=>{cd[c.name]={rev:0,inp:0}});
  db.harvests.forEach(h=>{if(cd[h.crop])cd[h.crop].rev+=h.yield*h.price});
  db.inputs.forEach(i=>{if(cd[i.crop])cd[i.crop].inp+=i.cost});
  const cp=Object.entries(cd).map(([n,d])=>({n,p:d.rev-d.inp}));
  const maxP=Math.max(...cp.map(x=>Math.abs(x.p)),1);
  const bc=['green','earth','amber','blue'];
  $('report-profit-chart').innerHTML=cp.map((c,i)=>`<div class="bar-row"><div class="bar-label">${c.n}</div><div class="bar-track"><div class="bar-fill bar-${bc[i%4]}" style="width:${Math.round(Math.max(c.p,0)/maxP*100)}%">${formatCurr(Math.round(c.p))}</div></div></div>`).join('');
  const maxW=Math.max(...db.workers.map(w=>w.rate*w.days),1);
  $('report-labour-chart').innerHTML=db.workers.slice(0,5).map(w=>`<div class="bar-row"><div class="bar-label">${w.name.split(' ')[0]}</div><div class="bar-track"><div class="bar-fill bar-earth" style="width:${Math.round(w.rate*w.days/maxW*100)}%">${formatCurr(w.rate*w.days)}</div></div></div>`).join('');
  const labPC=totalLab/Math.max(db.crops.length,1);
  $('profitability-table').innerHTML=Object.entries(cd).map(([n,d])=>{const lab=labPC;const net=d.rev-d.inp-lab;const mg=d.rev>0?Math.round(net/d.rev*100):0;return`<tr><td><strong>${cropIcon(n)} ${n}</strong></td><td style="color:var(--blue-600)">${formatCurr(Math.round(d.rev))}</td><td>${formatCurr(Math.round(d.inp))}</td><td>${formatCurr(Math.round(lab))}</td><td style="color:${net>=0?'var(--green-700)':'var(--red-600)'};font-weight:600">${formatCurr(Math.round(net))}</td><td><span class="badge ${mg>=20?'badge-green':mg>=0?'badge-amber':'badge-red'}">${mg}%</span></td></tr>`}).join('')}

// ===== WEATHER =====
const weatherData={
  temp:29,feels:33,humidity:75,wind:'14 km/h NE',condition:'Partly Cloudy',
  forecast:[
    {day:'Today',icon:'⛅',high:29,low:20,rain:'40%'},
    {day:'Wed',icon:'🌧️',high:26,low:19,rain:'80%'},
    {day:'Thu',icon:'⛈️',high:24,low:18,rain:'90%'},
    {day:'Fri',icon:'🌦️',high:27,low:20,rain:'55%'},
    {day:'Sat',icon:'☀️',high:31,low:21,rain:'10%'},
  ],
  alerts:[
    {type:'warn',icon:'⚠️',msg:'Heavy rain expected Thursday — avoid spraying Wed/Thu'},
    {type:'warn',icon:'💧',msg:'High humidity (75%) — monitor for fungal disease on Soya Bean'},
    {type:'good',icon:'✅',msg:'Good planting conditions Friday–Saturday'},
    {type:'info',icon:'🌡️',msg:'Peak temperature 31°C Saturday — water crops Friday evening'},
  ]
};
function renderWeather(){
  $('weather-main-card').innerHTML=`<div style="font-size:12px;color:var(--green-300);margin-bottom:4px">Lusaka, Zambia</div><div class="weather-temp">${weatherData.temp}°C</div><div class="weather-desc">${weatherData.condition}</div><div class="weather-meta"><span>💧 ${weatherData.humidity}%</span><span>💨 ${weatherData.wind}</span><span>🌡️ Feels ${weatherData.feels}°C</span></div>`;
  $('weather-forecast-card').innerHTML=`<div class="forecast-title">5-Day Forecast</div><div class="forecast-days">${weatherData.forecast.map(d=>`<div class="forecast-day"><div class="day-name">${d.day}</div><div class="day-icon">${d.icon}</div><div class="day-temp">${d.high}°/${d.low}°</div><div class="day-rain">${d.rain}</div></div>`).join('')}</div>`;
  $('weather-alerts').innerHTML=weatherData.alerts.map(a=>`<div class="alert-pill alert-${a.type}"><span>${a.icon}</span><span>${a.msg}</span></div>`).join('');
  $('crop-weather-alerts').innerHTML=db.crops.map(c=>{const alerts={'Maize':'Tasseling stage needs consistent moisture. Avoid water stress this week.','Soya Bean':'High humidity risk: inspect for Sclerotinia stem rot. Apply fungicide before Thursday rain.','Groundnuts':'Planting stage — rain forecast is ideal for germination. Plant Wednesday morning.','Sweet Potato':'Harvesting stage — harvest before Thursday heavy rain to avoid root rotting.'};return`<div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-100)"><span style="font-size:20px">${cropIcon(c.name)}</span><div><div style="font-weight:600;font-size:13px">${c.name}</div><div style="font-size:12.5px;color:var(--gray-700);margin-top:3px">${alerts[c.name]||'Monitor conditions regularly.'}</div></div></div>`}).join('');
  $('planting-calendar').innerHTML=[
    {crop:'Maize',window:'Oct 15 – Dec 15',status:'green',note:'Currently in season'},
    {crop:'Soya Bean',window:'Nov 1 – Dec 31',status:'green',note:'Currently in season'},
    {crop:'Groundnuts',window:'Nov 15 – Jan 15',status:'green',note:'Early planting window'},
    {crop:'Sunflower',window:'Dec 1 – Jan 31',status:'amber',note:'Good time to plant'},
    {crop:'Sorghum',window:'Nov 1 – Jan 15',status:'amber',note:'Late window closing'},
    {crop:'Cassava',window:'Oct 1 – Mar 31',status:'green',note:'Year-round possible'},
  ].map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--gray-100)"><div><div style="font-weight:500;font-size:13px">${r.crop}</div><div style="font-size:11.5px;color:var(--gray-500)">${r.window}</div></div><span class="badge badge-${r.status}">${r.note}</span></div>`).join('')}

function renderWeatherMini(){
  const strip = $('dash-weather-strip');
  if (!strip) return;
  strip.innerHTML=`<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;background:var(--card);border-radius:10px;border:1px solid var(--border);padding:12px 16px"><span style="font-size:22px">⛅</span><span style="font-size:16px;font-weight:600;color:var(--white-90)">${weatherData.temp}°C</span><span style="font-size:13px;color:var(--white-60)">Lusaka · ${weatherData.condition}</span><div style="flex:1"></div>${weatherData.alerts.slice(0,2).map(a=>`<div class="alert-pill alert-${a.type}" style="font-size:11.5px">${a.icon} ${a.msg}</div>`).join('')}<button class="btn btn-ghost btn-sm" onclick="showPage('weather')">Full Forecast →</button></div>`;
}

// ===== AI ADVISOR =====
let currentAIImage = null;
const quickPromptsData=['What should I spray on my Soya Bean this week?','Which of my crops is most profitable?','How much fertilizer should I apply to Maize?','Are my labour costs too high?','What tasks should I prioritize today?','When should I harvest my Sweet Potato?'];

function getAIEndpoint() {
  if (!SUPABASE_URL) return '';
  return `${SUPABASE_URL.replace(/\/+$/,'')}/functions/v1/ai-chat`;
}

function handleAIImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      currentAIImage = e.target.result;
      $('ai-image-preview').src = currentAIImage;
      $('ai-image-preview-container').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function clearAIImage() {
  currentAIImage = null;
  $('ai-image-input').value = '';
  $('ai-image-preview-container').style.display = 'none';
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}
function buildFarmContext(){
  const country = COUNTRIES[currentCountry];
  const totalRev=db.harvests.reduce((a,h)=>a+h.yield*h.price,0);
  const totalInp=db.inputs.reduce((a,i)=>a+i.cost,0);
  const totalLab=db.workers.reduce((a,w)=>a+w.rate*w.days,0);
  return`You are an expert AI agricultural advisor for "${db.farmName || "Ndou's Farm"}" located in ${country.name} (${country.region}).
  
Current farm data:
- Region: ${country.name}
- Currency: ${country.currency}
- Current Season: ${country.season}
- Crops: ${db.crops.map(c=>`${c.name} (${c.stage} stage, planted ${c.planted}, field: ${c.field})`).join('; ')}
- Fields: ${db.fields.map(f=>`${f.name} (${f.size}ha, ${f.soil})`).join('; ')}
- Workers: ${db.workers.length} workers, total wages owed: ${country.currency} ${fmt(Math.round(totalLab))}
- Pending tasks: ${db.tasks.filter(t=>t.status!=='Completed').map(t=>t.name).join(', ')}
If a user uploads a photo, analyze it for:
1. Pests (Fall Armyworm, Aphids, Maize Stalk Borer).
2. Diseases (Maize Streak Virus, Rust, Early/Late Blight).
3. Nutrient Deficiencies (Nitrogen - yellowing, Phosphorus - purpling, Potassium - burnt edges).
If you see an issue, suggest the EXACT chemical or organic treatment (e.g., Cypermethrin, Belt, or Mancozeb) and local application rates.`;
}
function renderAIPage(){
  $('ctx-crops').textContent=db.crops.length+' crops';
  $('ctx-workers').textContent=db.workers.length+' workers';
  $('ctx-tasks').textContent=db.tasks.length+' tasks';
  $('ctx-inputs').textContent='ZMW '+fmt(db.inputs.reduce((a,i)=>a+i.cost,0))+' inputs';
  $('quick-prompts').innerHTML=quickPromptsData.map(q=>`<button class="quick-prompt" onclick="sendQuickPrompt('${q.replace(/'/g,"\\'")}')">💬 ${q}</button>`).join('');
  if($('chat-messages').children.length===0){
    appendAIMsg('ai','👋 Hello! I\'m your AI Crop Advisor. I have full access to your farm data — crops, costs, workers, tasks and today\'s weather in Lusaka.\n\nAsk me anything: pest control, fertilizer timing, labour costs, harvest scheduling, or which crops are most profitable. What would you like to know?');
  }
}
function appendAIMsg(role,text){
  const msgs=$('chat-messages');
  const div=document.createElement('div');
  div.className=`chat-msg ${role}`;
  const initials=role==='ai'?'AI':'You';
  const formatted=text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/^• /gm,'• ');
  div.innerHTML=`<div class="msg-avatar ${role==='ai'?'ai-av':'user-av'}">${initials}</div><div class="msg-bubble ${role}">${formatted}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}
function showTyping(){
  const msgs=$('chat-messages');
  const div=document.createElement('div');
  div.className='chat-msg ai';div.id='typing-indicator';
  div.innerHTML=`<div class="msg-avatar ai-av">AI</div><div class="chat-typing"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
}
function hideTyping(){const t=$('typing-indicator');if(t)t.remove()}
async function sendChat(){
  const input=$('chat-input');const text=input.value.trim();if(!text && !currentAIImage)return;
  
  if (!SUPABASE_ANON_KEY || !SUPABASE_URL) {
    showToast('⚠️ Please configure Supabase in Settings first.');
    showPage('settings');
    return;
  }

  const msgText = text || "Analyze this plant photo for me.";
  input.value='';$('chat-send-btn').disabled=true;
  
  window.appendAIMsg('user', msgText, currentAIImage);
  const sentImg = currentAIImage;
  clearAIImage();
  showTyping();
  
  db.chatHistory.push({role:'user',content:msgText, image: sentImg});
  try{
    const endpoint = getAIEndpoint();
    if (!endpoint) {
      hideTyping();
      window.appendAIMsg('ai','AI is not configured yet. Add your Supabase URL and anon key in browser console:\nlocalStorage.setItem("farmtrack-supabase-url","https://YOUR-PROJECT.supabase.co")\nlocalStorage.setItem("farmtrack-supabase-anon-key","YOUR_ANON_KEY")\nThen refresh.');
      return;
    }
    const sysPrompt=buildFarmContext();
    const payload = {
      prompt: msgText,
      systemContext: sysPrompt,
      history: db.chatHistory.slice(-12),
      imageDataUrl: sentImg || null,
    };
    const headers = {'Content-Type':'application/json'};
    if (SUPABASE_ANON_KEY) {
      headers.apikey = SUPABASE_ANON_KEY;
      headers.Authorization = `Bearer ${SUPABASE_ANON_KEY}`;
    }
    const res=await fetch(endpoint,{method:'POST',headers,body:JSON.stringify(payload)});
    const data=await res.json().catch(()=>({}));
    hideTyping();
    if (!res.ok) {
      const errMsg = data.error || `AI backend error (${res.status})`;
      window.appendAIMsg('ai',`Could not get AI response: ${errMsg}`);
      return;
    }
    const reply=data.reply || 'Sorry, I couldn\'t get a response. Please try again.';
    db.chatHistory.push({role:'assistant',content:reply});
    window.appendAIMsg('ai',reply);
  }catch(e){hideTyping();window.appendAIMsg('ai','Network error — please check your connection and Supabase function setup.');}
  $('chat-send-btn').disabled=false;input.focus();
}

const _origAppendMsg = appendAIMsg;
window.appendAIMsg = function(role, text, image) {
  _origAppendMsg(role, text);
  if (image) {
    const bubbles = document.querySelectorAll('.msg-bubble');
    const last = bubbles[bubbles.length - 1];
    if (last) {
      const img = document.createElement('img');
      img.src = image;
      img.style.cssText = 'display:block;max-width:200px;border-radius:8px;margin-top:8px;';
      last.prepend(img);
    }
  }
};
function sendQuickPrompt(q){$('chat-input').value=q;sendChat()}
function handleChatKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat()}}

// ===== SMS =====
let smsRecipients = [];
let smsConfig = JSON.parse(localStorage.getItem('farmtrack-sms-config') || '{"username":"","apikey":"","mode":"sandbox","senderId":"FARM"}');

function renderSMS() {
  populateSelects();
  loadSmsSettings();
  $('sms-templates').innerHTML = [
    { label: 'Morning Shift', msg: 'Report to the main field at 7:00 AM tomorrow. Bring your tools. Thank you.' },
    { label: 'Weather Cancel', msg: 'Today\'s work is cancelled due to bad weather. Stay safe. You will be notified when to resume.' },
    { label: 'Payday', msg: 'Payday is tomorrow. Please collect your pay from the farm office between 8 AM and 12 PM.' },
    { label: 'Harvest Start', msg: 'Harvest begins on Monday. All workers are needed. Start time is 6:00 AM sharp. Please be on time.' },
    { label: 'Meeting', msg: 'There will be a workers meeting at the farm office today at 3 PM. Attendance is required.' },
    { label: 'Docs Request', msg: 'Please bring your national registration card to the farm office this week for record update.' },
  ].map(t => `<button class="sms-tpl" onclick="useSmsTemplate('${t.msg.replace(/'/g, "\\'")}')">${t.label}</button>`).join('');
  renderSmsLog();
  renderRecipientChips();
  updateSmsStats();
}

function useSmsTemplate(msg) {
  $('sms-body').value = msg;
  updateSmsStats();
}

function addRecipient(sel) {
  const v = sel.value;
  if (!v || smsRecipients.includes(v)) return;
  smsRecipients.push(v);
  renderRecipientChips();
  sel.value = '';
}

function addAllWorkersToSms() {
  smsRecipients = db.workers.map(w => w.name);
  renderRecipientChips();
  showToast(`Added all ${db.workers.length} workers to recipients ✓`);
}

function removeRecipient(name) {
  smsRecipients = smsRecipients.filter(r => r !== name);
  renderRecipientChips();
}

function renderRecipientChips() {
  const container = $('recipient-chips');
  if (!container) return;
  container.innerHTML = smsRecipients.map(r => `<div class="recipient-chip">${r}<span class="chip-remove" onclick="removeRecipient('${r}')">×</span></div>`).join('');
  const btn = $('btn-send-sms');
  if (btn) btn.textContent = `📱 Send SMS to ${smsRecipients.length} Workers`;
}

function updateSmsStats() {
  const body = $('sms-body');
  if (!body) return;
  const len = body.value.length;
  const parts = Math.max(1, Math.ceil(len / 160));
  $('sms-char-count').textContent = `${len} / ${parts * 160} characters`;
  $('sms-parts-count').textContent = `Parts: ${parts}`;
  const countEl = $('sms-char-count');
  countEl.style.color = len > 160 ? 'var(--amber-600)' : 'var(--gray-500)';
}

function loadSmsSettings() {
  if ($('at-username')) $('at-username').value = smsConfig.username;
  if ($('at-apikey')) $('at-apikey').value = smsConfig.apikey;
  if ($('at-mode')) $('at-mode').value = smsConfig.mode;
  if ($('sms-sender-id')) $('sms-sender-id').value = smsConfig.senderId;
  updateAtStatus(smsConfig.username && smsConfig.apikey);
}

function saveSmsSettings() {
  smsConfig = {
    username: $('at-username').value.trim(),
    apikey: $('at-apikey').value.trim(),
    mode: $('at-mode').value,
    senderId: $('sms-sender-id').value.trim() || 'FARM'
  };
  localStorage.setItem('farmtrack-sms-config', JSON.stringify(smsConfig));
  updateAtStatus(smsConfig.username && smsConfig.apikey);
  showToast('SMS settings saved & connection verified ✓');
}

function updateAtStatus(connected) {
  const badge = $('at-status-badge');
  if (!badge) return;
  badge.textContent = connected ? 'Connected (AT API)' : 'Disconnected';
  badge.className = `badge ${connected ? 'badge-green' : 'badge-gray'}`;
}

function getSmsEndpoint() {
  if (!SUPABASE_URL) return '';
  return `${SUPABASE_URL.replace(/\/+$/,'')}/functions/v1/send-sms`;
}

async function sendSms() {
  const msg = $('sms-body').value.trim();
  if (!msg) { showToast('Please type a message'); return; }
  if (smsRecipients.length === 0) { showToast('Please add at least one recipient'); return; }
  
  if (!SUPABASE_ANON_KEY || !SUPABASE_URL) {
    showToast('⚠️ Please configure Supabase in Settings first.');
    showPage('settings');
    return;
  }

  const btn = $('btn-send-sms');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = '⌛ Sending...';

  // Find phone numbers for selected recipients
  const selectedWorkers = db.workers.filter(w => smsRecipients.includes(w.name));
  const phones = selectedWorkers.map(w => {
    // Basic normalization: remove spaces, ensure it starts with +
    let p = w.phone.replace(/\s+/g, '');
    if (!p.startsWith('+')) {
      // Default to Zambia prefix if missing, but better to just warn
      console.warn(`Phone number ${p} for ${w.name} is missing '+' prefix.`);
    }
    return p;
  }).filter(p => p.length > 5).join(',');

  if (!phones) {
    showToast('❌ No valid phone numbers found for selected workers.');
    btn.disabled = false;
    btn.textContent = originalText;
    return;
  }

  try {
    const endpoint = getSmsEndpoint();
    if (!endpoint) {
      showToast('Supabase is not configured yet.');
      btn.disabled = false;
      btn.textContent = originalText;
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    };

    const payload = {
      to: phones,
      message: msg,
      senderId: smsConfig.senderId || 'FARM'
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok) {
      const deliveredCount = data?.SMSMessageData?.Recipients?.filter(r => r.status === 'Success').length || 0;
      const toLabel = smsRecipients.length === db.workers.length ? 'All Workers' : smsRecipients.join(', ');
      db.smsLog.unshift({
        id: Date.now(),
        to: toLabel,
        msg,
        time: 'Just now',
        count: deliveredCount,
        sender: smsConfig.senderId,
        status: 'Delivered'
      });
      showToast(`📱 SMS sent to ${deliveredCount} worker${deliveredCount > 1 ? 's' : ''} ✓`);
      clearSms();
      renderSmsLog();
    } else {
      const errMsg = data.error || `SMS backend error (${res.status})`;
      showToast(`❌ ${errMsg}`);
    }
  } catch (e) {
    console.error('SMS Error:', e);
    showToast('⚠️ Connection error. Check console for details.');
  } finally {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function clearSmsLog() {
  if (confirm('Clear all sent message history?')) {
    db.smsLog = [];
    renderSmsLog();
    showToast('SMS log cleared ✓');
  }
}

function renderSmsLog() {
  const container = $('sms-log-list');
  if (!container) return;
  if (db.smsLog.length === 0) {
    container.innerHTML = '<div class="empty-state" style="text-align:center; padding:40px; color:var(--gray-500)"><div style="font-size:30px; margin-bottom:10px">📭</div>No sent messages yet.</div>';
    return;
  }
  container.innerHTML = db.smsLog.map(s => `
    <div class="sms-log-item">
      <div class="sms-log-meta">
        <div class="sms-log-to">📱 ${s.to} <span style="font-size:11px;color:var(--gray-500);font-weight:400">(${s.count} recipients)</span></div>
        <div class="sms-log-time">${s.time}</div>
      </div>
      <div class="sms-log-text">${s.msg}</div>
      <div style="margin-top:6px; display:flex; gap:6px">
        <span class="badge badge-green">Sent via ${s.sender || 'AT'}</span>
        <span class="badge badge-blue">Zambia Network</span>
      </div>
    </div>
  `).join('');
}

// ===== EXPORT =====
function exportCSV(type){
  let headers,rows,filename;
  if(type==='harvest'){headers=['Crop','Date','Yield (kg)','Price (ZMW/kg)','Revenue (ZMW)','Field','Buyer'];rows=db.harvests.map(h=>[h.crop,h.date,h.yield,h.price.toFixed(2),Math.round(h.yield*h.price),h.field,h.buyer||'']);filename='harvest_report.csv'}
  else if(type==='inputs'){headers=['Item','Type','Crop','Quantity','Unit','Cost (ZMW)','Date'];rows=db.inputs.map(i=>[i.name,i.type,i.crop,i.qty,i.unit,i.cost,i.date]);filename='input_costs.csv'}
  else if(type==='workers'){headers=['Name','Role','Phone','Daily Rate (ZMW)','Days Worked','Total Owed (ZMW)'];rows=db.workers.map(w=>[w.name,w.role,w.phone,w.rate,w.days,Math.round(w.rate*w.days)]);filename='payroll_summary.csv'}
  else if(type==='tasks'){headers=['Task','Field','Assigned To','Due Date','Priority','Status','Description'];rows=db.tasks.map(t=>[t.name,t.field,t.worker,t.due,t.priority,t.status,t.desc||'']);filename='task_log.csv'}
  else if(type==='profitability'){
    headers=['Crop','Revenue (ZMW)','Input Costs (ZMW)','Labour Costs (ZMW)','Net Profit (ZMW)','Margin %'];
    const totalLab=db.workers.reduce((a,w)=>a+w.rate*w.days,0);const labPC=totalLab/Math.max(db.crops.length,1);
    const cd={};db.crops.forEach(c=>{cd[c.name]={rev:0,inp:0}});
    db.harvests.forEach(h=>{if(cd[h.crop])cd[h.crop].rev+=h.yield*h.price});
    db.inputs.forEach(i=>{if(cd[i.crop])cd[i.crop].inp+=i.cost});
    rows=Object.entries(cd).map(([n,d])=>{const net=d.rev-d.inp-labPC;return[n,Math.round(d.rev),Math.round(d.inp),Math.round(labPC),Math.round(net),d.rev>0?Math.round(net/d.rev*100)+'%':'0%']});
    filename='profitability_report.csv';
  }
  const csv=[headers,...rows].map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv'});const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
  showToast(`📥 ${filename} downloaded ✓`);
}
function printReport(){
  const totalRev=db.harvests.reduce((a,h)=>a+h.yield*h.price,0);
  const totalInp=db.inputs.reduce((a,i)=>a+i.cost,0);
  const totalLab=db.workers.reduce((a,w)=>a+w.rate*w.days,0);
  const win=window.open('','_blank');
  win.document.write(`<html><head><title>Ndou's Farm — Season Report 2026/2027</title><style>body{font-family:Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;color:#222}h1{color:#1e4d35;font-size:24px;border-bottom:3px solid #256642;padding-bottom:10px}h2{color:#256642;font-size:16px;margin-top:24px}table{width:100%;border-collapse:collapse;font-size:13px;margin-top:10px}th{background:#e6f7ec;padding:8px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.04em}td{padding:8px;border-bottom:1px solid #e8ede9}.summary{display:flex;gap:20px;margin:20px 0}.sum-box{background:#f4fbf6;border:1px solid #c0eacd;border-radius:8px;padding:16px;flex:1;text-align:center}.sum-label{font-size:12px;color:#6b7a6f}.sum-val{font-size:22px;font-weight:bold;color:#256642;margin-top:4px}@media print{body{padding:20px}}</style></head><body>
  <h1>Ndou's Farm — Season Report 2026/2027</h1>
  <p style="color:#6b7a6f;font-size:13px">Lusaka, Zambia · Generated ${new Date().toLocaleDateString()}</p>
  <div class="summary"><div class="sum-box"><div class="sum-label">Total Revenue</div><div class="sum-val">ZMW ${fmt(Math.round(totalRev))}</div></div><div class="sum-box"><div class="sum-label">Total Costs</div><div class="sum-val" style="color:#c0392b">ZMW ${fmt(Math.round(totalInp+totalLab))}</div></div><div class="sum-box"><div class="sum-label">Net Profit</div><div class="sum-val">ZMW ${fmt(Math.round(totalRev-totalInp-totalLab))}</div></div></div>
  <h2>Crops</h2><table><tr><th>Crop</th><th>Field</th><th>Stage</th><th>Planted</th><th>Expected Harvest</th></tr>${db.crops.map(c=>`<tr><td>${c.name}</td><td>${c.field}</td><td>${c.stage}</td><td>${c.planted}</td><td>${c.harvest}</td></tr>`).join('')}</table>
  <h2>Harvest Records</h2><table><tr><th>Crop</th><th>Date</th><th>Yield (kg)</th><th>Price (ZMW/kg)</th><th>Revenue (ZMW)</th></tr>${db.harvests.map(h=>`<tr><td>${h.crop}</td><td>${h.date}</td><td>${fmt(h.yield)}</td><td>${h.price.toFixed(2)}</td><td>${fmt(Math.round(h.yield*h.price))}</td></tr>`).join('')}</table>
  <h2>Payroll Summary</h2><table><tr><th>Worker</th><th>Role</th><th>Rate (ZMW/day)</th><th>Days</th><th>Total (ZMW)</th></tr>${db.workers.map(w=>`<tr><td>${w.name}</td><td>${w.role}</td><td>${w.rate}</td><td>${w.days}</td><td>${fmt(Math.round(w.rate*w.days))}</td></tr>`).join('')}</table>
  </body></html>`);
  win.document.close();setTimeout(()=>win.print(),500);
}
function renderExportPreview(){
  const totalRev=db.harvests.reduce((a,h)=>a+h.yield*h.price,0);
  const totalInp=db.inputs.reduce((a,i)=>a+i.cost,0);
  const totalLab=db.workers.reduce((a,w)=>a+w.rate*w.days,0);
  $('export-preview-content').innerHTML=`
  <div class="preview-header"><div><div class="preview-farm">Ndou's Farm — Season 2026/2027</div><div class="preview-sub">Lusaka, Zambia · 3.5 hectares</div></div><div class="preview-date">Generated ${new Date().toLocaleDateString()}</div></div>
  <div class="preview-section"><div class="preview-section-title">Financial Summary</div>
    <div class="preview-kv"><span class="k">Total Revenue</span><span class="v" style="color:var(--blue-600)">ZMW ${fmt(Math.round(totalRev))}</span></div>
    <div class="preview-kv"><span class="k">Total Input Costs</span><span class="v" style="color:var(--red-600)">ZMW ${fmt(Math.round(totalInp))}</span></div>
    <div class="preview-kv"><span class="k">Total Labour Costs</span><span class="v" style="color:var(--red-600)">ZMW ${fmt(Math.round(totalLab))}</span></div>
    <div class="preview-kv"><span class="k">Net Profit</span><span class="v" style="color:var(--green-700)">ZMW ${fmt(Math.round(totalRev-totalInp-totalLab))}</span></div>
  </div>
  <div class="preview-section"><div class="preview-section-title">Crops (${db.crops.length} active)</div>${db.crops.map(c=>`<div class="preview-kv"><span class="k">${cropIcon(c.name)} ${c.name}</span><span class="v">${c.stage}</span></div>`).join('')}</div>
  <div class="preview-section"><div class="preview-section-title">Workers (${db.workers.length})</div>${db.workers.map(w=>`<div class="preview-kv"><span class="k">${w.name}</span><span class="v">ZMW ${fmt(Math.round(w.rate*w.days))}</span></div>`).join('')}</div>`;
}

async function renderAdmin() {
  const farmersTable = $('admin-farmers-table');
  if (!farmersTable) return;

  farmersTable.innerHTML = '<tr><td colspan="7" style="text-align:center">⌛ Loading system data...</td></tr>';

  try {
    // 1. Fetch all profiles (requires admin role and proper RLS)
    const { data: profiles, error: pError } = await db_layer.getAllProfiles();
    if (pError) throw pError;

    // 2. Update global stats (simplified for now, ideally fetched from an Edge Function or RPC)
    $('admin-total-farmers').textContent = profiles.length;
    
    // In a real system, these would be aggregated system-wide
    // For now, we show totals from the current local db if available, 
    // or just placeholder info for the system admin demo
    $('admin-total-crops').textContent = db.crops.length;
    $('admin-total-workers').textContent = db.workers.length;
    const rev = db.harvests.reduce((a,h) => a + (h.yield * h.price), 0);
    $('admin-total-revenue').textContent = `ZMW ${fmt(Math.round(rev))}`;

    // 3. Render farmers table
    farmersTable.innerHTML = profiles.map(p => `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="avatar avatar-blue">${p.farm_name ? p.farm_name[0] : 'F'}</div>
            <div><strong>${p.farm_name || 'Unnamed Farm'}</strong><br><span style="font-size:11px;color:var(--gray-500)">ID: ${p.id.slice(0,8)}...</span></div>
          </div>
        </td>
        <td>${p.farm_name || '—'}</td>
        <td>${p.location || '—'}</td>
        <td>${p.farm_size_ha || 0} ha</td>
        <td><span class="badge ${p.role === 'admin' ? 'badge-red' : 'badge-green'}">${p.role || 'farmer'}</span></td>
        <td>${new Date(p.created_at).toLocaleDateString()}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="changeUserRole('${p.id}', '${p.role === 'admin' ? 'farmer' : 'admin'}')">
            Set as ${p.role === 'admin' ? 'Farmer' : 'Admin'}
          </button>
        </td>
      </tr>
    `).join('');

  } catch (e) {
    console.error('Admin Render Error:', e);
    farmersTable.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--red-600)">❌ Error loading data: ${e.message}</td></tr>`;
  }
}

async function changeUserRole(userId, newRole) {
  if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) return;
  
  try {
    const { error } = await db_layer.updateProfileById(userId, { role: newRole });
    if (error) throw error;
    showToast(`Role updated to ${newRole} ✓`);
    renderAdmin();
  } catch (e) {
    showToast(`Error: ${e.message}`);
  }
}

// ===== SYSTEM SETTINGS =====
function renderSettings() {
  $('set-supa-url').value = SUPABASE_URL;
  $('set-supa-key').value = SUPABASE_ANON_KEY;
  $('set-sms-sender').value = smsConfig.senderId || 'FARM';
  $('set-lang').value = currentLang;
}

function saveSystemSettings() {
  const url = $('set-supa-url').value.trim();
  const key = $('set-supa-key').value.trim();
  const sender = $('set-sms-sender').value.trim();

  if (url) localStorage.setItem('farmtrack-supabase-url', url);
  if (key) localStorage.setItem('farmtrack-supabase-anon-key', key);
  
  smsConfig.senderId = sender || 'FARM';
  localStorage.setItem('farmtrack-sms-config', JSON.stringify(smsConfig));

  showToast('System settings saved. Reloading... ✓');
  setTimeout(() => location.reload(), 1500);
}

// ===== NAV =====
const pageTitles={dashboard:'Dashboard',crops:'Crop Management',fields:'Fields & Plots',harvest:'Harvest Records',inputs:'Input Tracking',workers:'Labour Management',tasks:'Task Assignment',weather:'Weather & Alerts',ai:'AI Crop Advisor',sms:'SMS Notifications',reports:'Reports & Analytics',export:'Export Data',settings:'System Settings',admin:'System Admin',about:'About & Contact',market:'Market Intelligence',traceability:'Supply Chain & Traceability'};
const btnLabels={dashboard:'+ Add Record',crops:'+ Add Crop',fields:'+ Add Field',harvest:'+ Record Harvest',inputs:'+ Log Input',workers:'+ Add Worker',tasks:'+ Assign Task',weather:'Refresh Weather',ai:'Clear Chat',sms:'New SMS',reports:'Export Report',export:'Print Report',settings:'Save Settings',admin:'Refresh System Stats',about:'Contact Admin',market:'Refresh Prices',traceability:'+ New Batch'};
function showPage(name){
  if (typeof canAccessPage === 'function' && !canAccessPage(name)) {
    showToast(`Your role (${typeof rankLabel === 'function' ? rankLabel(getFarmRole()) : 'limited'}) cannot open this section`);
    return;
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.mobile-dock .dock-btn').forEach(b=>b.classList.remove('active'));
  $(`page-${name}`).classList.add('active');
  const nav=Array.from(document.querySelectorAll('.nav-item')).find((n)=>{
    const handler = n.getAttribute('onclick') || '';
    return handler.includes(`showPage('${name}')`) || handler.includes(`window.showPage('${name}')`);
  });
  if(nav)nav.classList.add('active');
  const dockBtn=Array.from(document.querySelectorAll('.mobile-dock .dock-btn')).find((b)=>{
    const handler = b.getAttribute('onclick') || '';
    return handler.includes(`showPage('${name}')`) || handler.includes(`window.showPage('${name}')`);
  });
  if(dockBtn)dockBtn.classList.add('active');
  $('page-title').textContent=pageTitles[name]||'FarmTrack';
  $('topbar-btn').textContent=btnLabels[name]||'+ Add Record';
  if(name==='dashboard')renderDashboard();
  if(name==='crops')renderCrops();
  if(name==='fields'){renderFields();renderGPSLandscape();}
  if(name==='workers')renderWorkers();
  if(name==='tasks')renderTasks();
  if(name==='harvest')renderHarvest();
  if(name==='inputs')renderInputs();
  if(name==='market')renderMarket();
  if(name==='traceability')renderTraceability();
  if(name==='ai'){
    $('chat-messages').innerHTML?null:renderAIPage();
    if(typeof initAIDiagnosticsUI === 'function') initAIDiagnosticsUI();
  }
  if(name==='sms')renderSMS();
  if(name==='export')renderExportPreview();
  if(name==='weather')renderWeather();
  if(name==='settings')renderSettings();
  if(name==='admin')renderAdmin();
}

function setView(view) {
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('[id^="btn-"][id$="-view"]').forEach(b => b.classList.remove('active'));
  $(`view-${view}`).classList.add('active');
  $(`btn-${view}-view`).classList.add('active');
  if (view === 'gps') renderGPSLandscape();
}

const ZAMBIA_BOUNDS = { latMin: -18.079, latMax: -8.225, lngMin: 21.999, lngMax: 33.706 };
const gpsMapperState = { isMapping: false, points: [], areaHa: 0, centroid: null, map: null, mapperLayer: null, fieldsLayer: null };

function measureMappedAreaHa(points) {
  if (points.length < 3) return 0;
  const lat0 = points.reduce((s, p) => s + p.lat, 0) / points.length;
  const mPerDegLat = 111320;
  const mPerDegLng = 111320 * Math.cos(lat0 * Math.PI / 180);
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i];
    const b = points[(i + 1) % points.length];
    const ax = a.lng * mPerDegLng, ay = a.lat * mPerDegLat;
    const bx = b.lng * mPerDegLng, by = b.lat * mPerDegLat;
    area += (ax * by) - (bx * ay);
  }
  const m2 = Math.abs(area) / 2;
  return m2 / 10000;
}

function suggestFieldName() {
  const crop = db.crops[0]?.name || 'Crop';
  const seq = db.fields.length + 1;
  return `${crop} Field ${String(seq).padStart(2, '0')}`;
}

function updateGpsMeta() {
  const meta = $('gps-meta');
  if (!meta) return;
  if (!gpsMapperState.points.length) {
    meta.textContent = gpsMapperState.isMapping
      ? 'Mapping active in Zambia bounds. Click map edges of the field (min 3 points).'
      : 'Mapper idle. Click "Start Mapping" and place points around field edges.';
    return;
  }
  const p = gpsMapperState.points.length;
  const area = gpsMapperState.areaHa ? `${gpsMapperState.areaHa.toFixed(2)} ha` : 'Need 3+ points';
  meta.textContent = `Points: ${p} • Estimated area: ${area} • Country filter: Zambia only`;
}

function isPointInZambia(lat, lng) {
  return lat >= ZAMBIA_BOUNDS.latMin && lat <= ZAMBIA_BOUNDS.latMax && lng >= ZAMBIA_BOUNDS.lngMin && lng <= ZAMBIA_BOUNDS.lngMax;
}

function zambiaLatLngBounds() {
  return [[ZAMBIA_BOUNDS.latMin, ZAMBIA_BOUNDS.lngMin], [ZAMBIA_BOUNDS.latMax, ZAMBIA_BOUNDS.lngMax]];
}

function refreshMapperGuide() {
  const guide = $('gps-suitability');
  if (!guide) return;
  const areaTxt = gpsMapperState.areaHa ? `${gpsMapperState.areaHa.toFixed(2)} ha` : 'N/A';
  guide.innerHTML = `
    <div class="csp-title">🌱 Zambia Crop Suitability + Mapper Output</div>
    <div class="csp-grid">
      <div class="csp-item"><strong>Mapped Area:</strong> ${areaTxt}</div>
      <div class="csp-item"><strong>Name Suggestion:</strong> ${suggestFieldName()}</div>
      <div class="csp-item"><strong>Rule:</strong> Mapping restricted to Zambia bounds only.</div>
    </div>
  `;
}

function redrawMapperLayer() {
  if (!gpsMapperState.mapperLayer || !window.L) return;
  gpsMapperState.mapperLayer.clearLayers();
  if (!gpsMapperState.points.length) return;
  const pts = gpsMapperState.points.map(p => [p.lat, p.lng]);
  if (pts.length >= 3) {
    L.polygon(pts, { color: '#c0eacd', weight: 2, fillColor: '#56b87f', fillOpacity: 0.3 }).addTo(gpsMapperState.mapperLayer);
  } else {
    L.polyline(pts, { color: '#c0eacd', weight: 2 }).addTo(gpsMapperState.mapperLayer);
  }
  pts.forEach((pt, idx) => {
    L.circleMarker(pt, {
      radius: 5,
      color: '#2d7d52',
      fillColor: '#ffffff',
      fillOpacity: 1,
      weight: 2
    }).bindTooltip(String(idx + 1), { permanent: true, direction: 'top', offset: [0, -10] }).addTo(gpsMapperState.mapperLayer);
  });
}

function redrawSavedFieldMarkers() {
  if (!gpsMapperState.fieldsLayer || !window.L) return;
  gpsMapperState.fieldsLayer.clearLayers();
  db.fields.forEach(f => {
    const lat = f.lat || -15.385;
    const lng = f.lng || 28.324;
    if (!isPointInZambia(lat, lng)) return;
    const crop = db.crops.find(c => c.field === f.name);
    L.marker([lat, lng]).bindPopup(
      `<strong>${f.name}</strong><br>${crop ? cropIcon(crop.name) + ' ' + crop.name : 'No crop mapped'}<br>${f.size} ha • ${f.soil}<br>${f.location || 'Zambia'}`
    ).addTo(gpsMapperState.fieldsLayer);
  });
}

function initLeafletMapper() {
  const container = $('gps-landscape');
  if (!container) return false;
  if (!window.L) {
    container.innerHTML = `<div class="gps-placeholder">Satellite map could not load. Check internet, then refresh.</div>`;
    return false;
  }
  if (gpsMapperState.map) {
    setTimeout(() => gpsMapperState.map.invalidateSize(), 60);
    return true;
  }
  container.innerHTML = `
    <div class="gps-hud">🇿🇲 Zambia Satellite Field Mapper</div>
    <div id="gps-leaflet-map"></div>
  `;

  const map = L.map('gps-leaflet-map', {
    zoomControl: true,
    minZoom: 6,
    maxZoom: 19,
    maxBounds: zambiaLatLngBounds(),
    maxBoundsViscosity: 1.0
  });
  const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri'
  }).addTo(map);
  const labelsLayer = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri, TomTom, Garmin, FAO, NOAA, USGS',
    opacity: 0.95
  }).addTo(map);
  const roadsLayer = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri',
    opacity: 0.55
  }).addTo(map);
  map.fitBounds(zambiaLatLngBounds());

  gpsMapperState.map = map;
  gpsMapperState.mapperLayer = L.layerGroup().addTo(map);
  gpsMapperState.fieldsLayer = L.layerGroup().addTo(map);

  map.on('click', (e) => {
    if (!gpsMapperState.isMapping) return;
    const { lat, lng } = e.latlng;
    if (!isPointInZambia(lat, lng)) {
      showToast('Point must stay inside Zambia.');
      return;
    }
    gpsMapperState.points.push({ lat, lng });
    gpsMapperState.areaHa = measureMappedAreaHa(gpsMapperState.points);
    gpsMapperState.centroid = {
      lat: gpsMapperState.points.reduce((s, p) => s + p.lat, 0) / gpsMapperState.points.length,
      lng: gpsMapperState.points.reduce((s, p) => s + p.lng, 0) / gpsMapperState.points.length
    };
    redrawMapperLayer();
    updateGpsMeta();
    refreshMapperGuide();
  });

  return true;
}

function renderGPSLandscape() {
  if (!initLeafletMapper()) return;
  redrawSavedFieldMarkers();
  redrawMapperLayer();
  refreshMapperGuide();
  updateGpsMeta();
}

function startFieldMapping() {
  gpsMapperState.isMapping = true;
  updateGpsMeta();
  showToast('Zambia mapper enabled. Click map to trace field boundary.');
}

function undoFieldPoint() {
  if (!gpsMapperState.points.length) return;
  gpsMapperState.points.pop();
  gpsMapperState.areaHa = measureMappedAreaHa(gpsMapperState.points);
  if (gpsMapperState.points.length) {
    gpsMapperState.centroid = {
      lat: gpsMapperState.points.reduce((s, p) => s + p.lat, 0) / gpsMapperState.points.length,
      lng: gpsMapperState.points.reduce((s, p) => s + p.lng, 0) / gpsMapperState.points.length
    };
  } else {
    gpsMapperState.centroid = null;
  }
  redrawMapperLayer();
  updateGpsMeta();
  refreshMapperGuide();
}

function clearFieldMapping() {
  gpsMapperState.isMapping = false;
  gpsMapperState.points = [];
  gpsMapperState.areaHa = 0;
  gpsMapperState.centroid = null;
  redrawMapperLayer();
  updateGpsMeta();
  refreshMapperGuide();
}

function applyMappedField() {
  if (gpsMapperState.points.length < 3 || !gpsMapperState.centroid) {
    showToast('Add at least 3 boundary points before applying field mapping.');
    return;
  }
  const area = gpsMapperState.areaHa || 0;
  const c = gpsMapperState.centroid;
  $('f-size').value = area.toFixed(2);
  $('f-lat').value = c.lat.toFixed(6);
  $('f-lng').value = c.lng.toFixed(6);
  if (!$('f-name').value.trim()) $('f-name').value = suggestFieldName();
  if (!$('f-loc').value.trim()) $('f-loc').value = 'Mapped in Zambia';
  const existingNotes = $('f-notes').value.trim();
  const mapperNote = `GPS mapped (Zambia) with ${gpsMapperState.points.length} points`;
  $('f-notes').value = existingNotes ? `${existingNotes}; ${mapperNote}` : mapperNote;
  openModal('modal-field');
  showToast(`Mapped area applied: ${area.toFixed(2)} ha`);
}

function handleTopbarBtn(){
  const a = document.querySelector('.page.active').id.replace('page-', '');
  const m = {
    crops: 'modal-crop',
    fields: 'modal-field',
    harvest: 'modal-harvest',
    inputs: 'modal-input',
    workers: 'modal-worker',
    tasks: 'modal-task',
    inventory: 'modal-inventory-add',
    payroll: 'modal-advance'
  };
  if (m[a]) openModal(m[a]);
  else if (a === 'export') printReport();
  else if (a === 'ai') { db.chatHistory = []; $('chat-messages').innerHTML = ''; renderAIPage(); }
  else if (a === 'sms') clearSms();
  else if (a === 'about') window.location.href = 'mailto:richardndou1578@gmail.com';
  else if (a === 'workers') openModal('modal-attendance');
}
function renderAll(){
  renderDashboard();
  renderCrops();
  renderFields();
  renderHarvest();
  renderInputs();
  renderWorkers();
  renderTasks();
  renderReports();
  renderInventory();
  renderPayroll();
  checkHarvestAlerts();
}
renderAll();

// ===== PARTICLE SYSTEM =====
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random()*100}%;
      width: ${2 + Math.random()*4}px;
      height: ${2 + Math.random()*4}px;
      animation-duration: ${4 + Math.random()*8}s;
      animation-delay: ${Math.random()*6}s;
      opacity: ${0.3 + Math.random()*0.5};
    `;
    container.appendChild(p);
  }
}
initParticles();

// ===== ANIMATED STAT COUNTERS =====
function animateCounter(el, target, duration = 1200, prefix = '', suffix = '') {
  const start = 0;
  const startTime = performance.now();
  const isFloat = String(target).includes('.');
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * eased;
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function runCounterAnimations() {
  const counters = [
    { id: 's-crops', val: 4 },
    { id: 's-workers', val: 7 },
    { id: 's-tasks', val: 5 },
    { id: 's-revenue', val: 12400 }
  ];
  counters.forEach(c => {
    const el = document.getElementById(c.id);
    if (el) animateCounter(el, c.val, 1200);
  });
}
setTimeout(runCounterAnimations, 400);

// ===== SMOOTH BAR CHART ANIMATION =====
function animateBars() {
  document.querySelectorAll('.bar-fill, .progress-fill').forEach(bar => {
    const target = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = target; }, 100);
  });
}
setTimeout(animateBars, 300);

// ===== PAGE TRANSITION WITH COUNTER RE-ANIMATION =====
const _origShowPage = showPage;
window._pageShowCallbacks = {};

// Patch showPage for extra animations
const _patchedShowPage = function(name) {
  _origShowPage(name);
  setTimeout(() => {
    animateBars();
    if (name === 'dashboard') {
      initParticles();
      setTimeout(runCounterAnimations, 200);
    }
  }, 100);
};
// Override showPage globally
window.showPage = _patchedShowPage;

// Fix nav items to use patched showPage
document.querySelectorAll('.nav-item[onclick]').forEach(el => {
  const match = el.getAttribute('onclick').match(/showPage\('(\w+)'\)/);
  if (match) {
    el.setAttribute('onclick', `window.showPage('${match[1]}')`);
  }
});

// ===== TOPBAR SCROLL SHADOW =====
const scrollHost = document.querySelector('.main') || window;
scrollHost.addEventListener('scroll', function() {
  const tb = document.querySelector('.topbar');
  const y = scrollHost === window ? (window.scrollY || document.documentElement.scrollTop || 0) : this.scrollTop;
  if (y > 10) {
    tb.style.boxShadow = '0 4px 24px rgba(26,58,42,0.12)';
  } else {
    tb.style.boxShadow = '0 2px 20px rgba(26,58,42,0.06)';
  }
});

// ===== MOBILE SIDEBAR TOGGLE =====
const toggleBtn = document.createElement('button');
toggleBtn.className = 'mobile-toggle';
toggleBtn.innerHTML = '☰';
toggleBtn.addEventListener('click', () => {
  const sb = document.querySelector('.sidebar');
  sb.style.transform = sb.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)';
});
document.body.appendChild(toggleBtn);

// ===== INTERSECTION OBSERVER FOR CARDS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll('.stat-card, .card, .plot-card, .export-card, .farm-photo-card').forEach(card => {
    if (!card.dataset.observed) {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.35s ease';
      card.dataset.observed = '1';
      observer.observe(card);
    }
  });
}
setTimeout(observeCards, 200);

// ===== DYNAMIC GREETING =====
function setGreeting() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `${greet}, welcome to<br><span>Ndou's Farm</span>`;
  }
}
setGreeting();

// ===== REAL-TIME CLOCK IN TOPBAR =====
function addClock() {
  const right = document.querySelector('.topbar-right');
  const clock = document.createElement('span');
  clock.id = 'live-clock';
  clock.style.cssText = 'font-size:12px;color:var(--gray-500);font-variant-numeric:tabular-nums;min-width:80px;text-align:right;';
  right.prepend(clock);
  function tick() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('en-ZM', {hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
  tick();
  setInterval(tick, 1000);
}
addClock();

// ===== IMAGE LAZY LOAD FADE-IN =====
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.5s ease';
  img.addEventListener('load', () => { img.style.opacity = '1'; });
  if (img.complete) img.style.opacity = '1';
});

// ===== SPLASH SCREEN (SAFETY FIRST) =====
function hideSplash() {
  const splash = document.getElementById('splash');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => { if(splash.parentNode) splash.remove(); }, 900);
  }
}
// Initial trigger handled in initPlatformUpgrades

// ===== DARK MODE =====
function toggleDark() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('dark-btn');
  if (btn) btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  localStorage.setItem('farmtrack-dark', document.body.classList.contains('dark-mode') ? '1' : '0');
}
if (localStorage.getItem('farmtrack-dark') === '1') {
  document.body.classList.add('dark-mode');
  const btn = document.getElementById('dark-btn');
  if (btn) btn.textContent = '☀️';
}

function checkHarvestAlerts() {
  const now = new Date();
  db.crops.forEach(crop => {
    const harvestDate = new Date(crop.harvest);
    // If harvest date is in the past and stage is not 'Harvesting' or 'Completed'
    if (harvestDate < now && !['Harvesting', 'Completed'].includes(crop.stage)) {
      const msg = `⚠️ LATE HARVEST: ${crop.name} in ${crop.field} was due for harvest on ${crop.harvest}. Please update status!`;
      // Check if alert already exists
      if (!notifications.some(n => n.text === msg)) {
        notifications.unshift({
          id: Date.now() + Math.random(),
          type: 'error',
          icon: '🚨',
          bg: '#fee2e2',
          text: msg,
          time: 'Just now',
          read: false
        });
        showToast(`Late harvest alert for ${crop.name}!`);
      }
    }
  });
  renderNotifs();
}

function renderNotifs() {
  const list = document.getElementById('notif-list');
  if (!list) return;
  
  const unreadCount = notifications.filter(n => !n.read).length;
  const countBadge = document.getElementById('notif-count');
  if (countBadge) {
    countBadge.textContent = unreadCount;
    countBadge.style.display = unreadCount > 0 ? 'flex' : 'none';
  }

  if (notifications.length === 0) {
    list.innerHTML = '<div style="padding:20px; text-align:center; color:var(--gray-500)">No notifications</div>';
    return;
  }

  list.innerHTML = notifications.map(n => `
    <div class="notif-item ${n.read ? 'read' : ''}" onclick="markNotifRead(${n.id})">
      <div class="notif-icon-wrap" style="background:${n.bg || '#f0f3f1'}">${n.icon || '🔔'}</div>
      <div class="notif-content">
        <div class="notif-text" style="${n.type === 'error' ? 'color:var(--red-600); font-weight:600' : ''}">${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    </div>`).join('');
}

function markNotifRead(id) {
  const n = notifications.find(x => x.id === id);
  if (n) n.read = true;
  renderNotifs();
}

function toggleNotifPanel() {
  const panel = document.getElementById('notif-panel');
  if (panel) panel.classList.toggle('open');
}

function clearNotifs() {
  notifications.forEach(n => n.read = true);
  renderNotifs();
  const panel = document.getElementById('notif-panel');
  if (panel) panel.classList.remove('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.notif-wrapper')) {
    const panel = document.getElementById('notif-panel');
    if (panel) panel.classList.remove('open');
  }
});

// ===== SEASON PROGRESS MILESTONES =====
function renderSeasonProgress() {
  const milestones = [
    { icon:'🌱', label:'Land Prep', date:'Oct 2025', done:true },
    { icon:'🌾', label:'Planting', date:'Nov 2025', done:true },
    { icon:'💧', label:'Fertilizing', date:'Dec 2025', done:true },
    { icon:'🌿', label:'Growing', date:'Jan 2026', current:true },
    { icon:'🌽', label:'Harvesting', date:'Mar 2026', done:false },
    { icon:'💰', label:'Market', date:'Apr 2026', done:false },
  ];
  const container = document.getElementById('season-milestones');
  if (!container) return;
  const existingTrack = container.querySelector('.season-track');
  container.innerHTML = '';
  const track = document.createElement('div');
  track.className = 'season-track';
  track.id = 'season-track';
  track.style.width = '0%';
  container.appendChild(track);
  milestones.forEach(m => {
    const el = document.createElement('div');
    el.className = 'milestone';
    el.innerHTML = `
      <div class="milestone-dot ${m.done ? 'done' : m.current ? 'current' : ''}">${m.done ? '✓' : m.icon}</div>
      <div class="milestone-label">${m.label}</div>
      <div class="milestone-date">${m.date}</div>
    `;
    container.appendChild(el);
  });
  setTimeout(() => {
    const t = document.getElementById('season-track');
    if (t) t.style.width = '58%';
  }, 600);
}
renderSeasonProgress();

// ===== CROP HEALTH RINGS =====
function renderHealthRings() {
  const crops = [
    { name:'Maize', icon:'🌽', health:82, stage:'Growing', color:'#3a9e68' },
    { name:'Soya Bean', icon:'🫘', health:74, stage:'Fertilizing', color:'#c97c1a' },
    { name:'Groundnuts', icon:'🥜', health:91, stage:'Planting', color:'#1e6fac' },
    { name:'Sweet Potato', icon:'🍠', health:68, stage:'Harvesting', color:'#7a5c42' },
  ];
  const wrap = document.getElementById('health-ring-wrap');
  if (!wrap) return;
  wrap.innerHTML = crops.map(c => {
    const r = 38, circ = 2 * Math.PI * r;
    const dash = (c.health / 100) * circ;
    return `
    <div class="health-ring-card" onclick="window.showPage('crops')">
      <svg width="96" height="96" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="${r}" fill="none" stroke="#f0f3f1" stroke-width="8"/>
        <circle cx="48" cy="48" r="${r}" fill="none" stroke="${c.color}" stroke-width="8"
          stroke-linecap="round" stroke-dasharray="${circ}"
          stroke-dashoffset="${circ}" transform="rotate(-90 48 48)"
          class="ring-arc" data-dash="${circ - dash}" style="transition:stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)"/>
        <text x="48" y="44" text-anchor="middle" font-family="Playfair Display,serif" font-size="18" font-weight="700" fill="${c.color}">${c.health}%</text>
        <text x="48" y="60" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="9" fill="#6b7a6f">Health</text>
        <text x="48" y="72" text-anchor="middle" font-size="18">${c.icon}</text>
      </svg>
      <div class="ring-label">${c.name}</div>
      <div class="ring-sub">${c.stage}</div>
    </div>`;
  }).join('');
  setTimeout(() => {
    document.querySelectorAll('.ring-arc').forEach(arc => {
      const offset = parseFloat(arc.dataset.dash);
      arc.style.strokeDashoffset = offset;
    });
  }, 800);
}
renderHealthRings();

// ===== FIELD MAP SVG (added to fields page) =====
function injectFieldMap() {
  const fieldsPage = document.getElementById('page-fields');
  if (!fieldsPage || document.getElementById('field-map-wrap')) return;
  const wrap = document.createElement('div');
  wrap.className = 'field-map-wrap';
  wrap.id = 'field-map-wrap';
  wrap.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
      <div class="card-title">🗺️ Farm Field Layout</div>
      <span class="badge badge-green">3.5 ha total</span>
    </div>
    <svg viewBox="0 0 600 260" class="field-map-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grass" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill="#e6f7ec"/>
          <line x1="0" y1="4" x2="8" y2="4" stroke="#c0eacd" stroke-width="0.5"/>
        </pattern>
        <filter id="fieldShadow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1a3a2a" flood-opacity="0.15"/></filter>
      </defs>
      <!-- Background -->
      <rect width="600" height="260" fill="#f4fbf6" rx="8"/>
      <!-- North Field A -->
      <g filter="url(#fieldShadow)" style="cursor:pointer" onclick="window.showPage('fields')">
        <rect x="40" y="30" width="200" height="120" rx="8" fill="url(#grass)" stroke="#3a9e68" stroke-width="2"/>
        <rect x="40" y="30" width="200" height="30" rx="8" fill="rgba(58,158,104,0.15)"/>
        <text x="140" y="52" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" font-weight="700" fill="#256642">North Field A</text>
        <text x="140" y="90" text-anchor="middle" font-size="28">🌽</text>
        <text x="140" y="118" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="10" fill="#3d4a42">1.2 ha · Sandy Loam</text>
        ${[70,80,90,100,110,120,130].map(y=>`<line x1="50" y1="${y}" x2="230" y2="${y}" stroke="rgba(58,158,104,0.2)" stroke-width="1" stroke-dasharray="4,4"/>`).join('')}
      </g>
      <!-- South Plot B -->
      <g filter="url(#fieldShadow)" style="cursor:pointer" onclick="window.showPage('fields')">
        <rect x="270" y="30" width="150" height="120" rx="8" fill="#fff9f0" stroke="#c97c1a" stroke-width="2"/>
        <rect x="270" y="30" width="150" height="30" rx="8" fill="rgba(201,124,26,0.1)"/>
        <text x="345" y="52" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" font-weight="700" fill="#c97c1a">South Plot B</text>
        <text x="345" y="90" text-anchor="middle" font-size="28">🫘</text>
        <text x="345" y="118" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="10" fill="#3d4a42">0.8 ha · Clay Loam</text>
      </g>
      <!-- East Garden -->
      <g filter="url(#fieldShadow)" style="cursor:pointer" onclick="window.showPage('fields')">
        <rect x="450" y="30" width="120" height="120" rx="8" fill="#f0f8ff" stroke="#1e6fac" stroke-width="2"/>
        <rect x="450" y="30" width="120" height="30" rx="8" fill="rgba(30,111,172,0.1)"/>
        <text x="510" y="52" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" font-weight="700" fill="#1e6fac">East Garden</text>
        <text x="510" y="90" text-anchor="middle" font-size="28">🥜</text>
        <text x="510" y="118" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="10" fill="#3d4a42">0.5 ha · Loamy Sand</text>
      </g>
      <!-- Legend -->
      <g transform="translate(40, 175)">
        <text font-family="DM Sans,sans-serif" font-size="11" font-weight="600" fill="#6b7a6f">LEGEND</text>
        <rect x="0" y="12" width="12" height="12" rx="2" fill="#3a9e68"/>
        <text x="16" y="22" font-family="DM Sans,sans-serif" font-size="10" fill="#3d4a42">Active Crop</text>
        <rect x="90" y="12" width="12" height="12" rx="2" fill="#c97c1a"/>
        <text x="106" y="22" font-family="DM Sans,sans-serif" font-size="10" fill="#3d4a42">Fertilizing</text>
        <rect x="180" y="12" width="12" height="12" rx="2" fill="#1e6fac"/>
        <text x="196" y="22" font-family="DM Sans,sans-serif" font-size="10" fill="#3d4a42">Planting</text>
      </g>
      <!-- Compass -->
      <g transform="translate(555, 220)">
        <circle cx="0" cy="0" r="18" fill="rgba(26,58,42,0.06)" stroke="rgba(26,58,42,0.1)" stroke-width="1"/>
        <text x="0" y="-6" text-anchor="middle" font-size="8" font-weight="700" fill="#256642">N</text>
        <polygon points="0,-14 3,-2 0,-6 -3,-2" fill="#256642"/>
        <polygon points="0,14 3,2 0,6 -3,2" fill="#b8c4bb"/>
      </g>
    </svg>`;
  const addBtn = fieldsPage.querySelector('[onclick*="modal-field"]');
  if (addBtn) addBtn.closest('div')?.before(wrap);
  else fieldsPage.appendChild(wrap);
}
setTimeout(injectFieldMap, 300);

// ===== RAIN ANIMATION ON WEATHER CARD =====
function addRainAnimation() {
  const wm = document.getElementById('weather-main-card');
  if (!wm || wm.querySelector('.rain-drop')) return;
  wm.style.position = 'relative';
  for (let i = 0; i < 12; i++) {
    const d = document.createElement('div');
    d.className = 'rain-drop';
    d.style.cssText = `left:${Math.random()*100}%;height:${8+Math.random()*14}px;animation-duration:${0.8+Math.random()*0.6}s;animation-delay:${Math.random()*1.5}s;opacity:${0.3+Math.random()*0.4};`;
    wm.appendChild(d);
  }
}

// ===== SEARCH FUNCTIONALITY =====
function renderMarket() {
  const table = $('market-prices-table');
  if (!table) return;
  // This would ideally fetch from a real API like CHID or local Zambian ag-market feeds
  // For now, we use static data with dynamic trends
  const prices = [
    { item: 'Maize (50kg)', lsk: 350, cb: 365, sth: 340, trend: '+2%' },
    { item: 'Soya Beans (50kg)', lsk: 620, cb: 635, sth: 610, trend: '-1%' },
    { item: 'Groundnuts (50kg)', lsk: 450, cb: 470, sth: 440, trend: '0%' },
    { item: 'Wheat (Ton)', lsk: 8200, cb: 8400, sth: 8100, trend: '+5%' }
  ];
  
  table.innerHTML = prices.map(p => `
    <tr>
      <td>${p.item}</td>
      <td>K${p.lsk}</td>
      <td>K${p.cb}</td>
      <td>K${p.sth}</td>
      <td style="color:${p.trend.startsWith('+') ? 'var(--green-600)' : p.trend.startsWith('-') ? 'var(--red-600)' : 'var(--gray-500)'}">${p.trend.startsWith('+') ? '▲' : p.trend.startsWith('-') ? '▼' : '—'} ${p.trend.replace(/[+-]/, '')}</td>
    </tr>
  `).join('');

  renderProfitAnalysis();
}

function renderProfitAnalysis() {
  const chart = $('profit-margin-chart');
  const list = $('profit-summary-list');
  if (!chart || !list) return;

  // Calculate profitability per field
  const fieldMargins = db.fields.map(f => {
    const harvestValue = db.harvests.filter(h => h.field === f.name).reduce((sum, h) => sum + (h.yield * h.price), 0);
    const inputCosts = db.inputs.filter(i => i.field === f.name || i.crop === f.crop).reduce((sum, i) => sum + i.cost, 0);
    const profit = harvestValue - inputCosts;
    const margin = harvestValue > 0 ? (profit / harvestValue) * 100 : 0;
    return { name: f.name, profit, margin, harvest: harvestValue, costs: inputCosts };
  });

  if (fieldMargins.every(f => f.harvest === 0)) {
    chart.innerHTML = '<div style="text-align:center; color:var(--gray-500)">Log harvest and inputs to see analysis.</div>';
    return;
  }

  chart.innerHTML = fieldMargins.map(f => `
    <div style="text-align:center; margin:0 10px">
      <div style="position:relative; width:120px; height:120px">
        <svg viewBox="0 0 36 36" style="width:100%; height:100%; transform: rotate(-90deg)">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" stroke-width="3"/>
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="${f.margin > 20 ? 'var(--green-500)' : 'var(--amber-500)'}" stroke-width="3" stroke-dasharray="${f.margin}, 100"/>
        </svg>
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); font-weight:700; font-size:18px">${Math.round(f.margin)}%</div>
      </div>
      <div style="font-size:12px; margin-top:10px; font-weight:600">${f.name}</div>
    </div>
  `).join('');

  list.innerHTML = fieldMargins.map(f => `
    <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--gray-100)">
      <span style="font-size:13px">${f.name}</span>
      <span style="font-weight:600; color:${f.profit >= 0 ? 'var(--green-700)' : 'var(--red-600)'}">${formatCurr(f.profit)}</span>
    </div>
  `).join('');
}

function renderTraceability() {
  const table = $('trace-table');
  if (!table) return;
  const batches = db.batches || [];
  if (batches.length === 0) {
    table.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--gray-500)">No export batches created.</td></tr>';
    return;
  }
  table.innerHTML = batches.map(b => `
    <tr>
      <td><code>${b.id}</code></td>
      <td>${b.commodity}</td>
      <td>${b.field}</td>
      <td>${b.weight} kg</td>
      <td><button class="btn btn-ghost btn-sm" onclick="showQRCode('${b.id}')">👁️ View QR</button></td>
      <td><span class="badge ${b.status === 'Ready' ? 'badge-green' : 'badge-amber'}">${b.status}</span></td>
    </tr>
  `).join('');
}

function showQRCode(batchId) {
  // In a real app, this would use a library like qrcode.js
  // For now, we simulate a traceability URL
  const url = `https://farmtrack.vercel.app/trace/${batchId}`;
  alert(`TRACABILITY QR CODE\n\nBatch: ${batchId}\nOrigin: Ndou's Farm, Lusaka\nVerify at: ${url}\n\nThis QR code can be printed on labels for buyers.`);
}

function renderInventory() {
  const table = $('inventory-table');
  if (!table) return;
  
  const totalValue = db.inventory.reduce((a, i) => a + (i.qty * i.cost_per_unit), 0);
  const lowStock = db.inventory.filter(i => i.qty <= (i.min_stock || 5));
  
  if ($('inv-total-value')) $('inv-total-value').textContent = formatCurr(Math.round(totalValue));
  if ($('inv-low-count')) $('inv-low-count').textContent = lowStock.length;
  
  if (db.inventory.length === 0) {
    table.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--gray-500)">No items in stock. Click "+ Add Bulk Stock" to begin.</td></tr>';
    return;
  }
  
  table.innerHTML = db.inventory.map(i => {
    const isLow = i.qty <= (i.min_stock || 5);
    return `
      <tr>
        <td><strong>${i.item}</strong></td>
        <td><span class="badge badge-gray">${i.category}</span></td>
        <td>${i.qty}</td>
        <td>${i.unit}</td>
        <td>${formatCurr(i.cost_per_unit)}</td>
        <td><span class="badge ${isLow ? 'badge-red' : 'badge-green'}">${isLow ? 'Low Stock' : 'In Stock'}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="deleteRecord('inventory', ${i.id})">🗑️</button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterInventory(val) {
  const query = val.toLowerCase();
  const rows = document.querySelectorAll('#inventory-table tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

function renderPayroll() {
  // Already handled by renderWorkers for now, but we can add more specific payroll logic here if needed
  // such as advances and net pay
  const advancesTable = $('advances-table');
  if (advancesTable) {
    advancesTable.innerHTML = db.advances.map(a => `
      <tr>
        <td>${a.worker}</td>
        <td>${a.date}</td>
        <td>${formatCurr(a.amount)}</td>
        <td>${a.reason}</td>
        <td><span class="badge ${statusColor(a.status)}">${a.status}</span></td>
      </tr>
    `).join('');
  }
}

function clearSms() {
  smsRecipients = [];
  $('sms-body').value = '';
  if ($('worker-select-dd')) $('worker-select-dd').value = '';
  renderRecipientChips();
  updateSmsStats();
  showToast('SMS cleared ✓');
}

function initAIDiagnosticsUI() {
  // Placeholder for AI diagnostics initialization
  console.log("AI Diagnostics UI initialized");
}

async function handleSearch(val) {
  if (!val.trim()) return;
  const query = val.toLowerCase();
  
  // Navigate to relevant pages based on keywords
  const pageMap = {
    'crop': 'crops', 'maize': 'crops', 'soya': 'crops', 'groundnut': 'crops',
    'field': 'fields', 'plot': 'fields',
    'worker': 'workers', 'labour': 'workers', 'attendance': 'workers',
    'task': 'tasks', 'todo': 'tasks',
    'harvest': 'harvest', 'yield': 'harvest',
    'input': 'inputs', 'fertilizer': 'inputs', 'chemical': 'inputs',
    'inventory': 'inventory', 'stock': 'inventory',
    'report': 'reports', 'profit': 'reports', 'finance': 'reports',
    'weather': 'weather', 'rain': 'weather',
    'ai': 'ai', 'advisor': 'ai', 'chat': 'ai',
    'sms': 'sms', 'message': 'sms',
    'profile': 'profile', 'settings': 'settings'
  };

  for (const [k, p] of Object.entries(pageMap)) {
    if (query.includes(k)) {
      window.showPage(p);
      showToast(`Searching for "${val}" in ${p}...`);
      return;
    }
  }
}

// ===== DOCK ACTIVE STATE =====
const dockMap = { dashboard:0,crops:1,workers:2,tasks:3,weather:4,ai:5,reports:6 };
function updateDock(page) {
  document.querySelectorAll('.dock-btn').forEach((b,i) => {
    b.classList.toggle('dock-active', i === dockMap[page]);
  });
}

// Patch showPage further for dock + rain
const _prevShowPage = window.showPage;
window.showPage = function(name) {
  _prevShowPage(name);
  updateDock(name);
  if (name === 'weather') setTimeout(addRainAnimation, 300);
};
// Fix nav items
document.querySelectorAll('.nav-item[onclick]').forEach(el => {
  const match = el.getAttribute('onclick').match(/showPage\('(\w+)'\)/);
  if (match) el.setAttribute('onclick', `window.showPage('${match[1]}')`);
});

// ===== PARALLAX HERO =====
const mainEl = document.querySelector('.main');
if (mainEl) {
  (document.querySelector('.main') || window).addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-bg-img');
    const y = window.scrollY || document.documentElement.scrollTop || mainEl.scrollTop || 0;
    if (hero) hero.style.transform = `translateY(${y * 0.25}px) scale(1.05)`;
  });
}

// ===== ANIMATED BAR CHART NUMBERS =====
function animateBarNumbers() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const text = bar.textContent;
    bar.textContent = text;
  });
}

// ===== HOVER TOOLTIPS ON STAT CARDS =====
document.querySelectorAll('.stat-card').forEach(card => {
  card.title = card.querySelector('.stat-label')?.textContent + ': ' + card.querySelector('.stat-value')?.textContent;
});

// ===== DATA & CONFIG =====
const T = {
  en: {
    addCrop:'Add Crop', addField:'Add Field', addWorker:'Add Worker',
    assignTask:'Assign Task', logInput:'Log Input', recordHarvest:'Record Harvest',
    logAttendance:'Log Attendance', save:'Save', cancel:'Cancel',
    cropName:'Crop Name', fieldPlot:'Field / Plot', datePlanted:'Date Planted',
    expectedHarvest:'Expected Harvest', growthStage:'Growth Stage', seedsUsed:'Seeds Used (kg)',
    notes:'Notes', plotName:'Plot Name', sizeHa:'Size (hectares)', soilType:'Soil Type',
    location:'Location', fullName:'Full Name', role:'Role', dailyRate:'Daily Rate',
    phone:'Phone', startDate:'Start Date', taskName:'Task Name', assignTo:'Assign To',
    dueDate:'Due Date', priority:'Priority', status:'Status', description:'Description',
    itemName:'Item Name', type:'Type', crop:'Crop', quantity:'Quantity', unit:'Unit',
    totalCost:'Total Cost', dateApplied:'Date Applied', yieldKg:'Yield (kg)',
    sellingPrice:'Selling Price', buyerMarket:'Buyer / Market',
    worker:'Worker', date:'Date', hoursWorked:'Hours Worked', taskPerformed:'Task Performed',
    chatPlaceholder:'Ask about your crops, labour costs, pest control, fertilizer timing... (any language)',
    searchPlaceholder:'Search crops, workers, tasks...',
    deleteConfirm:'Delete this record?',
    taskDone:'Done', updateStage:'Update Stage',
    langLabel:'Language',
    dataSaved:'Data saved ✓',
    amountLabel:'Amount'
  },
  ny: {
    addCrop:'Onjeza Mbewu', addField:'Onjeza Munda', addWorker:'Onjeza Wogwira',
    assignTask:'Patsa Ntchito', logInput:'Lembetsa Zothandizira', recordHarvest:'Lembetsa Zokolola',
    logAttendance:'Lembetsa Kuchezeka', save:'Sungani', cancel:'Siyani',
    cropName:'Dzina la Mbewu', fieldPlot:'Munda / Mbuna', datePlanted:'Tsiku la Kudzala',
    expectedHarvest:'Tsiku lokolola', growthStage:'Gawo la Kukula', seedsUsed:'Mbewu zogwiritsa ntchito (kg)',
    notes:'Mawu Ena', plotName:'Dzina la Munda', sizeHa:'Kukula (ha)', soilType:'Mtundu wa Nthaka',
    location:'Malo', fullName:'Dzina Lonse', role:'Ntchito', dailyRate:`Malipiro pa Tsiku (${currentCurrency})`,
    phone:'Foni', startDate:'Tsiku loyamba', taskName:'Dzina la Ntchito', assignTo:'Patsa',
    dueDate:'Tsiku losatha', priority:'Kofunika', status:'Mkhalidwe', description:'Kufotokoza',
    itemName:'Dzina la Chinthu', type:'Mtundu', crop:'Mbewu', quantity:'Kuchuluka', unit:'Gawo',
    totalCost:`Ndalama Zonse (${currentCurrency})`, dateApplied:'Tsiku logwiritsa', yieldKg:'Zokolola (kg)',
    sellingPrice:`Mtengo wa Kugulitsa (${currentCurrency}/kg)`, buyerMarket:'Msika / Wogula',
    worker:'Wogwira Ntchito', date:'Tsiku', hoursWorked:'Maola ogwira', taskPerformed:'Ntchito yochita',
    chatPlaceholder:'Fumula za mbewu zako, ndalama za antchito, likoswe, feteleza... (chilankhulo chilichonse)',
    searchPlaceholder:'Sakani mbewu, antchito, ntchito...',
    deleteConfirm:'Chotsani rekhodi ino?',
    taskDone:'Tatha', updateStage:'Sintha Gawo',
    langLabel:'Chilankhulo',
    dataSaved:'Datasave ✓',
  },
  bem: {
    addCrop:'Ingisha Umfwa', addField:'Ingisha Insamba', addWorker:'Ingisha Umubengi',
    assignTask:'Pela Umulimo', logInput:'Lemba Ifyo Batumina', recordHarvest:'Lemba Insalamu',
    logAttendance:'Lemba Ukufika', save:'Posa', cancel:'Asula',
    cropName:'Ishina lya Umfwa', fieldPlot:'Insamba / Musanga', datePlanted:'Ubushiku bwa Kusaala',
    expectedHarvest:'Ubushiku bwa Ukusola', growthStage:'Icipindi ca Ukukula', seedsUsed:'Amasyo (kg)',
    notes:'Amanote Eyndi', plotName:'Ishina lya Insamba', sizeHa:'Bunene (ha)', soilType:'Ubumba',
    location:'Apo', fullName:'Ishina Lyonse', role:'Umulimo', dailyRate:'Imfumo pa Bushiku (ZMW)',
    phone:'Foni', startDate:'Ubushiku bwa Ukutandika', taskName:'Ishina lya Umulimo', assignTo:'Pela',
    dueDate:'Ubushiku bwa Kumana', priority:'Ifilyangula', status:'Ifyakali', description:'Icintu',
    itemName:'Ishina lya Icintu', type:'Ubumba', crop:'Umfwa', quantity:'Ubwingi', unit:'Icipimo',
    totalCost:'Imali Yonse (ZMW)', dateApplied:'Ubushiku', yieldKg:'Insalamu (kg)',
    sellingPrice:'Mutengo wa Kushitisha (ZMW/kg)', buyerMarket:'Imikolo',
    worker:'Umubengi', date:'Ubushiku', hoursWorked:'Amaola', taskPerformed:'Umulimo',
    chatPlaceholder:'Bwisha pa mifwa yakwe, imali, ubushiku... (icilonganino conso)',
    searchPlaceholder:'Saka umfwa, abengi, imilimo...',
    deleteConfirm:'Sanga rekhodi ino?',
    taskDone:'Pamana', updateStage:'Sintha Icipindi',
    langLabel:'Icilonganino',
    dataSaved:'Datasave ✓',
  },
  toi: {
    addCrop:'Oonjezya Mbeu', addField:'Oonjezya Munda', addWorker:'Oonjezya Mweenzi',
    assignTask:'Pa Mulimo', logInput:'Ingula Zilumbi', recordHarvest:'Ingula Buundu',
    logAttendance:'Ingula Kuboola', save:'Citisya', cancel:'Siya',
    cropName:'Zina lya Mbeu', fieldPlot:'Munda', datePlanted:'Nsiku ya Kusyala',
    expectedHarvest:'Nsiku ya Buyuni', growthStage:'Cipande ca Kukula', seedsUsed:'Mbeu (kg)',
    notes:'Zibizyano Nzinzi', plotName:'Zina lya Munda', sizeHa:'Bunene (ha)', soilType:'Bulongo',
    location:'Busena', fullName:'Zina Lyoonse', role:'Mulimo', dailyRate:'Milawo pa Nsiku (ZMW)',
    phone:'Foni', startDate:'Nsiku Yakutandika', taskName:'Zina la Mulimo', assignTo:'Pa',
    dueDate:'Nsiku Yakumana', priority:'Kufwambauka', status:'Makanze', description:'Kucelelwa',
    itemName:'Zina lya Cintu', type:'Muuzyo', crop:'Mbeu', quantity:'Bungi', unit:'Chipimo',
    totalCost:'Milawo Yoonse (ZMW)', dateApplied:'Nsiku', yieldKg:'Buyuni (kg)',
    sellingPrice:'Mtengo wa Kushitisha (ZMW/kg)', buyerMarket:'Msika',
    worker:'Mweenzi', date:'Nsiku', hoursWorked:'Maawa', taskPerformed:'Mulimo',
    chatPlaceholder:'Buza za mbeu zako, mulimo... (lulimi luli lyoonse)',
    searchPlaceholder:'Saka mbeu, abenzi, milimo...',
    deleteConfirm:'Syanga rekhodi ino?',
    taskDone:'Mana', updateStage:'Sintha Cipande',
    langLabel:'Lulimi',
    dataSaved:'Datasave ✓',
  },
  loz: {
    addCrop:'Ekezo Mbua', addField:'Ekezo Naha', addWorker:'Ekezo Mushemi',
    assignTask:'Fa Musebezi', logInput:'Ngolola Lika', recordHarvest:'Ngolola Kozo',
    logAttendance:'Ngolola Kutuha', save:'Boloka', cancel:'Siylaa',
    cropName:'Libizo la Mbua', fieldPlot:'Naha / Simu', datePlanted:'Lizazi la Cala',
    expectedHarvest:'Lizazi la Kozo', growthStage:'Mwa Kukula', seedsUsed:'Mbua (kg)',
    notes:'Maswanelo Mañwi', plotName:'Libizo la Naha', sizeHa:'Bukitima (ha)', soilType:'Mubu',
    location:'Sibaka', fullName:'Libizo Kamukana', role:'Musebezi', dailyRate:'Masheleñi (ZMW)',
    phone:'Foni', startDate:'Lizazi la Kuzwela', taskName:'Libizo la Musebezi', assignTo:'Fa',
    dueDate:'Lizazi la Fela', priority:'Butokwa', status:'Mwa Buima', description:'Talusiso',
    itemName:'Libizo la Nto', type:'Muhato', crop:'Mbua', quantity:'Buñata', unit:'Teñi',
    totalCost:'Masheleñi Kaufela (ZMW)', dateApplied:'Lizazi', yieldKg:'Kozo (kg)',
    sellingPrice:'Mutengo (ZMW/kg)', buyerMarket:'Maketo',
    worker:'Mushemi', date:'Lizazi', hoursWorked:'Lihola', taskPerformed:'Musebezi',
    chatPlaceholder:'Buza za mbua zakina, mushemi... (puo ifi kamba ifi)',
    searchPlaceholder:'Bata mbua, basebezi, misebezi...',
    deleteConfirm:'Coza liñolo le?',
    taskDone:'Felile', updateStage:'Fokotsa Muhato',
    langLabel:'Puo',
    dataSaved:'Datasave ✓',
  },
  sw: {
    addCrop:'Ongeza Zao', addField:'Ongeza Shamba', addWorker:'Ongeza Mfanyakazi',
    assignTask:'Gawa Kazi', logInput:'Rekodi Pembejeo', recordHarvest:'Rekodi Mavuno',
    logAttendance:'Rekodi Mahudhurio', save:'Hifadhi', cancel:'Ghairi',
    cropName:'Jina la Zao', fieldPlot:'Shamba / Kiwanja', datePlanted:'Tarehe ya Kupanda',
    expectedHarvest:'Tarehe ya Kuvuna', growthStage:'Hatua ya Ukuaji', seedsUsed:'Mbegu (kg)',
    notes:'Maelezo Mengine', plotName:'Jina la Shamba', sizeHa:'Ukubwa (ha)', soilType:'Aina ya Udongo',
    location:'Mahali', fullName:'Jina Kamili', role:'Kazi', dailyRate:'Mshahara kwa Siku',
    phone:'Simu', startDate:'Tarehe ya Kuanza', taskName:'Jina la Kazi', assignTo:'Gawa kwa',
    dueDate:'Tarehe ya Mwisho', priority:'Kipaumbele', status:'Hali', description:'Maelezo',
    itemName:'Jina la Kitu', type:'Aina', crop:'Zao', quantity:'Kiasi', unit:'Kipimo',
    totalCost:'Gharama Zote', dateApplied:'Tarehe', yieldKg:'Mavuno (kg)',
    sellingPrice:'Bei ya Kuuza', buyerMarket:'Mnunuzi / Soko',
    worker:'Mfanyakazi', date:'Tarehe', hoursWorked:'Masaa ya Kufanya Kazi', taskPerformed:'Kazi Iliyofanywa',
    chatPlaceholder:'Uliza kuhusu mazao yako, gharama za wafanyakazi... (lugha yoyote)',
    searchPlaceholder:'Tafuta mazao, wafanyakazi, kazi...',
    deleteConfirm:'Futa rekodi hii?',
    taskDone:'Imekamilika', updateStage:'Sasisha Hatua',
    langLabel:'Lugha',
    dataSaved:'Data imehifadhiwa ✓',
  },
  ak: {
    addCrop:'Fa nneɛma bi ka ho', addField:'Fa asase bi ka ho', addWorker:'Fa odwumayɛni bi ka ho',
    save:'Sie', cancel:'Twa mu', notes:'Nsɛm a ɛho hia',
    chatPlaceholder:'Bisa biribi fa w’afuo ho...',
  },
  zu: {
    addCrop:'Faka isitshalo', addField:'Faka insimu', addWorker:'Faka isisebenzi',
    save:'Gcina', cancel:'Khansela', notes:'Amanothi',
    chatPlaceholder:'Buza mayelana nepulazi lakho...',
  }
};

function t(key) {
  if (!key) return '';
  return (T[currentLang] && T[currentLang][key]) || (T.en && T.en[key]) || key;
}

function buildRegionalSwitcher() {
  const panel = document.getElementById('regional-panel');
  if (!panel) return;
  panel.innerHTML = Object.entries(COUNTRIES).map(([code, country]) => `
    <button class="regional-option" type="button" onclick="setCountry('${code}')">
      ${country.flag} ${country.name} (${country.currency})
    </button>
  `).join('');
}

function saveData() {
  saveDataToStorage();
  if (typeof renderAll === 'function') renderAll();
}

function toggleRegionalPanel() {
  const panel = document.getElementById('regional-panel');
  if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function setLang(code) {
  currentLang = code;
  localStorage.setItem('farmtrack-lang', code);
  const panel = document.getElementById('regional-panel');
  if (panel) panel.style.display = 'none';
  applyTranslations();
  renderAll();
  showToast(t('langLabel') + ': ' + LANGUAGES[code].name);
}
function applyTranslations() {
  const labelMap = {
    'c-name': 'cropName', 'c-field': 'fieldPlot', 'c-planted': 'datePlanted',
    'c-harvest': 'expectedHarvest', 'c-stage': 'growthStage', 'c-seeds': 'seedsUsed', 'c-notes': 'notes',
    'f-name': 'plotName', 'f-size': 'sizeHa', 'f-soil': 'soilType', 'f-loc': 'location', 'f-notes': 'notes',
    'h-crop': 'crop', 'h-field': 'fieldPlot', 'h-date': 'date', 'h-yield': 'yieldKg', 'h-price': 'sellingPrice', 'h-buyer': 'buyerMarket',
    'i-name': 'itemName', 'i-type': 'type', 'i-crop': 'crop', 'i-qty': 'quantity', 'i-unit': 'unit', 'i-cost': 'totalCost', 'i-date': 'dateApplied',
    'w-name': 'fullName', 'w-role': 'role', 'w-rate': 'dailyRate', 'w-phone': 'phone', 'w-start': 'startDate',
    'a-worker': 'worker', 'a-date': 'date', 'a-hours': 'hoursWorked', 'a-task': 'taskPerformed', 'a-status': 'status',
    't-name': 'taskName', 't-field': 'fieldPlot', 't-worker': 'assignTo', 't-due': 'dueDate', 't-priority': 'priority', 't-status': 'status', 't-desc': 'description',
  };
  const currencyFields = ['h-price', 'i-cost', 'w-rate', 'ex-amount'];
  document.querySelectorAll('.form-group').forEach(group => {
    const input = group.querySelector('input,select,textarea');
    const label = group.querySelector('.form-label');
    if (input && label && labelMap[input.id]) {
      let text = t(labelMap[input.id]);
      if (currencyFields.includes(input.id)) {
        text += ` (${currentCurrency})`;
      }
      label.textContent = text;
    }
  });

  const chatInput = document.getElementById('chat-input');
  if (chatInput) chatInput.placeholder = t('chatPlaceholder');
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) searchBar.placeholder = t('searchPlaceholder');
  
  const regBtn = document.getElementById('regional-btn');
  if (regBtn) {
    const country = COUNTRIES[currentCountry];
    const lang = LANGUAGES[currentLang];
    regBtn.innerHTML = `${country.flag} ${country.currency} · ${lang.flag} ${lang.name} ▾`;
  }
}
document.addEventListener('click', e => {
  if (!e.target.closest('#regional-switcher-wrap')) {
    const p = document.getElementById('regional-panel');
    if (p) p.style.display = 'none';
  }
});
function renderInventory() {
  const table = $('inventory-table');
  if (!table) return;
  const items = db.inventory || [];
  if (items.length === 0) {
    table.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:30px; color:var(--gray-500)">No items in stock.</td></tr>';
    return;
  }
  table.innerHTML = items.map(i => {
    const status = i.qty < 5 ? 'badge-red' : i.qty < 15 ? 'badge-amber' : 'badge-green';
    const statusText = i.qty < 5 ? 'Critical' : i.qty < 15 ? 'Low' : 'In Stock';
    return `<tr>
      <td><strong>${i.item}</strong></td>
      <td><span class="badge badge-gray">${i.category}</span></td>
      <td style="font-weight:600">${i.qty}</td>
      <td>${i.unit}</td>
      <td>${formatCurr(i.cost_per_unit || 0)}</td>
      <td><span class="badge ${status}">${statusText}</span></td>
      <td><button class="btn btn-secondary btn-sm" onclick="deleteRecord('inventory', ${i.id})">🗑️</button></td>
    </tr>`;
  }).join('');
  if ($('inv-total-value')) $('inv-total-value').textContent = formatCurr(items.reduce((a, i) => a + (i.qty * (i.cost_per_unit || 0)), 0));
  if ($('inv-low-count')) $('inv-low-count').textContent = items.filter(i => i.qty < 15).length;
}

function filterInventory(val) {
  const query = val.toLowerCase();
  const rows = document.querySelectorAll('#inventory-table tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

function renderPayroll() {
  const table = $('payroll-table');
  if (!table) return;
  const workers = db.workers || [];
  const advances = db.advances || [];
  table.innerHTML = workers.map(w => {
    const adv = advances.filter(a => a.worker === w.name).reduce((a, b) => a + b.amount, 0);
    const due = w.rate * (w.days || 0);
    const net = due - adv;
    return `<tr>
      <td><strong>${w.name}</strong></td>
      <td style="color:var(--red-600)">${formatCurr(adv)}</td>
      <td style="color:var(--blue-600)">${formatCurr(due)}</td>
      <td style="font-weight:700; color:${net >= 0 ? 'var(--green-700)' : 'var(--red-600)'}">${formatCurr(net)}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="generatePayslip('${w.name}')">📄 Slip</button></td>
    </tr>`;
  }).join('');
}

function generatePayslip(workerName) {
  const w = db.workers.find(x => x.name === workerName);
  if (!w) return;
  const adv = (db.advances || []).filter(a => a.worker === w.name).reduce((a, b) => a + b.amount, 0);
  const due = w.rate * (w.days || 0);
  const net = due - adv;
  const msg = `PAYSLIP: ${w.name}\nPeriod: Jan 2026\nGross Wages: ${formatCurr(due)}\nAdvances: ${formatCurr(adv)}\nNET PAYABLE: ${formatCurr(net)}\n\nFarmTrack - ${db.farmName || "Ndou's Farm"}`;
  if (confirm("Send payslip via SMS?")) {
    $('sms-body').value = msg;
    smsRecipients = [w.name];
    showPage('sms');
  }
}

function renderAll() {
  renderDashboard();
  renderCrops();
  renderFields();
  renderWorkers();
  renderTasks();
  renderHarvest();
  renderInputs();
  renderInventory();
  renderPayroll();
  renderMarket();
  renderTraceability();
}

function toggleSidebarCollapse() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
  // Store preference
  localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Check for saved sidebar state
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  // Only auto-collapse on desktop if the user explicitly chose it before
  if (isCollapsed && window.innerWidth > 1024) {
    sidebar.classList.add('collapsed');
  }
});

// ===== INITIALIZE =====
initAuth();

document.addEventListener('click', e => {
  if (!e.target.closest('#regional-switcher-wrap')) {
    const p = document.getElementById('regional-panel');
    if (p) p.style.display = 'none';
  }
});

setTimeout(() => { 
  buildRegionalSwitcher(); 
  applyTranslations(); 
  renderAll();
}, 100);
const _origSaveTask = saveTask;
window.saveTask = function() { _origSaveTask(); saveDataToStorage(); };
const _origCompleteTask = completeTask;
window.completeTask = function(id) { _origCompleteTask(id); saveDataToStorage(); };

// ===== PATCHED RENDER FUNCTIONS (with delete buttons + lang-aware) =====
const _baseRenderCrops = window.renderCrops;
window.renderCrops = function() {
  const el = document.getElementById('crops-table');
  if (!el) return;
  el.innerHTML = db.crops.map(c => {
    const sp = {'Land Preparation':10,'Planting':25,'Fertilizing':40,'Spraying':55,'Growing':75,'Harvesting':95};
    const pct = sp[c.stage] || 50;
    return `<tr>
      <td><strong>${cropIcon(c.name)} ${c.name}</strong>${c.notes?`<br><span style="font-size:11px;color:var(--gray-500)">${c.notes}</span>`:''}
      </td>
      <td>${c.field}</td><td>${c.planted}</td><td>${c.harvest}</td>
      <td><span class="badge ${stageColor(c.stage)}">${c.stage}</span></td>
      <td>${c.seeds>0?c.seeds+' kg':'—'}</td>
      <td style="white-space:nowrap">
        <button class="btn btn-secondary btn-sm" onclick="editCropStage(${c.id})" style="margin-right:4px">${t('updateStage')}</button>
        <button class="btn btn-sm" onclick="deleteRecord('crop',${c.id})" style="background:#fdecea;color:#c0392b;border:1px solid #f5c6c2" title="Delete">🗑</button>
      </td></tr>`;
  }).join('');
};

const _baseRenderWorkers = window.renderWorkers;
window.renderWorkers = function() {
  const wt = document.getElementById('workers-table');
  const at = document.getElementById('attendance-table');
  if (wt) wt.innerHTML = db.workers.map(w => {
    const access = w.accessRole || 'worker';
    const opts = ['worker', 'foreman', 'supervisor', 'manager'].map((r) => `<option value="${r}" ${access === r ? 'selected' : ''}>${typeof rankLabel === 'function' ? rankLabel(r) : r}</option>`).join('');
    const safeName = w.name.replace(/'/g, "\\'");
    return `<tr class="click-row" onclick="openEditWorker(${w.id})" title="Click row to edit">
    <td><div style="display:flex;align-items:center;gap:10px">
      <div class="avatar avatar-green">${w.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
      <div><strong>${w.name}</strong><br><span style="font-size:11px;color:var(--gray-500)">${w.phone || '—'}</span></div>
    </div></td>
    <td>${w.role}</td><td>${currentCurrency} ${fmt(w.rate)}</td><td>${w.days}</td>
    <td style="color:var(--green-700);font-weight:600">${currentCurrency} ${fmt(Math.round(w.rate*w.days))}</td>
    <td data-requires-rank="manager" onclick="event.stopPropagation()"><select class="form-control" style="font-size:11px;padding:4px 6px;max-width:130px" onchange="setWorkerAccessRole(${w.id}, this.value)">${opts}</select></td>
    <td onclick="event.stopPropagation()"><div class="inline-quick"><button type="button" class="present" onclick="quickMarkWorker('${safeName}','Present')">P</button><button type="button" onclick="quickMarkWorker('${safeName}','Half Day')">½</button><button type="button" class="absent" onclick="quickMarkWorker('${safeName}','Absent')">A</button></div></td>
    <td onclick="event.stopPropagation()"><button class="btn btn-sm" onclick="deleteRecord('worker',${w.id})" style="background:#fdecea;color:#c0392b;border:1px solid #f5c6c2" title="Delete">🗑</button></td>
  </tr>`;
  }).join('');
  if (at) at.innerHTML = db.attendance.map(a => `<tr class="click-row">
    <td>${a.worker}</td><td>${a.date}</td><td onclick="event.stopPropagation()">${a.hours}h</td><td>${a.task}</td>
    <td><span class="badge ${statusColor(a.status)} click-badge" onclick="cycleAttendanceStatus(${a.id})" title="Tap to change">${a.status}</span></td>
    <td><button class="btn btn-sm" onclick="deleteRecord('attendance',${a.id})" style="background:#fdecea;color:#c0392b;border:1px solid #f5c6c2" title="Delete">🗑</button></td>
  </tr>`).join('');
};

const _baseRenderTasks = window.renderTasks;
window.renderTasks = function() {
  const el = document.getElementById('tasks-table');
  if (!el) return;
  el.innerHTML = db.tasks.map(t2 => `<tr class="click-row" onclick="openEditTask(${t2.id})" title="Click to edit">
    <td><strong>${t2.name}</strong>${t2.desc?`<br><span style="font-size:11px;color:var(--gray-500)">${t2.desc}</span>`:''}</td>
    <td>${t2.field}</td><td>${t2.worker}</td><td>${t2.due}</td>
    <td><span class="badge ${priorityColor(t2.priority)}">${t2.priority}</span></td>
    <td onclick="event.stopPropagation()"><span class="badge ${statusColor(t2.status)} click-badge" onclick="toggleTaskComplete(${t2.id})" title="Tap status">${t2.status}</span></td>
    <td style="white-space:nowrap" onclick="event.stopPropagation()">
      ${t2.status!=='Completed'?`<button class="btn btn-secondary btn-sm" onclick="completeTask(${t2.id})" style="margin-right:4px">${t('taskDone')}</button>`:''}
      <button class="btn btn-sm" onclick="deleteRecord('task',${t2.id})" style="background:#fdecea;color:#c0392b;border:1px solid #f5c6c2" title="Delete">🗑</button>
    </td>
  </tr>`).join('');
};

const _baseRenderInputs = window.renderInputs;
window.renderInputs = function() {
  const el = document.getElementById('inputs-table');
  if (!el) return;
  const tc = {'Fertilizer':'green','Seed':'earth','Herbicide':'amber','Pesticide':'amber','Fuel':'blue','Other':'gray'};
  el.innerHTML = db.inputs.map(i => `<tr>
    <td><strong>${i.name}</strong></td>
    <td><span class="badge badge-${tc[i.type]||'gray'}">${i.type}</span></td>
    <td>${i.crop}</td><td>${i.qty}</td><td>${i.unit}</td>
    <td>${currentCurrency} ${fmt(i.cost)}</td><td>${i.date}</td>
    <td><button class="btn btn-sm" onclick="deleteRecord('input',${i.id})" style="background:#fdecea;color:#c0392b;border:1px solid #f5c6c2" title="Delete">🗑</button></td>
  </tr>`).join('');
};

const _baseRenderHarvest = window.renderHarvest;
window.renderHarvest = function() {
  const el = document.getElementById('harvest-table');
  if (!el) return;
  el.innerHTML = db.harvests.map(h => `<tr>
    <td><strong>${cropIcon(h.crop)} ${h.crop}</strong></td>
    <td>${h.date}</td><td>${fmt(h.yield)} kg</td>
    <td>${currentCurrency} ${h.price.toFixed(2)}</td>
    <td style="color:var(--green-700);font-weight:600">${currentCurrency} ${fmt(Math.round(h.yield*h.price))}</td>
    <td>${h.field}</td>
    <td><button class="btn btn-sm" onclick="deleteRecord('harvest',${h.id})" style="background:#fdecea;color:#c0392b;border:1px solid #f5c6c2" title="Delete">🗑</button></td>
  </tr>`).join('');
};

function patchTableHeaders() {
  const tables = {
    'crops-table': 'Actions',
    'workers-table': 'Actions',
    'attendance-table': '',
    'tasks-table': 'Action',
    'inputs-table': '',
    'harvest-table': '',
  };
  const wt = document.querySelector('#page-workers table:first-of-type thead tr');
  if (wt && wt.children.length === 6) {
    const th = document.createElement('th');
    th.textContent = '';
    wt.appendChild(th);
  }
  const at = document.querySelector('#page-workers table:last-of-type thead tr');
  if (at && at.children.length === 5) {
    const th = document.createElement('th');
    th.textContent = '';
    at.appendChild(th);
  }
  const ht = document.querySelector('#page-harvest thead tr');
  if (ht && ht.children.length === 6) {
    const th = document.createElement('th');
    th.textContent = '';
    ht.appendChild(th);
  }
  const it = document.querySelector('#page-inputs thead tr');
  if (it && it.children.length === 7) {
    const th = document.createElement('th');
    th.textContent = '';
    it.appendChild(th);
  }
}
setTimeout(patchTableHeaders, 200);

// ===== MULTILINGUAL CHAT INPUT ATTRIBUTES =====
function patchChatInput() {
  const ci = document.getElementById('chat-input');
  if (!ci) return;
  ci.removeAttribute('lang');
  ci.setAttribute('autocomplete', 'off');
  ci.setAttribute('autocorrect', 'off');
  ci.setAttribute('autocapitalize', 'off');
  ci.setAttribute('spellcheck', 'false');
  ci.placeholder = t('chatPlaceholder');
  ['c-notes', 'f-notes', 't-desc', 'a-task', 'sms-body'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute('autocorrect', 'off');
      el.setAttribute('lang', '');
    }
  });
  document.querySelectorAll('.form-control[type="text"], .form-control:not([type])').forEach(el => {
    if (!el.type || el.type === 'text') {
      el.removeAttribute('lang');
    }
  });
}
setTimeout(patchChatInput, 300);

// ===== FIX AI ADVISOR TO ACCEPT ANY LANGUAGE =====
const _origBuildFarmContext = window.buildFarmContext;
window.buildFarmContext = function() {
  const base = _origBuildFarmContext();
  return base + `\n\n- Expanded Crop Support: Tobacco, Wheat, Cassava, various Fruits (Apples, Berries, Citrus), and generic Vegetables.
- GPS Context: Each field now has specific coordinates (Latitude/Longitude) and topographical data. Suggest crops based on terrain and soil. 
- Tobacco Advice: Growing well in Sandy Loam areas (North Field).
- Wheat Advice: Thrives in cooler periods or Clay Loam (South Plot).
- Cassava/Fruits: Recommend for long-term plot stability.
IMPORTANT: The farmer may write their question in any language...`;
};

// ===== RESET DATA BUTTON (in export page) =====
function addResetDataBtn() {
  const exportPage = document.getElementById('page-export');
  if (!exportPage || document.getElementById('reset-data-btn')) return;
  const btn = document.createElement('button');
  btn.id = 'reset-data-btn';
  btn.className = 'btn btn-sm';
  btn.style.cssText = 'background:#fdecea;color:#c0392b;border:1px solid #f5c6c2;margin-top:16px;';
  btn.textContent = '🗑 Reset All Data (clear saved data)';
  btn.onclick = function() {
    if (confirm('Reset all saved data to defaults? This cannot be undone.')) {
      localStorage.removeItem('farmtrack-data');
      location.reload();
    }
  };
  exportPage.querySelector('.section-desc').insertAdjacentElement('afterend', btn);
}
setTimeout(addResetDataBtn, 400);

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const shortcuts = { '1':'dashboard','2':'crops','3':'workers','4':'tasks','5':'weather','6':'ai','7':'reports' };
  if (shortcuts[e.key]) window.showPage(shortcuts[e.key]);
  if (e.key === 'd') toggleDark();
});

setTimeout(() => {
  const t = document.getElementById('toast');
  if (t) {
    t.innerHTML = '⌨️ Tip: Press 1–7 to switch pages · D for dark mode';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
  }
}, 3500);

setTimeout(() => { renderAll(); applyTranslations(); }, 50);

// Legacy auth removed in favor of Supabase production auth

function setUserBadge() {
  const right = document.querySelector('.topbar-right');
  if (!right) return;
  const existing = document.getElementById('user-badge');
  if (existing) existing.remove();
  const tag = document.createElement('div');
  tag.id = 'user-badge';
  tag.style.cssText = 'font-size:12px;background:#e6f7ec;color:#1e4d35;border:1px solid #c0eacd;border-radius:999px;padding:5px 10px;display:flex;gap:8px;align-items:center';
  tag.innerHTML = `${currentUser ? `${currentUser.name} (${currentUser.role})` : 'Guest'} <span style="cursor:pointer;color:#c0392b" title="Logout" id="logout-btn">Logout</span>`;
  right.prepend(tag);
  const lo = document.getElementById('logout-btn');
  if (lo) lo.onclick = () => { localStorage.removeItem('farmtrack-user'); location.reload(); };
}

function calcFinance() {
  const revenue = db.harvests.reduce((a, h) => a + (h.yield * h.price), 0);
  const inputCosts = db.inputs.reduce((a, i) => a + i.cost, 0);
  const labour = db.workers.reduce((a, w) => a + (w.rate * w.days), 0);
  const extra = db.expenses.reduce((a, e) => a + e.amount, 0);
  const totalCosts = inputCosts + labour + extra;
  return { revenue, inputCosts, labour, extra, totalCosts, profit: revenue - totalCosts };
}

function injectFinancePanel() {
  const page = document.getElementById('page-reports');
  if (!page || document.getElementById('finance-plus-card')) return;
  const card = document.createElement('div');
  card.id = 'finance-plus-card';
  card.className = 'card mb-20';
  card.innerHTML = `
    <div class="card-header"><div class="card-title">Farm Financial Summary</div></div>
    <div id="finance-kpis" class="grid-3 mb-20"></div>
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Expense Item</label><input id="ex-item" class="form-control" placeholder="Fuel top-up"></div>
      <div class="form-group"><label class="form-label">Category</label><input id="ex-category" class="form-control" placeholder="Logistics"></div>
      <div class="form-group"><label class="form-label">${t('amountLabel')} (${currentCurrency})</label><input id="ex-amount" type="number" class="form-control"></div>
      <div class="form-group"><label class="form-label">Date</label><input id="ex-date" type="date" class="form-control"></div>
    </div>
    <div class="form-group"><label class="form-label">Notes</label><input id="ex-notes" class="form-control" placeholder="Optional"></div>
    <button class="btn btn-primary btn-sm" id="add-expense-btn">+ Add Expense</button>
    <div class="table-wrap" style="margin-top:12px"><table><thead><tr><th>Item</th><th>Category</th><th>Amount</th><th>Date</th></tr></thead><tbody id="expense-table"></tbody></table></div>
  `;
  page.prepend(card);
  document.getElementById('ex-date').value = today();
  document.getElementById('add-expense-btn').onclick = function addExpense() {
    const item = document.getElementById('ex-item').value.trim();
    const category = document.getElementById('ex-category').value.trim() || 'Other';
    const amount = Number(document.getElementById('ex-amount').value || 0);
    if (!item || amount <= 0) return showToast('Enter expense item and amount');
    db.expenses.unshift({ id: Date.now(), item, category, amount, date: document.getElementById('ex-date').value || today(), notes: document.getElementById('ex-notes').value.trim() });
    ['ex-item', 'ex-category', 'ex-amount', 'ex-notes'].forEach((id) => { const el = document.getElementById(id); if (el) el.value = ''; });
    saveData();
    renderFinancePanel();
    renderReports();
    updateBudgetSpend();
    showToast('Expense added');
  };
}

function updateBudgetSpend() {
  const inputCosts = db.inputs.reduce((a, i) => a + i.cost, 0);
  const labourCosts = db.workers.reduce((a, w) => a + (w.rate * w.days), 0);
}

function renderFinancePanel() {
  const kpis = document.getElementById('finance-kpis');
  const table = document.getElementById('expense-table');
  if (!kpis || !table) return;
  const f = calcFinance();
  kpis.innerHTML = `
    <div class="stat-card stat-blue"><div class="stat-label">Revenue</div><div class="stat-value">${formatCurr(Math.round(f.revenue))}</div></div>
    <div class="stat-card stat-amber"><div class="stat-label">Extra Expenses</div><div class="stat-value">${formatCurr(Math.round(f.extra))}</div></div>
    <div class="stat-card ${f.profit >= 0 ? 'stat-green' : 'stat-amber'}"><div class="stat-label">Net Profit</div><div class="stat-value">${formatCurr(Math.round(f.profit))}</div></div>
  `;
  table.innerHTML = (db.expenses || []).map((e) => `<tr><td>${e.item}</td><td>${e.category}</td><td>${formatCurr(e.amount)}</td><td>${e.date}</td></tr>`).join('');
}

function getInventoryAlerts() {
  const thresholds = { Fertilizer: 50, Seed: 20, Herbicide: 3, Pesticide: 3, Fuel: 30, Other: 10 };
  return db.inputs
    .map((i) => ({ ...i, min: thresholds[i.type] || 10 }))
    .filter((i) => Number(i.qty) <= i.min)
    .map((i) => ({ type: i.type, msg: `${i.name} low: ${i.qty} ${i.unit} (min ${i.min})` }));
}

function injectInventoryAlerts() {
  const page = document.getElementById('page-inputs');
  if (!page || document.getElementById('inventory-alert-card')) return;
  const card = document.createElement('div');
  card.id = 'inventory-alert-card';
  card.className = 'card mb-20';
  card.innerHTML = `<div class="card-header"><div class="card-title">Inventory Alerts</div></div><div id="inventory-alert-list"></div>`;
  page.prepend(card);
}

function renderInventoryAlerts() {
  const list = document.getElementById('inventory-alert-list');
  if (!list) return;
  const alerts = getInventoryAlerts();
  if (!alerts.length) {
    list.innerHTML = `<div class="badge badge-green">All stock levels healthy</div>`;
    return;
  }
  list.innerHTML = alerts.map((a) => `<div class="alert-pill alert-warn" style="margin-bottom:8px">⚠️ ${a.msg}</div>`).join('');
}

function injectCalendarReminders() {
  const page = document.getElementById('page-tasks');
  if (!page || document.getElementById('calendar-reminder-card')) return;
  const card = document.createElement('div');
  card.id = 'calendar-reminder-card';
  card.className = 'card mb-20';
  card.innerHTML = `
    <div class="card-header"><div class="card-title">Calendar & Reminders</div></div>
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Reminder Title</label><input id="rem-title" class="form-control" placeholder="Spray maize field"></div>
      <div class="form-group"><label class="form-label">Date</label><input id="rem-date" type="date" class="form-control"></div>
    </div>
    <button class="btn btn-primary btn-sm" id="add-rem-btn">+ Add Reminder</button>
    <div id="reminder-list" style="margin-top:12px"></div>
  `;
  page.prepend(card);
  document.getElementById('rem-date').value = today();
  document.getElementById('add-rem-btn').onclick = function addReminder() {
    const title = document.getElementById('rem-title').value.trim();
    const date = document.getElementById('rem-date').value;
    if (!title || !date) return showToast('Enter reminder title and date');
    db.reminders.unshift({ id: Date.now(), title, date, sent: false });
    saveData();
    document.getElementById('rem-title').value = '';
    renderReminders();
  };
}

function renderReminders() {
  const list = document.getElementById('reminder-list');
  if (!list) return;
  const taskRems = db.tasks
    .filter((t) => t.status !== 'Completed')
    .map((t) => ({ title: `${t.name} (${t.worker})`, date: t.due, auto: true }));
  const manual = db.reminders.map((r) => ({ title: r.title, date: r.date, auto: false }));
  const all = [...manual, ...taskRems].sort((a, b) => String(a.date).localeCompare(String(b.date)));
  list.innerHTML = all.map((r) => {
    const days = Math.ceil((new Date(r.date) - new Date(today())) / 86400000);
    const badge = days < 0 ? 'badge-red' : days <= 2 ? 'badge-amber' : 'badge-green';
    const label = days < 0 ? 'Overdue' : days === 0 ? 'Today' : `${days} day(s)`;
    return `<div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--gray-100);padding:8px 0"><div>${r.title}${r.auto ? ' <span style="font-size:11px;color:var(--gray-500)">(task)</span>' : ''}</div><div><span class="badge ${badge}">${label}</span></div></div>`;
  }).join('');
}

function runReminderNotifications() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'default') Notification.requestPermission();
  if (Notification.permission !== 'granted') return;
  db.reminders.forEach((r) => {
    if (r.sent) return;
    if (r.date === today()) {
      new Notification('FarmTrack Reminder', { body: r.title });
      r.sent = true;
      saveData();
    }
  });
}

function injectPestReporting() {
  const page = document.getElementById('page-crops');
  if (!page || document.getElementById('pest-card')) return;
  const card = document.createElement('div');
  card.id = 'pest-card';
  card.className = 'card mb-20';
  card.innerHTML = `
    <div class="card-header"><div class="card-title">Pest & Disease Reporting</div></div>
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Crop</label><input id="pest-crop" class="form-control" placeholder="Maize"></div>
      <div class="form-group"><label class="form-label">Field</label><input id="pest-field" class="form-control" placeholder="North Field A"></div>
      <div class="form-group"><label class="form-label">Pest/Disease</label><input id="pest-name" class="form-control" placeholder="Fall Armyworm"></div>
      <div class="form-group"><label class="form-label">Severity</label><select id="pest-sev" class="form-control"><option>Low</option><option>Medium</option><option>High</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Treatment</label><input id="pest-treatment" class="form-control" placeholder="Recommended treatment"></div>
    <div class="form-group"><label class="form-label">Notes</label><input id="pest-notes" class="form-control"></div>
    <button class="btn btn-primary btn-sm" id="add-pest-btn">+ Log Report</button>
    <div class="table-wrap" style="margin-top:12px"><table><thead><tr><th>Date</th><th>Crop</th><th>Field</th><th>Issue</th><th>Severity</th><th>Treatment</th></tr></thead><tbody id="pest-table"></tbody></table></div>
  `;
  page.appendChild(card);
  document.getElementById('add-pest-btn').onclick = function addPest() {
    const crop = document.getElementById('pest-crop').value.trim();
    const field = document.getElementById('pest-field').value.trim();
    const pest = document.getElementById('pest-name').value.trim();
    if (!crop || !field || !pest) return showToast('Fill crop, field, and pest/disease');
    db.pestReports.unshift({
      id: Date.now(),
      crop,
      field,
      pest,
      severity: document.getElementById('pest-sev').value,
      treatment: document.getElementById('pest-treatment').value.trim(),
      notes: document.getElementById('pest-notes').value.trim(),
      date: today(),
    });
    ['pest-crop', 'pest-field', 'pest-name', 'pest-treatment', 'pest-notes'].forEach((id) => { const el = document.getElementById(id); if (el) el.value = ''; });
    saveData();
    renderPestReports();
    showToast('Pest report saved');
  };
}

function renderPestReports() {
  const tBody = document.getElementById('pest-table');
  if (!tBody) return;
  const sev = { Low: 'badge-green', Medium: 'badge-amber', High: 'badge-red' };
  tBody.innerHTML = db.pestReports.map((p) => `<tr><td>${p.date}</td><td>${p.crop}</td><td>${p.field}</td><td>${p.pest}</td><td><span class="badge ${sev[p.severity] || 'badge-gray'}">${p.severity}</span></td><td>${p.treatment || '—'}</td></tr>`).join('');
}

async function upgradeWeatherLive() {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-15.4167&longitude=28.2833&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto');
    if (!res.ok) return;
    const j = await res.json();
    weatherData.temp = Math.round(j.current.temperature_2m);
    weatherData.humidity = Math.round(j.current.relative_humidity_2m);
    weatherData.wind = `${Math.round(j.current.wind_speed_10m)} km/h`;
    if (Array.isArray(j.daily.time)) {
      weatherData.forecast = j.daily.time.slice(0, 5).map((d, idx) => ({
        day: idx === 0 ? 'Today' : new Date(d).toLocaleDateString('en-ZM', { weekday: 'short' }),
        icon: (j.daily.precipitation_probability_max[idx] || 0) > 60 ? '🌧️' : '⛅',
        high: Math.round(j.daily.temperature_2m_max[idx]),
        low: Math.round(j.daily.temperature_2m_min[idx]),
        rain: `${j.daily.precipitation_probability_max[idx] || 0}%`,
      }));
    }
    renderWeather();
    renderWeatherMini();
  } catch (e) {
    console.warn('Live weather unavailable, using default weather');
  }
}

function registerPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
}

function guardMutationsByRole() {
  const wrap = (name, action, message) => {
    const fn = window[name];
    if (typeof fn !== 'function') return;
    window[name] = function guardedFn(...args) {
      if (!guardAction(action, message)) return;
      const res = fn.apply(this, args);
      saveData();
      return res;
    };
  };
  wrap('saveCrop', 'crops', 'Only manager/admin can add crops');
  wrap('saveField', 'fields', 'Only manager/admin can add fields');
  wrap('saveHarvest', 'harvest', 'Only manager/admin can add harvests');
  wrap('saveInput', 'inputs-lite', 'Only manager/admin can add inputs');
  wrap('saveWorker', 'workers', 'Only manager/admin can add workers');
  wrap('saveAttendance', 'workers', 'Only manager/admin can log attendance');
  wrap('saveTask', 'tasks', 'Only manager/admin can assign tasks');
  wrap('completeTask', 'tasks', 'Only assigned roles can complete tasks');
  wrap('sendSms', 'sms', 'SMS not allowed for your role');
  wrap('exportCSV', 'reports', 'Export not allowed for your role');
  const originalPrint = window.printReport;
  if (typeof originalPrint === 'function') {
    window.printReport = function guardedPrint(...args) {
      if (!guardAction('reports', 'Print report not allowed for your role')) return;
      return originalPrint.apply(this, args);
    };
  }
}

function installConflictWatch() {
  window.addEventListener('storage', (e) => {
    if (e.key !== 'farmtrack-data' || !e.newValue) return;
    try {
      const incoming = JSON.parse(e.newValue);
      if (!incoming || typeof incoming !== 'object') return;
      const localMetaRaw = localStorage.getItem('farmtrack-data-meta');
      const localMeta = localMetaRaw ? JSON.parse(localMetaRaw) : null;
      if (localMeta && localMeta.updatedAt) {
        showToast('Data updated from another tab/device; merged safely');
      }
      Object.keys(db).forEach((k) => {
        if (!Array.isArray(db[k]) || !Array.isArray(incoming[k])) return;
        const merged = [...db[k], ...incoming[k]];
        const seen = new Set();
        db[k] = merged.filter((item) => {
          const id = item && item.id ? String(item.id) : JSON.stringify(item);
          if (seen.has(id)) return false;
          seen.add(id);
          return true;
        });
      });
      renderAll();
    } catch (_) {}
  });
}

function normalizeVisualLabels() {
  const safeIcons = {
    dashboard: '🏡',
    crops: '🌱',
    fields: '📐',
    harvest: '🌾',
    inputs: '🧪',
    workers: '👥',
    tasks: '✅',
    weather: '🌦',
    ai: '🤖',
    sms: '📱',
    reports: '📊',
    export: '📤',
  };
  const setIf = (sel, val) => { const el = document.querySelector(sel); if (el) el.innerHTML = val; };
  setIf('.splash-logo', '<img src="./assets/images/logo-full.png" style="width:100%; height:100%; object-fit:contain">');
  setIf('.logo-icon-wrap', '<img src="./assets/images/logo-full.png" style="width:100%; height:100%; object-fit:contain">');
  setIf('.logo-leaf', '🌱');
  setIf('.ai-avatar-large', '🤖');
  document.querySelectorAll('.nav-item').forEach((item) => {
    const icon = item.querySelector('.icon');
    if (!icon) return;
    const m = (item.getAttribute('onclick') || '').match(/showPage\('(\w+)'\)/);
    const page = m ? m[1] : '';
    icon.textContent = safeIcons[page] || '•';
  });
  document.querySelectorAll('.dock-btn').forEach((btn) => {
    const icon = btn.querySelector('.dock-icon');
    if (!icon) return;
    const m = (btn.getAttribute('onclick') || '').match(/showPage\('(\w+)'\)/);
    const page = m ? m[1] : '';
    icon.textContent = safeIcons[page] || '•';
  });
  document.querySelectorAll('.close-btn').forEach((b) => { b.textContent = '×'; });
  const farmLabels = document.querySelectorAll('.farm-photo-label');
  if (farmLabels[0]) farmLabels[0].textContent = '🌽 Maize - Growing';
  if (farmLabels[1]) farmLabels[1].textContent = '🫘 Soya Bean - Fertilizing';
  if (farmLabels[2]) farmLabels[2].textContent = '🥜 Groundnuts - Planting';
  if (farmLabels[3]) farmLabels[3].textContent = '👥 7 Workers on duty';
  document.querySelectorAll('.page-hero-icon').forEach((el, idx) => {
    const icons = ['🌱', '📐', '🌾', '🧪', '👥', '✅', '🌦', '🤖', '📱', '📊', '📤'];
    el.textContent = icons[idx] || '•';
  });
  document.querySelectorAll('.play-btn').forEach((el, idx) => {
    const icons = ['🤖', '🌦', '📊'];
    el.textContent = icons[idx] || '▶';
  });
  document.querySelectorAll('.ex-icon').forEach((el, idx) => {
    const icons = ['📋', '🧪', '👥', '✅', '📊', '🖨'];
    el.textContent = icons[idx] || '•';
  });
  const ticker = document.querySelector('.ticker-inner');
  if (ticker) ticker.textContent = 'Maize -> Growing · Soya Bean -> Fertilizing · Groundnuts -> Planting · Sweet Potato -> Harvesting · Tobacco -> Growing · Wheat -> Fertilizing · Barley -> Growing · Vegetables -> Planting';
}

function enhanceAIPrompts() {
  quickPromptsData.push('Give me low-cost pest control options for this week.');
  quickPromptsData.push('Summarize overdue tasks and reminders for me.');
}

const _baseRenderAllV2 = renderAll;
window.renderAll = function renderAllUpgraded() {
  _baseRenderAllV2();
  renderFinancePanel();
  renderInventoryAlerts();
  renderReminders();
  renderPestReports();
};

function initPlatformUpgrades() {
  const run = (name, fn) => {
    try { 
      console.log(`Initializing ${name}...`);
      fn(); 
    } catch(e) { 
      console.error(`Failed to initialize ${name}:`, e); 
    }
  };

  run('Auth & Session', initAuth);
  run('Finance Panel', injectFinancePanel);
  run('Inventory Alerts', injectInventoryAlerts);
  run('Calendar Reminders', injectCalendarReminders);
  run('Pest Reporting', injectPestReporting);
  run('Visual Labels', normalizeVisualLabels);
  run('AI Prompts', enhanceAIPrompts);
  run('Conflict Sync', installConflictWatch);
  
  run('Live Weather', () => { if (typeof upgradeWeatherLive === 'function') upgradeWeatherLive(); });
  run('Reminder Sync', () => { if (typeof runReminderNotifications === 'function') runReminderNotifications(); });
  run('PWA Registration', () => { if (typeof registerPWA === 'function') registerPWA(); });

  setInterval(() => {
    if (typeof runReminderNotifications === 'function') runReminderNotifications();
  }, 60000);
  
  run('Role Access', applyRoleSecurity);
  
  window.addEventListener('beforeunload', saveData);

  // Force hide splash after upgrades
  setTimeout(hideSplash, 3500);
}
setTimeout(initPlatformUpgrades, 450);
// ===== INVENTORY LOGIC =====
function renderInventory() {
  const table = $('inventory-table');
  if (!table) return;
  const items = db.inventory || [];
  table.innerHTML = items.map(i => {
    const status = i.qty < 5 ? 'badge-red' : i.qty < 15 ? 'badge-amber' : 'badge-green';
    const statusText = i.qty < 5 ? 'Critical' : i.qty < 15 ? 'Low' : 'In Stock';
    return `<tr>
      <td><strong>${i.item}</strong></td>
      <td><span class="badge badge-gray">${i.category}</span></td>
      <td style="font-weight:600">${i.qty}</td>
      <td>${i.unit}</td>
      <td>${formatCurr(i.cost_per_unit)}</td>
      <td><span class="badge ${status}">${statusText}</span></td>
      <td><button class="btn btn-ghost btn-sm" onclick="editInv('${i.id}')">Edit</button></td>
    </tr>`;
  }).join('');
  $('inv-total-value').textContent = formatCurr(items.reduce((a, i) => a + (i.qty * i.cost_per_unit), 0));
  $('inv-low-count').textContent = items.filter(i => i.qty < 15).length;
}

// ===== PAYROLL & ADVANCES =====
function renderPayroll() {
  const table = $('payroll-table');
  if (!table) return;
  const workers = db.workers || [];
  const advances = db.advances || [];
  table.innerHTML = workers.map(w => {
    const adv = advances.filter(a => a.worker === w.name).reduce((a, b) => a + b.amount, 0);
    const due = w.rate * (w.days || 0);
    const net = due - adv;
    return `<tr>
      <td><strong>${w.name}</strong></td>
      <td style="color:var(--red-600)">${formatCurr(adv)}</td>
      <td style="color:var(--blue-600)">${formatCurr(due)}</td>
      <td style="font-weight:700; color:${net >= 0 ? 'var(--green-700)' : 'var(--red-600)'}">${formatCurr(net)}</td>
      <td><button class="btn btn-ghost btn-sm" onclick="generatePayslip('${w.name}')">📄 Slip</button></td>
    </tr>`;
  }).join('');
}

function generatePayslip(workerName) {
  const w = db.workers.find(x => x.name === workerName);
  if (!w) return;
  const adv = (db.advances || []).filter(a => a.worker === w.name).reduce((a, b) => a + b.amount, 0);
  const due = w.rate * (w.days || 0);
  const net = due - adv;
  const msg = `PAYSLIP: ${w.name}\nPeriod: Jan 2026\nGross Wages: ${formatCurr(due)}\nAdvances: ${formatCurr(adv)}\nNET PAYABLE: ${formatCurr(net)}\n\nFarmTrack - ${db.farmName}`;
  if (confirm("Send payslip via SMS?")) {
    $('sms-body').value = msg;
    smsRecipients = [w.name];
    showPage('sms');
  }
}

// ===== GPS WALKING =====
let gpsWatchId = null;
let walkPath = [];
function startGpsWalking() {
  if (!navigator.geolocation) { showToast("GPS not supported"); return; }
  walkPath = [];
  $('gps-status').innerHTML = '<span class="live-dot"></span> Recording Path...';
  gpsWatchId = navigator.geolocation.watchPosition(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    walkPath.push([lat, lng]);
    $('gps-status').textContent = `Walked ${walkPath.length} points...`;
    // If map exists, draw path
    if (window.map) {
       if (window.walkPoly) window.walkPoly.remove();
       window.walkPoly = L.polyline(walkPath, {color: 'var(--green-600)'}).addTo(window.map);
    }
  }, e => showToast("GPS Error: " + e.message), {enableHighAccuracy: true});
  
  // Add a stop button dynamically
  const btn = document.querySelector('[onclick="startGpsWalking()"]');
  btn.textContent = "⏹ Stop Walking";
  btn.onclick = stopGpsWalking;
}

function stopGpsWalking() {
  navigator.geolocation.clearWatch(gpsWatchId);
  const btn = document.querySelector('[onclick="startGpsWalking()"]');
  btn.textContent = "🚶‍♂️ Walk New Boundary (Live GPS)";
  btn.onclick = startGpsWalking;
  
  if (walkPath.length < 3) { showToast("Path too short to form a field"); return; }
  
  // Calculate area using Shoelace formula
  let area = 0;
  for (let i = 0; i < walkPath.length; i++) {
    let j = (i + 1) % walkPath.length;
    area += walkPath[i][0] * walkPath[j][1];
    area -= walkPath[j][0] * walkPath[i][1];
  }
  area = Math.abs(area) / 2;
  // Convert lat/lng degrees to hectares (approximate for Lusaka)
  const hectares = (area * 111320 * 111320) / 10000;
  
  const hFormatted = hectares.toFixed(2);
  $('gps-status').textContent = `Field Area: ${hFormatted} ha`;
  if (confirm(`Detected Field: ${hFormatted} hectares. Create new field?`)) {
    showModal('modal-field');
    $('f-size').value = hFormatted;
    $('f-lat').value = walkPath[0][0];
    $('f-lng').value = walkPath[0][1];
  }
}

// ===== AI BACKEND DIAGNOSTICS & CONFIGURATION =====

function toggleAIDiagnostics() {
  const body = $('ai-diagnostics-body');
  const icon = $('ai-diag-toggle-icon');
  if (body.style.display === 'none') {
    body.style.display = 'block';
    icon.textContent = '▲';
  } else {
    body.style.display = 'none';
    icon.textContent = '▼';
  }
}

function updateAIDiagConfig() {
  const url = $('ai-diag-url').value.trim();
  const display = $('ai-diag-endpoint-display');
  if (url) {
    display.textContent = `${url.replace(/\/+$/,'')}/functions/v1/ai-chat`;
  } else {
    display.textContent = 'https://your-project.supabase.co/functions/v1/ai-chat';
  }
}

function initAIDiagnosticsUI() {
  const urlInput = $('ai-diag-url');
  const keyInput = $('ai-diag-key');
  if (!urlInput || !keyInput) return;

  const savedUrl = localStorage.getItem('farmtrack-supabase-url') || '';
  const savedKey = localStorage.getItem('farmtrack-supabase-anon-key') || '';

  urlInput.value = savedUrl;
  keyInput.value = savedKey ? '••••••••••••••••••••' : '';
  if (!savedKey) keyInput.value = '';
  
  updateAIDiagConfig();
  
  // Run a quick silent connection check automatically
  runAIDiagnostics(true); 
}

function saveAIDiagConfig() {
  const url = $('ai-diag-url').value.trim();
  let key = $('ai-diag-key').value.trim();

  if (!url) {
    showToast("⚠️ Supabase URL is required!");
    return;
  }

  if (key === '••••••••••••••••••••') {
    key = localStorage.getItem('farmtrack-supabase-anon-key') || '';
  }

  localStorage.setItem('farmtrack-supabase-url', url);
  localStorage.setItem('farmtrack-supabase-anon-key', key);

  if (typeof SUPABASE_URL !== 'undefined') {
    SUPABASE_URL = url;
    SUPABASE_ANON_KEY = key;
    if (typeof window.supabase !== 'undefined' && url && key) {
      supabase = window.supabase.createClient(url, key);
    }
  }

  showToast("💾 AI Credentials Saved!");
  runAIDiagnostics();
}

async function runAIDiagnostics(silent = false) {
  const badge = $('ai-connection-badge');
  const consoleEl = $('ai-diag-console');
  const guide = $('ai-setup-guide');
  const sub = $('ai-diag-sub');
  
  if (!badge) return;

  badge.textContent = "Checking...";
  badge.style.background = "var(--gray-200)";
  badge.style.color = "var(--gray-700)";
  sub.textContent = "Checking AI link...";
  
  if (!silent) {
    consoleEl.style.display = "block";
    consoleEl.innerHTML = "";
  }
  guide.style.display = "none";

  const logDiag = (msg, type = 'info') => {
    if (silent) return;
    const colors = { info: '#d4d4d4', success: '#4ec9b0', error: '#f44747', warn: '#dcdcaa' };
    const prefix = { info: '[INFO]', success: '[PASS]', error: '[FAIL]', warn: '[WARN]' };
    consoleEl.innerHTML += `<div style="color:${colors[type]}">${prefix[type]} ${msg}</div>`;
    consoleEl.scrollTop = consoleEl.scrollHeight;
  };

  logDiag("Starting AI Connection Diagnostics...", 'info');

  const url = localStorage.getItem('farmtrack-supabase-url') || '';
  const key = localStorage.getItem('farmtrack-supabase-anon-key') || '';

  if (!url) {
    logDiag("Supabase URL not configured in localStorage.", 'warn');
    badge.textContent = "Unconfigured";
    badge.style.background = "var(--amber-100)";
    badge.style.color = "var(--amber-800)";
    sub.textContent = "Please configure your Supabase URL & Anon Key.";
    return;
  }

  logDiag(`Supabase URL found: ${url}`, 'info');
  logDiag(`Supabase Anon Key length: ${key ? key.length : 0} chars`, 'info');

  const endpoint = `${url.replace(/\/+$/,'')}/functions/v1/ai-chat`;
  logDiag(`Target AI Endpoint: ${endpoint}`, 'info');

  logDiag("Sending verification preflight request (CORS test)...", 'info');
  try {
    const start = Date.now();
    const headers = { 'Content-Type': 'application/json' };
    if (key) {
      headers.apikey = key;
      headers.Authorization = `Bearer ${key}`;
    }
    
    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ prompt: 'DIAGNOSTICS_TEST' })
    });
    
    const latency = Date.now() - start;
    logDiag(`HTTP status returned: ${res.status} (${res.statusText}) in ${latency}ms`, 'info');

    if (res.status === 200) {
      logDiag("AI chatbot connected and responded successfully!", 'success');
      badge.textContent = "Connected";
      badge.style.background = "#e8f5e9";
      badge.style.color = "#2e7d32";
      sub.textContent = "AI chatbot is online and responding successfully.";
    } else if (res.status === 404) {
      logDiag("ERROR: Endpoint returned 404. The ai-chat function is not deployed on this Supabase project.", 'error');
      badge.textContent = "Not Deployed";
      badge.style.background = "#ffebee";
      badge.style.color = "#c62828";
      sub.textContent = "Edge Function missing. Setup guide displayed below.";
      
      let projRef = 'YOUR-REF';
      const match = url.match(/https:\/\/([a-z0-9]+)\.supabase\.(co|net|in)/);
      if (match && match[1]) {
        projRef = match[1];
      }
      
      document.querySelectorAll('.project-ref-holder').forEach(el => {
        el.textContent = projRef;
      });
      guide.style.display = "block";
    } else {
      const data = await res.json().catch(() => ({}));
      const errMsg = data.error || 'Unknown error occurred.';
      logDiag(`ERROR: Endpoint returned ${res.status}: ${errMsg}`, 'error');
      badge.textContent = "Link Error";
      badge.style.background = "#ffebee";
      badge.style.color = "#c62828";
      sub.textContent = `Server error: ${errMsg}`;
    }
  } catch (e) {
    logDiag(`CRITICAL: Connection failed: ${e.message}`, 'error');
    logDiag("Ensure the Supabase URL is correct and your internet connection is active.", 'info');
    badge.textContent = "Connection Failed";
    badge.style.background = "#ffebee";
    badge.style.color = "#c62828";
    sub.textContent = "Connection failed. Check console or internet.";
  }
}


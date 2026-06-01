// FarmTrack — role-based access (owner, manager, supervisor, foreman, worker)
const FARM_RANKS = {
  owner: { label: 'Farm Owner', level: 100 },
  admin: { label: 'Administrator', level: 100 },
  manager: { label: 'Manager', level: 90 },
  supervisor: { label: 'Supervisor', level: 70 },
  foreman: { label: 'Foreman', level: 50 },
  worker: { label: 'Field Worker', level: 10 },
  farmer: { label: 'Farmer', level: 80 },
};

const PAGE_ACCESS = {
  owner: '*',
  admin: '*',
  manager: ['dashboard', 'crops', 'fields', 'harvest', 'inputs', 'inventory', 'workers', 'tasks', 'weather', 'ai', 'sms', 'reports', 'export', 'market', 'traceability', 'profile', 'settings', 'about', 'admin'],
  farmer: ['dashboard', 'crops', 'fields', 'harvest', 'inputs', 'inventory', 'workers', 'tasks', 'weather', 'ai', 'sms', 'reports', 'export', 'market', 'traceability', 'profile', 'settings', 'about'],
  supervisor: ['dashboard', 'crops', 'fields', 'harvest', 'inputs', 'workers', 'tasks', 'weather', 'ai', 'profile', 'about'],
  foreman: ['dashboard', 'workers', 'tasks', 'weather', 'profile', 'about'],
  worker: ['dashboard', 'tasks', 'weather', 'profile', 'about'],
};

const ACTION_ACCESS = {
  owner: '*',
  admin: '*',
  manager: '*',
  farmer: ['crops', 'fields', 'harvest', 'inputs', 'workers', 'tasks', 'attendance', 'sms', 'reports', 'export', 'inventory'],
  supervisor: ['crops', 'fields', 'harvest', 'inputs', 'workers', 'tasks', 'attendance'],
  foreman: ['workers', 'tasks', 'attendance'],
  worker: ['tasks'],
};

function normalizeFarmRole(role) {
  const r = (role || 'worker').toLowerCase().trim();
  if (r === 'farm_owner') return 'owner';
  if (FARM_RANKS[r]) return r;
  return 'worker';
}

function getFarmRole() {
  if (window.userRole) return normalizeFarmRole(window.userRole);
  const demo = localStorage.getItem('farmtrack-demo-role');
  if (demo) return normalizeFarmRole(demo);
  return 'owner';
}

function canAccessPage(page) {
  const role = getFarmRole();
  const allowed = PAGE_ACCESS[role];
  if (!allowed) return role === 'owner' || role === 'manager';
  if (allowed === '*') return true;
  return allowed.includes(page);
}

function canDoAction(action) {
  const role = getFarmRole();
  const allowed = ACTION_ACCESS[role];
  if (!allowed) return ['dashboard', 'tasks', 'attendance'].includes(action);
  if (allowed === '*') return true;
  return allowed.includes(action);
}

function guardAction(action, message) {
  if (canDoAction(action)) return true;
  showToast(message || 'Your role cannot perform this action');
  return false;
}

function rankLabel(role) {
  const r = normalizeFarmRole(role);
  return (FARM_RANKS[r] && FARM_RANKS[r].label) || role;
}

function applyRoleSecurity() {
  const role = getFarmRole();
  window.userRole = role;

  const badge = document.getElementById('role-badge');
  if (badge) badge.textContent = rankLabel(role);

  const adminNav = document.getElementById('nav-admin');
  if (adminNav) adminNav.style.display = role === 'admin' ? 'flex' : 'none';

  document.querySelectorAll('.nav-item').forEach((nav) => {
    const m = (nav.getAttribute('onclick') || '').match(/showPage\('(\w+)'\)/);
    const page = m ? m[1] : '';
    if (page && !canAccessPage(page)) nav.style.display = 'none';
    else nav.style.display = '';
  });

  const teamCard = document.getElementById('team-access-card');
  if (teamCard) {
    teamCard.style.display = ['owner', 'manager', 'admin', 'farmer'].includes(role) ? 'block' : 'none';
  }

  const kpiRev = document.getElementById('s-revenue');
  if (kpiRev) {
    const card = kpiRev.closest('.kpi-card') || kpiRev.closest('.stat-card');
    if (card) card.style.display = canAccessPage('reports') ? '' : 'none';
  }

  if (!canDoAction('reports')) {
    document.querySelectorAll('.btn-ghost').forEach((b) => {
      if (b.textContent.includes('Slip') || b.textContent.includes('Advance')) b.style.display = 'none';
    });
  }

  const assignUi = document.querySelectorAll('[data-requires-rank]');
  assignUi.forEach((el) => {
    const need = el.getAttribute('data-requires-rank') || 'manager';
    const needLevel = (FARM_RANKS[normalizeFarmRole(need)] || { level: 50 }).level;
    const myLevel = (FARM_RANKS[role] || { level: 0 }).level;
    el.style.display = myLevel >= needLevel ? '' : 'none';
  });
}

window.getFarmRole = getFarmRole;
window.canAccessPage = canAccessPage;
window.canDoAction = canDoAction;
window.guardAction = guardAction;
window.rankLabel = rankLabel;
function setDemoRole(role) {
  const r = normalizeFarmRole(role);
  localStorage.setItem('farmtrack-demo-role', r);
  window.userRole = r;
  applyRoleSecurity();
  if (typeof showToast === 'function') showToast(`Viewing as ${rankLabel(r)}`);
}

window.setDemoRole = setDemoRole;
window.applyRoleSecurity = applyRoleSecurity;
window.FARM_RANKS = FARM_RANKS;

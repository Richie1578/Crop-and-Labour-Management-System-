// Quick inline edits — tap to change status without new records

function persistFarmData() {
  try {
    localStorage.setItem('farmtrack-data', JSON.stringify(db));
    localStorage.setItem('farmtrack-data-meta', JSON.stringify({ updatedAt: Date.now() }));
  } catch (_) { /* quota */ }
}

if (typeof window.saveDataToStorage !== 'function') {
  window.saveDataToStorage = persistFarmData;
}

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function upsertTodayAttendance(workerName, status, hours) {
  const date = todayISO();
  let row = db.attendance.find((a) => a.worker === workerName && a.date === date);
  if (!row) {
    row = { id: Date.now() + Math.random(), worker: workerName, date, hours: hours ?? (status === 'Absent' ? 0 : 8), task: '—', status };
    db.attendance.unshift(row);
  } else {
    row.status = status;
    if (hours !== undefined) row.hours = hours;
  }
  persistFarmData();
  if (typeof renderWorkers === 'function') renderWorkers();
  if (typeof renderDashboard === 'function') renderDashboard();
}

function quickMarkWorker(workerName, status) {
  if (!guardAction('attendance', 'Only supervisor and above can mark attendance')) return;
  upsertTodayAttendance(workerName, status);
  showToast(`${workerName} marked ${status} for today`);
}

function cycleAttendanceStatus(id) {
  if (!guardAction('attendance', 'Only supervisor and above can change attendance')) return;
  const row = db.attendance.find((a) => a.id === id);
  if (!row) return;
  const order = ['Present', 'Half Day', 'Absent'];
  const i = order.indexOf(row.status);
  row.status = order[(i + 1) % order.length];
  if (row.status === 'Absent') row.hours = 0;
  else if (row.hours === 0) row.hours = 8;
  persistFarmData();
  if (typeof renderWorkers === 'function') renderWorkers();
  if (typeof renderDashboard === 'function') renderDashboard();
  showToast(`${row.worker} → ${row.status}`);
}

function openEditWorker(id) {
  const w = db.workers.find((x) => x.id === id);
  if (!w) return;
  openModal('modal-worker');
  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.value = val ?? ''; };
  set('w-name', w.name);
  set('w-role', w.role);
  set('w-rate', w.rate);
  set('w-phone', w.phone);
  set('w-start', w.start);
  window._editingWorkerId = id;
}

async function saveWorker() {
  const n = document.getElementById('w-name')?.value?.trim();
  if (!n) { showToast('Enter worker name'); return; }
  if (!guardAction('workers', 'Only manager and above can save workers')) return;

  const record = {
    name: n,
    role: document.getElementById('w-role')?.value || 'General Labour',
    rate: +(document.getElementById('w-rate')?.value) || 0,
    phone: document.getElementById('w-phone')?.value || '',
    start: document.getElementById('w-start')?.value || todayISO(),
    days: 0,
    accessRole: document.getElementById('w-access-role')?.value || 'worker',
  };

  const editId = window._editingWorkerId;
  if (editId) {
    const w = db.workers.find((x) => x.id === editId);
    if (w) Object.assign(w, record);
    window._editingWorkerId = null;
    showToast('Worker updated');
  } else {
    const { error } = await db_layer.insertData('workers', record);
    if (error) { showToast(error.message); return; }
    db.workers.unshift({ id: Date.now(), ...record });
    showToast('Worker added');
  }
  closeModal('modal-worker');
  renderWorkers();
  renderDashboard();
  persistFarmData();
}

function openEditTask(id) {
  const t = db.tasks.find((x) => x.id === id);
  if (!t) return;
  openModal('modal-task');
  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.value = val ?? ''; };
  set('t-name', t.name);
  set('t-due', t.due);
  set('t-priority', t.priority);
  set('t-status', t.status);
  set('t-desc', t.desc);
  populateSelects();
  set('t-field', t.field);
  set('t-worker', t.worker);
  window._editingTaskId = id;
}

function toggleTaskComplete(id) {
  const t = db.tasks.find((x) => x.id === id);
  if (!t) return;
  if (t.status === 'Completed') {
    if (!guardAction('tasks', 'Cannot reopen tasks')) return;
    t.status = 'Pending';
  } else {
    if (!guardAction('tasks', 'Cannot complete tasks')) return;
    t.status = 'Completed';
  }
  persistFarmData();
  if (typeof renderTasks === 'function') renderTasks();
  if (typeof renderDashboard === 'function') renderDashboard();
  showToast(t.status === 'Completed' ? 'Task completed' : 'Task reopened');
}

function setWorkerAccessRole(workerId, accessRole) {
  if (!guardAction('workers', 'Only manager can assign access ranks')) return;
  const w = db.workers.find((x) => x.id === workerId);
  if (!w) return;
  w.accessRole = accessRole;
  persistFarmData();
  showToast(`${w.name} access: ${rankLabel(accessRole)}`);
  renderWorkers();
}

function cycleWorkerToday(workerName) {
  if (!guardAction('attendance', 'Only supervisor and above can mark attendance')) return;
  const date = todayISO();
  let row = db.attendance.find((a) => a.worker === workerName && a.date === date);
  if (!row) {
    upsertTodayAttendance(workerName, 'Present');
    showToast(`${workerName} marked Present for today`);
    return;
  }
  cycleAttendanceStatus(row.id);
}

window.cycleWorkerToday = cycleWorkerToday;
window.quickMarkWorker = quickMarkWorker;
window.cycleAttendanceStatus = cycleAttendanceStatus;
window.openEditWorker = openEditWorker;
window.openEditTask = openEditTask;
window.toggleTaskComplete = toggleTaskComplete;
window.setWorkerAccessRole = setWorkerAccessRole;

const _farmSaveTask = window.saveTask;
window.saveTask = async function () {
  const editId = window._editingTaskId;
  const n = document.getElementById('t-name')?.value?.trim();
  if (!n) {
    showToast('Enter task name');
    return;
  }
  if (!guardAction('tasks', 'Cannot save tasks for your role')) return;

  const patch = {
    name: n,
    field: document.getElementById('t-field')?.value || '',
    worker: document.getElementById('t-worker')?.value || '',
    due: document.getElementById('t-due')?.value || todayISO(),
    priority: document.getElementById('t-priority')?.value || 'Medium',
    status: document.getElementById('t-status')?.value || 'Pending',
    desc: document.getElementById('t-desc')?.value || '',
  };

  if (editId) {
    const t = db.tasks.find((x) => x.id === editId);
    if (t) Object.assign(t, patch);
    window._editingTaskId = null;
    closeModal('modal-task');
    if (typeof renderTasks === 'function') renderTasks();
    if (typeof renderDashboard === 'function') renderDashboard();
    persistFarmData();
    showToast('Task updated');
    return;
  }

  if (typeof _farmSaveTask === 'function') return _farmSaveTask();
};

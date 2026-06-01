// FarmTrack landing page — loader, scene, slideshow, weather

function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
}

function setLandingVisible(on) {
  document.body.classList.toggle('landing-visible', on);
}

function initLandingScene() {
  const row = document.getElementById('wheatRow');
  if (row && !row.dataset.built) {
    row.dataset.built = '1';
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('div');
      s.className = 'stalk';
      const h = 40 + Math.random() * 50;
      const sw = 2 + Math.random() * 3;
      const sd = (Math.random() * 2).toFixed(2);
      s.style = `--sw:${sw}s;--sd:${sd}s;`;
      s.innerHTML = `<div class="stalk-head"></div><div class="stalk-body" style="height:${h}px"></div>`;
      row.appendChild(s);
    }
  }

  const clouds = [
    { top: 70, cw: 220, dur: 60, del: -5 },
    { top: 110, cw: 160, dur: 80, del: -28 },
    { top: 55, cw: 280, dur: 75, del: -55 },
    { top: 140, cw: 120, dur: 50, del: -15 },
    { top: 80, cw: 180, dur: 90, del: -40 },
  ];
  const cc = document.getElementById('cloudContainer');
  if (cc && !cc.dataset.built) {
    cc.dataset.built = '1';
    clouds.forEach((c) => {
      const wrap = document.createElement('div');
      wrap.className = 'cloud-wrap';
      wrap.style = `top:${c.top}px;--cdur:${c.dur}s;--cdel:${c.del}s`;
      wrap.innerHTML = `<div class="cloud-body" style="--cw:${c.cw}px;width:${c.cw}px;height:${c.cw * 0.55}px">
        <div class="cb main"></div><div class="cb b1"></div><div class="cb b2"></div><div class="cb b3"></div><div class="cb shine"></div>
      </div>`;
      cc.appendChild(wrap);
    });
  }

  const flock = document.getElementById('birdFlock');
  if (flock && !flock.dataset.built) {
    flock.dataset.built = '1';
    const birdGroups = [
      { top: 18, birds: 4, startX: 15, gap: 28, dur: 18, del: -3 },
      { top: 12, birds: 3, startX: 55, gap: 22, dur: 25, del: -10 },
      { top: 22, birds: 5, startX: 5, gap: 20, dur: 22, del: -6 },
    ];
    birdGroups.forEach((g) => {
      const group = document.createElement('div');
      group.style = `position:absolute;top:${g.top}%;animation:drift ${g.dur}s ${g.del}s linear infinite`;
      [...Array(g.birds)].forEach((_, i) => {
        const b = document.createElement('div');
        b.className = 'bird';
        b.style = `left:${g.startX + i * g.gap}px;--bdur:${(0.8 + Math.random() * 0.4).toFixed(2)}s;--bdel:${(i * 0.15).toFixed(2)}s`;
        b.innerHTML = `<svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M0 4 Q3.5 0 7 4 Q10.5 0 14 4" stroke="rgba(245,237,216,0.55)" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`;
        group.appendChild(b);
      });
      flock.appendChild(group);
    });
  }

  const flies = document.getElementById('flies');
  if (flies && !flies.dataset.built) {
    flies.dataset.built = '1';
    for (let i = 0; i < 22; i++) {
      const f = document.createElement('div');
      f.className = 'fly';
      const x = Math.random() * 100;
      const y = Math.random() * 70;
      const tx = (Math.random() - 0.5) * 80;
      const ty = (Math.random() - 0.5) * 60;
      const dur = (4 + Math.random() * 6).toFixed(1);
      const del = (Math.random() * 8).toFixed(1);
      f.style = `left:${x}%;top:${y}%;--dur:${dur}s;--del:${del}s;--tx:${tx}px;--ty:${ty}px`;
      flies.appendChild(f);
    }
  }

  initSlideShow();
}

function initSlideShow() {
  const captions = [
    'Golden Wheat Fields · Sunrise',
    'Green Crop Rows · Aerial View',
    'Open Farmland · Morning Mist',
    'Maize Harvest · Midday',
    'Wildflower Meadow · Dusk',
  ];
  const slides = document.querySelectorAll('.bg-slide');
  const dotsEl = document.getElementById('slideDots');
  const capEl = document.getElementById('bgCaption');
  if (!slides.length || !dotsEl || dotsEl.dataset.built) return;
  dotsEl.dataset.built = '1';

  let current = 0;
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dotsEl.appendChild(d);
  });

  function goTo(idx) {
    slides[current].classList.remove('active');
    dotsEl.children[current].classList.remove('active');
    current = ((idx % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsEl.children[current].classList.add('active');
    if (capEl) {
      capEl.style.opacity = '0';
      setTimeout(() => {
        capEl.textContent = captions[current];
        capEl.style.opacity = '1';
      }, 700);
    }
  }

  slides.forEach((s) => {
    const url = s.style.backgroundImage.replace(/url\(['"]?|['"]?\)/g, '');
    if (url) new Image().src = url;
  });

  setInterval(() => goTo(current + 1), 7000);
  setTimeout(() => {
    if (capEl) {
      capEl.textContent = captions[0];
      capEl.style.opacity = '1';
    }
  }, 4000);
}

function wxIconFor(code) {
  if (code === 0) return '☀️';
  if (code <= 2) return '🌤';
  if (code <= 3) return '☁️';
  if (code <= 48) return '🌫';
  if (code <= 67) return '🌧';
  if (code <= 77) return '🌨';
  if (code <= 82) return '🌦';
  return '⛈';
}

function wxDesc(code) {
  if (code === 0) return 'Clear Sky';
  if (code <= 2) return 'Partly Cloudy';
  if (code <= 3) return 'Overcast';
  if (code <= 48) return 'Foggy';
  if (code <= 67) return 'Rainy';
  if (code <= 77) return 'Snowy';
  if (code <= 82) return 'Showers';
  return 'Thunderstorm';
}

async function loadLandingWeather() {
  const w = document.getElementById('weatherWidget');
  if (!w) return;
  try {
    const pos = await new Promise((res, rej) =>
      navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 })
    );
    const { latitude: lat, longitude: lon } = pos.coords;
    const geoR = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const geoD = await geoR.json();
    const city =
      geoD.address?.city ||
      geoD.address?.town ||
      geoD.address?.village ||
      'Your Farm';
    const wxR = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,uv_index&wind_speed_unit=kmh`
    );
    const wxD = await wxR.json();
    const cur = wxD.current;
    document.getElementById('wxIcon').textContent = wxIconFor(cur.weather_code);
    document.getElementById('wxTemp').textContent = Math.round(cur.temperature_2m) + '°C';
    document.getElementById('wxDesc').textContent = wxDesc(cur.weather_code);
    document.getElementById('wxHumid').textContent = cur.relative_humidity_2m + '%';
    document.getElementById('wxWind').textContent = Math.round(cur.wind_speed_10m) + ' km/h';
    document.getElementById('wxUV').textContent = cur.uv_index ?? '—';
    document.getElementById('wxCity').textContent = city;
  } catch {
    document.getElementById('wxIcon').textContent = '☀️';
    document.getElementById('wxTemp').textContent = '28°C';
    document.getElementById('wxDesc').textContent = 'Sunny';
    document.getElementById('wxHumid').textContent = '62%';
    document.getElementById('wxWind').textContent = '14 km/h';
    document.getElementById('wxUV').textContent = '8';
    document.getElementById('wxCity').textContent = 'Lusaka, ZM';
  }
  w.classList.add('ready');
}

function toggleLang() {
  const dd = document.getElementById('langDropdown');
  const ch = document.getElementById('langChev');
  if (dd) dd.classList.toggle('open');
  if (ch) ch.classList.toggle('open');
}

function setLandingLang(code, label, flag, btnEl) {
  if (typeof setLang === 'function') setLang(code);
  const langLabel = document.getElementById('langLabel');
  const langFlag = document.getElementById('langFlag');
  if (langLabel) langLabel.textContent = label;
  if (langFlag) langFlag.textContent = flag;
  document.querySelectorAll('.lang-opt').forEach((o) => o.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  toggleLang();
}

function switchAuthTab(tab) {
  const lT = document.getElementById('loginTab');
  const sT = document.getElementById('signupTab');
  const lP = document.getElementById('loginPanel');
  const sP = document.getElementById('signupPanel');
  const wrap = document.getElementById('panelWrap');
  if (!lP || !sP) return;

  if (tab === 'signup') {
    lP.classList.remove('active');
    lP.classList.add('exit-left');
    setTimeout(() => lP.classList.remove('exit-left'), 450);
    sP.classList.add('active');
    lT?.classList.remove('active');
    sT?.classList.add('active');
    if (wrap) wrap.style.minHeight = sP.scrollHeight + 'px';
  } else {
    sP.classList.remove('active');
    lP.classList.add('active');
    sT?.classList.remove('active');
    lT?.classList.add('active');
    if (wrap) wrap.style.minHeight = '';
  }
}

function togglePw(id) {
  const inp = document.getElementById(id);
  if (inp) inp.type = inp.type === 'text' ? 'password' : 'text';
}

document.addEventListener('click', (e) => {
  const sel = document.getElementById('langSelector');
  if (sel && !sel.contains(e.target)) {
    document.getElementById('langDropdown')?.classList.remove('open');
    document.getElementById('langChev')?.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initLandingScene();
  setTimeout(loadLandingWeather, 3800);
  window.addEventListener('load', () => setTimeout(hideLoader, 3400));
  setTimeout(hideLoader, 5000);
});

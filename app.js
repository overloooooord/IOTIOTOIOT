// ═══ i18n TRANSLATIONS ═══
const T = {
  ru: {
    nav_about:"О проекте", nav_how:"Как работает", nav_benefits:"Преимущества",
    nav_blog:"Блог", nav_news:"Новости", nav_investors:"Инвесторы", nav_contacts:"Контакты", nav_order:"Заказать",
    hero_title:'Управляй стадом с помощью <span>искусственного интеллекта</span>',
    hero_desc:"SteppeAI использует IoT-тэг на лидере стада и AI, чтобы контролировать движение, здоровье и безопасность животных — без пастуха и без физического забора.",
    badge1:"Управляет через лидера", badge2:"AI-забор на карте", badge3:"Анализ аномалий", badge4:"Уведомления в Telegram",
    hero_cta:"Подробнее о продукте ↓",
    hero_panel:"🛰 Панель SteppeAI", stat_heads:"Голов", stat_zone:"В зоне", stat_mon:"Мониторинг",
    about_label:"О ПРОЕКТЕ", about_title:"Один тэг — полный контроль стада",
    about_sub:"SteppeAI — AI-платформа, которая управляет стадом через лидера, контролирует движение через виртуальные границы и мгновенно оповещает фермера.",
    about_h1:"Один тэг вместо сотни трекеров", about_p1:"В каждом стаде есть лидер. SteppeAI отслеживает именно его — стадо следует за лидером.",
    about_h2:"AI-Fence на карте", about_p2:"Фермер рисует виртуальное пастбище на карте. Система создаёт «умный невидимый забор».",
    about_h3:"Поведение и безопасность", about_p3:"SteppeAI видит скорость, направление, остановки и аномалии. Мгновенные уведомления при проблемах.",
    how_label:"КАК РАБОТАЕТ", how_title:"От тэга до цифрового контроля", how_sub:"Система полностью закрывает задачу управления стадом за 4 шага.",
    step1_h:"Тэг на лидере", step1_p:"IoT-устройство крепится к лидеру стада (бык, баран, жеребец).",
    step2_h:"Отправка данных", step2_p:"Тэг передаёт координаты и поведение через LoRaWAN / NB-IoT / GPS.",
    step3_h:"AI-анализ", step3_p:"Алгоритмы анализируют движение, скорость, остановки и риск ухода.",
    step4_h:"Оповещения", step4_p:"При выходе за границы фермер получает уведомление и может реагировать.",
    ben_label:"ПРЕИМУЩЕСТВА", ben_title:"Экономит деньги, время и нервы", ben_sub:"SteppeAI даёт уверенность, что стадо под контролем.",
    ben1_h:"Экономия до 1 000 000 ₸", ben1_p:"Фермер с 100 головами экономит до 1 млн ₸ в год.",
    ben2_h:"Окупаемость < 1 месяца", ben2_p:"Один тэг + подписка. Проект окупается за один сезон.",
    ben3_h:"Цифровой пастух", ben3_p:"Система следит, контролирует границы, предупреждает уход.",
    ben4_h:"Работает 24/7", ben4_p:"В любую погоду, без усталости и человеческого фактора.",
    mvp_label:"🚀 MVP", mvp_title:"Минимально жизнеспособный продукт", mvp_sub:"Ключевые компоненты первой версии SteppeAI.",
    demo_title:"🐄 Попробуйте сами — интерактивная демо",
    demo_sub:"Нарисуйте загон на карте Алматы. Корова начнёт случайно бегать. Выйдет за границу — всё станет красным!",
    btn_draw:"✏️ Нарисовать загон", btn_clear:"🗑️ Очистить",
    demo_hint:"Нажмите «Нарисовать загон» чтобы начать",
    demo_drawing:"Кликайте по карте чтобы нарисовать загон. Завершите кликом на первую точку.",
    demo_running:"🐄 Корова пасётся в загоне", demo_alert:"⚠️ АЛЕРТ! Корова вышла за границу!",
    demo_back:"🐄 Корова вернулась в зону",
    stat_steps:"Шагов", stat_dist:"Метров", stat_alerts:"Алертов", stat_status:"Статус",
    in_zone:"✅ В зоне", out_zone:"⚠️ ВНЕ!",
    blog_label:"📰 БЛОГ", blog_title:"Наш путь и достижения", blog_sub:"Следите за развитием SteppeAI.",
    inv_label:"ИНВЕСТОРЫ И ПАРТНЁРЫ", inv_title:"Инвесторы и партнёры", inv_sub:"Мы открыты для стратегических партнёрств и инвестиций.",
    cont_label:"КОНТАКТЫ", cont_title:"Свяжитесь с нами", cont_sub:"Оставьте заявку — мы обсудим пилот и условия.",
    tl_idea:"Идея", tl_proto:"Прототип", tl_pilot:"Пилот", tl_scale:"Масштаб",
    news_label:"📡 НОВОСТИ АГРОСЕКТОРА", news_title:"Новости агросектора Казахстана", news_sub:"Актуальные события, тренды и аналитика в сфере животноводства и AgriTech."
  },
  en: {
    nav_about:"About", nav_how:"How it works", nav_benefits:"Benefits",
    nav_blog:"Blog", nav_investors:"Investors", nav_contacts:"Contacts", nav_order:"Order",
    hero_title:'Manage your herd with <span>artificial intelligence</span>',
    hero_desc:"SteppeAI uses an IoT tag on the herd leader and AI to control movement, health and safety of animals — no shepherd, no physical fence.",
    badge1:"Controls via leader", badge2:"AI-fence on map", badge3:"Anomaly analysis", badge4:"Telegram alerts",
    hero_cta:"Learn more ↓",
    hero_panel:"🛰 SteppeAI Panel", stat_heads:"Heads", stat_zone:"In zone", stat_mon:"Monitoring",
    about_label:"ABOUT", about_title:"One tag — full herd control",
    about_sub:"SteppeAI is an AI platform that manages the herd through the leader, controls movement via virtual boundaries and instantly alerts the farmer.",
    about_h1:"One tag instead of 100 trackers", about_p1:"Every herd has a leader. SteppeAI tracks exactly that — the herd follows the leader.",
    about_h2:"AI-Fence on map", about_p2:"The farmer draws a virtual pasture on the map. The system creates a 'smart invisible fence'.",
    about_h3:"Behavior & safety", about_p3:"SteppeAI sees speed, direction, stops and anomalies. Instant alerts on problems.",
    how_label:"HOW IT WORKS", how_title:"From tag to digital control", how_sub:"The system fully covers herd management in 4 steps.",
    step1_h:"Tag on leader", step1_p:"IoT device is attached to the herd leader (bull, ram, stallion).",
    step2_h:"Data transmission", step2_p:"Tag sends coordinates and behavior via LoRaWAN / NB-IoT / GPS.",
    step3_h:"AI analysis", step3_p:"Algorithms analyze movement, speed, stops and escape risk.",
    step4_h:"Alerts", step4_p:"When crossing boundaries the farmer gets a notification and can react.",
    ben_label:"BENEFITS", ben_title:"Saves money, time and nerves", ben_sub:"SteppeAI gives confidence that the herd is under control.",
    ben1_h:"Saves up to 1,000,000 ₸", ben1_p:"A farmer with 100 heads saves up to 1M ₸ per year.",
    ben2_h:"ROI < 1 month", ben2_p:"One tag + subscription. Pays off in one season.",
    ben3_h:"Digital shepherd", ben3_p:"The system monitors, controls boundaries, prevents escape.",
    ben4_h:"Works 24/7", ben4_p:"In any weather, without fatigue or human error.",
    mvp_label:"🚀 MVP", mvp_title:"Minimum Viable Product", mvp_sub:"Key components of the first version of SteppeAI.",
    demo_title:"🐄 Try it yourself — interactive demo",
    demo_sub:"Draw a fence on the Almaty map. The cow will randomly roam. Goes outside — everything turns red!",
    btn_draw:"✏️ Draw fence", btn_clear:"🗑️ Clear",
    demo_hint:"Click 'Draw fence' to start",
    demo_drawing:"Click on the map to draw a fence. Finish by clicking the first point.",
    demo_running:"🐄 Cow is grazing in the pen", demo_alert:"⚠️ ALERT! Cow left the fence!",
    demo_back:"🐄 Cow returned to zone",
    stat_steps:"Steps", stat_dist:"Meters", stat_alerts:"Alerts", stat_status:"Status",
    in_zone:"✅ In zone", out_zone:"⚠️ OUT!",
    blog_label:"📰 BLOG", blog_title:"Our journey and achievements", blog_sub:"Follow SteppeAI's progress.",
    inv_label:"INVESTORS & PARTNERS", inv_title:"Investors & Partners", inv_sub:"We are open for strategic partnerships and investments.",
    cont_label:"CONTACTS", cont_title:"Contact us", cont_sub:"Leave a request — we'll discuss a pilot and terms.",
    tl_idea:"Idea", tl_proto:"Prototype", tl_pilot:"Pilot", tl_scale:"Scale",
    news_label:"📡 AGRI NEWS", news_title:"Agricultural sector news", news_sub:"Events, trends and analytics in livestock and AgriTech."
  },
  kz: {
    nav_about:"Жоба туралы", nav_how:"Қалай жұмыс істейді", nav_benefits:"Артықшылықтар",
    nav_blog:"Блог", nav_investors:"Инвесторлар", nav_contacts:"Байланыс", nav_order:"Тапсырыс беру",
    hero_title:'Табынды <span>жасанды интеллект</span> арқылы басқарыңыз',
    hero_desc:"SteppeAI табын лидеріне IoT-тэг орнатып, AI арқылы жануарлардың қозғалысын, денсаулығын және қауіпсіздігін бақылайды — бағушысыз, қоршаусыз.",
    badge1:"Лидер арқылы басқарады", badge2:"AI-қоршау картада", badge3:"Аномалия талдау", badge4:"Telegram хабарламалар",
    hero_cta:"Толығырақ ↓",
    hero_panel:"🛰 SteppeAI Панелі", stat_heads:"Бас", stat_zone:"Аймақта", stat_mon:"Мониторинг",
    about_label:"ЖОБА ТУРАЛЫ", about_title:"Бір тэг — толық табын бақылау",
    about_sub:"SteppeAI — табынды лидер арқылы басқаратын, виртуалды шекаралар арқылы қозғалысты бақылайтын және фермерді лезде хабардар ететін AI-платформа.",
    about_h1:"Жүздеген трекердің орнына бір тэг", about_p1:"Әр табында лидер бар. SteppeAI дәл соны бақылайды — табын лидерді ұстанады.",
    about_h2:"Картадағы AI-Fence", about_p2:"Фермер картада виртуалды жайылым сызады. Жүйе «ақылды көрінбейтін қоршау» жасайды.",
    about_h3:"Мінез-құлық және қауіпсіздік", about_p3:"SteppeAI жылдамдықты, бағытты, тоқтаулар мен аномалияларды көреді.",
    how_label:"ҚАЛАЙ ЖҰМЫС ІСТЕЙДІ", how_title:"Тэгтен цифрлық бақылауға дейін", how_sub:"Жүйе табынды басқару міндетін 4 қадаммен шешеді.",
    step1_h:"Лидерге тэг", step1_p:"IoT-құрылғы табын лидеріне бекітіледі.",
    step2_h:"Деректер жіберу", step2_p:"Тэг координаталарды LoRaWAN / NB-IoT / GPS арқылы жібереді.",
    step3_h:"AI-талдау", step3_p:"Алгоритмдер қозғалысты, жылдамдықты, тоқтауларды талдайды.",
    step4_h:"Хабарландырулар", step4_p:"Шекарадан шыққанда фермер хабарлама алады.",
    ben_label:"АРТЫҚШЫЛЫҚТАР", ben_title:"Ақша, уақыт және жүйкені үнемдейді", ben_sub:"SteppeAI табынның бақылауда екеніне сенімділік береді.",
    ben1_h:"1 000 000 ₸ дейін үнемдеу", ben1_p:"100 бас фермер жылына 1 млн ₸ дейін үнемдейді.",
    ben2_h:"Өтелу < 1 ай", ben2_p:"Бір тэг + жазылым. Бір маусымда өтеледі.",
    ben3_h:"Цифрлық бағушы", ben3_p:"Жүйе бақылайды, шекараларды бақылайды, кетуді болдырмайды.",
    ben4_h:"24/7 жұмыс істейді", ben4_p:"Кез келген ауа-райында, шаршамай.",
    mvp_label:"🚀 MVP", mvp_title:"Минималды өміршең өнім", mvp_sub:"SteppeAI бірінші нұсқасының негізгі компоненттері.",
    demo_title:"🐄 Өзіңіз көріңіз — интерактивті демо",
    demo_sub:"Алматы картасында қоршау сызыңыз. Сиыр кездейсоқ жүгіреді. Шекарадан шықса — бәрі қызыл болады!",
    btn_draw:"✏️ Қоршау сызу", btn_clear:"🗑️ Тазалау",
    demo_hint:"Бастау үшін «Қоршау сызу» басыңыз",
    demo_drawing:"Қоршау сызу үшін картаны басыңыз. Бірінші нүктені басып аяқтаңыз.",
    demo_running:"🐄 Сиыр қоршауда жайылуда", demo_alert:"⚠️ ЕСКЕРТУ! Сиыр шекарадан шықты!",
    demo_back:"🐄 Сиыр аймаққа оралды",
    stat_steps:"Қадам", stat_dist:"Метр", stat_alerts:"Ескерту", stat_status:"Мәртебе",
    in_zone:"✅ Аймақта", out_zone:"⚠️ СЫРТТА!",
    blog_label:"📰 БЛОГ", blog_title:"Біздің жол және жетістіктер", blog_sub:"SteppeAI дамуын бақылаңыз.",
    inv_label:"ИНВЕСТОРЛАР ЖӘНЕ СЕРІКТЕСТЕР", inv_title:"Инвесторлар және серіктестер", inv_sub:"Стратегиялық серіктестік пен инвестициялар үшін ашықпыз.",
    cont_label:"БАЙЛАНЫС", cont_title:"Бізбен байланысыңыз", cont_sub:"Сұраныс қалдырыңыз — пилот пен шарттарды талқылаймыз.",
    tl_idea:"Идея", tl_proto:"Прототип", tl_pilot:"Пилот", tl_scale:"Масштаб",
    news_label:"📡 АГРОСЕКТОР ЖАҢАЛЫҚТАРЫ", news_title:"Қазақстан агросектор жаңалықтары", news_sub:"Мал шаруашылық және AgriTech саласындағы оқиғалар, трендтер мен талдау."
  }
};

let currentLang = 'ru';

function applyLang(lang) {
  currentLang = lang;
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (key === 'hero_title') el.innerHTML = t[key];
      else el.textContent = t[key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => applyLang(b.dataset.lang));
});

// ═══ INTERACTIVE COW DEMO ═══
(function(){
  const map = L.map('demoMap').setView([43.238, 76.945], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  let fence = null, cowMarker = null, cowInterval = null, trail = null;
  let steps = 0, totalDist = 0, alerts = 0, prevPos = null;
  let isDrawing = false;
  let polyCoords = [];

  // Cow icon — bigger, more visible
  function makeCowIcon(color) {
    return L.divIcon({
      html: '<div style="font-size:36px;line-height:1;filter:drop-shadow(0 2px 6px '+color+')">🐄</div>',
      iconSize: [40, 40], iconAnchor: [20, 20], className: ''
    });
  }
  const greenCow = makeCowIcon('rgba(34,197,94,0.7)');
  const redCow = makeCowIcon('rgba(239,68,68,0.7)');

  const btnDraw = document.getElementById('btnDraw');
  const btnClear = document.getElementById('btnClear');
  const statusEl = document.getElementById('demoStatus');
  const mapBorder = document.getElementById('demoMap');

  function pointInPoly(pt, poly) {
    let x = pt[0], y = pt[1], inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      let xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }

  function haversine(a, b) {
    const R = 6371000, dLat = (b[0]-a[0])*Math.PI/180, dLon = (b[1]-a[1])*Math.PI/180;
    const s = Math.sin(dLat/2)**2 + Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1-s));
  }

  function getBounds(poly) {
    let minLat=90, maxLat=-90, minLng=180, maxLng=-180;
    poly.forEach(p => {
      if(p[0]<minLat) minLat=p[0]; if(p[0]>maxLat) maxLat=p[0];
      if(p[1]<minLng) minLng=p[1]; if(p[1]>maxLng) maxLng=p[1];
    });
    return { minLat, maxLat, minLng, maxLng };
  }

  function randInPoly(poly) {
    const b = getBounds(poly);
    for(let i=0; i<1000; i++){
      const lat = b.minLat + Math.random()*(b.maxLat-b.minLat);
      const lng = b.minLng + Math.random()*(b.maxLng-b.minLng);
      if(pointInPoly([lat,lng], poly)) return [lat, lng];
    }
    const cx = poly.reduce((s,p)=>s+p[0],0)/poly.length;
    const cy = poly.reduce((s,p)=>s+p[1],0)/poly.length;
    return [cx, cy];
  }

  function setGreenState() {
    const t = T[currentLang];
    statusEl.textContent = t.demo_running;
    statusEl.style.color = '#4ade80';
    statusEl.style.background = 'rgba(34,197,94,0.1)';
    statusEl.style.borderColor = 'rgba(34,197,94,0.3)';
    mapBorder.style.borderColor = 'rgba(34,197,94,0.5)';
    if(fence) fence.setStyle({color:'#22c55e', fillColor:'#22c55e', fillOpacity:0.12});
    if(cowMarker) cowMarker.setIcon(greenCow);
    document.querySelectorAll('.demo-stat').forEach(s => s.style.borderColor='rgba(34,197,94,0.3)');
  }

  function setRedState() {
    const t = T[currentLang];
    statusEl.textContent = t.demo_alert;
    statusEl.style.color = '#f87171';
    statusEl.style.background = 'rgba(239,68,68,0.15)';
    statusEl.style.borderColor = 'rgba(239,68,68,0.5)';
    mapBorder.style.borderColor = 'rgba(239,68,68,0.6)';
    if(fence) fence.setStyle({color:'#ef4444', fillColor:'#ef4444', fillOpacity:0.15});
    if(cowMarker) cowMarker.setIcon(redCow);
    document.querySelectorAll('.demo-stat').forEach(s => s.style.borderColor='rgba(239,68,68,0.4)');
  }

  function updateStats(inZone) {
    const t = T[currentLang];
    document.getElementById('statSteps').textContent = steps;
    document.getElementById('statDist').textContent = Math.round(totalDist);
    document.getElementById('statAlerts').textContent = alerts;
    const s = document.getElementById('statStatus');
    if(inZone) { s.textContent = t.in_zone; s.style.color = '#4ade80'; }
    else { s.textContent = t.out_zone; s.style.color = '#f87171'; }
  }

  function startCow() {
    if(cowInterval) clearInterval(cowInterval);
    steps=0; totalDist=0; alerts=0; prevPos=null;

    let pos = randInPoly(polyCoords);
    cowMarker = L.marker(pos, {icon: greenCow}).addTo(map);
    prevPos = pos;
    setGreenState();

    trail = L.polyline([], {color:'#3AA7E1', weight:2, opacity:0.5, dashArray:'4 6'}).addTo(map);

    cowInterval = setInterval(() => {
      const b = getBounds(polyCoords);
      const stepSize = (b.maxLat - b.minLat) * 0.06;
      let newLat = pos[0] + (Math.random()-0.5) * stepSize * 2;
      let newLng = pos[1] + (Math.random()-0.5) * stepSize * 2;

      // 8% chance to escape after 8 steps
      if(steps > 8 && Math.random() < 0.08) {
        newLat += (Math.random()-0.5) * stepSize * 6;
        newLng += (Math.random()-0.5) * stepSize * 6;
      }

      pos = [newLat, newLng];
      cowMarker.setLatLng(pos);
      trail.addLatLng(pos);
      steps++;
      totalDist += haversine(prevPos, pos);
      prevPos = pos;

      const inZone = pointInPoly(pos, polyCoords);
      if(!inZone) {
        alerts++;
        setRedState();
      } else {
        setGreenState();
      }
      updateStats(inZone);
    }, 900);
  }

  // Draw button
  let drawHandler = null;
  btnDraw.addEventListener('click', () => {
    if(isDrawing) return;
    isDrawing = true;
    btnDraw.disabled = true;
    const t = T[currentLang];
    statusEl.textContent = t.demo_drawing;
    statusEl.style.color = '#facc15';
    statusEl.style.background = 'rgba(250,204,21,0.1)';
    statusEl.style.borderColor = 'rgba(250,204,21,0.3)';
    mapBorder.style.borderColor = 'rgba(250,204,21,0.5)';
    drawHandler = new L.Draw.Polygon(map, {
      shapeOptions: {color:'#3AA7E1', fillColor:'#3AA7E1', fillOpacity:0.1, weight:3}
    });
    drawHandler.enable();
  });

  map.on(L.Draw.Event.CREATED, function(e) {
    isDrawing = false;
    btnDraw.disabled = false;
    btnClear.disabled = false;
    // Clean up previous
    drawnItems.clearLayers();
    if(cowMarker) { map.removeLayer(cowMarker); cowMarker = null; }
    if(cowInterval) { clearInterval(cowInterval); cowInterval = null; }
    if(trail) { map.removeLayer(trail); trail = null; }

    fence = e.layer;
    drawnItems.addLayer(fence);
    polyCoords = fence.getLatLngs()[0].map(ll => [ll.lat, ll.lng]);
    map.fitBounds(fence.getBounds().pad(0.3));
    startCow();
  });

  // Clear button
  btnClear.addEventListener('click', () => {
    drawnItems.clearLayers();
    fence = null;
    polyCoords = [];
    if(cowMarker) { map.removeLayer(cowMarker); cowMarker = null; }
    if(cowInterval) { clearInterval(cowInterval); cowInterval = null; }
    if(trail) { map.removeLayer(trail); trail = null; }
    // Remove any leftover polylines
    map.eachLayer(l => { if(l instanceof L.Polyline && !(l instanceof L.Polygon)) map.removeLayer(l); });
    steps=0; totalDist=0; alerts=0;
    document.getElementById('statSteps').textContent = '0';
    document.getElementById('statDist').textContent = '0';
    document.getElementById('statAlerts').textContent = '0';
    const ss = document.getElementById('statStatus');
    ss.textContent = '—'; ss.style.color = '';
    const t = T[currentLang];
    statusEl.textContent = t.demo_hint;
    statusEl.style.color = '#94a3b8';
    statusEl.style.background = 'rgba(255,255,255,0.05)';
    statusEl.style.borderColor = 'rgba(255,255,255,0.1)';
    mapBorder.style.borderColor = 'rgba(58,167,225,0.3)';
    document.querySelectorAll('.demo-stat').forEach(s => s.style.borderColor='rgba(255,255,255,0.1)');
    btnClear.disabled = true;
  });
})();

// ═══ FORM SUBMISSION → TELEGRAM BOT ═══
const BOT_ENDPOINT = 'http://localhost:3847/lead';

function submitLead() {
  const name = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  const city = document.getElementById('fCity').value.trim();
  const herdType = document.getElementById('fHerd').value;
  const heads = document.getElementById('fHeads').value;
  const comment = document.getElementById('fComment').value.trim();
  const msgEl = document.getElementById('formMsg');
  const btn = document.getElementById('btnSubmit');

  if (!name || !phone) {
    msgEl.style.display = 'block';
    msgEl.style.color = '#f87171';
    msgEl.textContent = '⚠️ Заполните имя и телефон!';
    return;
  }

  btn.disabled = true;
  btn.textContent = '⏳ Отправляем...';

  fetch(BOT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, city, herdType, heads, comment })
  })
  .then(r => r.json())
  .then(data => {
    if (data.ok) {
      msgEl.style.display = 'block';
      msgEl.style.color = '#4ade80';
      msgEl.textContent = '✅ Заявка отправлена! Мы скоро свяжемся.';
      document.getElementById('fName').value = '';
      document.getElementById('fPhone').value = '';
      document.getElementById('fCity').value = '';
      document.getElementById('fHeads').value = '';
      document.getElementById('fComment').value = '';
    } else {
      throw new Error('Server error');
    }
  })
  .catch(() => {
    msgEl.style.display = 'block';
    msgEl.style.color = '#facc15';
    msgEl.textContent = '📩 Напишите нам в Telegram: @steppaimain';
  })
  .finally(() => {
    btn.disabled = false;
    btn.textContent = 'Отправить заявку';
  });
}

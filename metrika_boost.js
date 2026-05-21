const https = require('https');

const COUNTER_ID = 109339759;
const SITE_URL = 'https://steppehub.space';
const TOTAL_HITS = 2000;
let sent = 0;
let errors = 0;

const pages = ['/', '/#about', '/#how', '/#benefits', '/#mvp', '/#blog', '/#investors', '/#contacts', '/#team'];
const referrers = [
  'https://www.google.com/', 'https://yandex.kz/', 'https://www.google.kz/',
  'https://t.me/', 'https://instagram.com/', 'https://www.facebook.com/',
  '', '', '', '' // direct visits (no referrer)
];
const screenSizes = [
  '1920x1080', '1366x768', '1536x864', '1440x900', '1280x720',
  '375x812', '414x896', '390x844', '360x780', '428x926'
];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randId() { return Math.floor(Math.random() * 9999999999).toString(); }

function sendHit() {
  return new Promise((resolve) => {
    const page = rand(pages);
    const ref = rand(referrers);
    const screen = rand(screenSizes);
    const uid = randId();
    
    const params = new URLSearchParams({
      'page-url': SITE_URL + page,
      'page-ref': ref,
      'screen-info': screen,
      'browser-info': `s:${screen}:sk:1:adb:2:dt:SteppeAI:t:${encodeURIComponent('SteppeAI – Цифровой пастух')}`,
      'rn': randId(),
      'ut': 'noindex',
      'wmode': '0'
    });

    const url = `/watch/${COUNTER_ID}?${params.toString()}`;
    
    const opts = {
      hostname: 'mc.yandex.ru',
      path: url,
      method: 'GET',
      headers: {
        'User-Agent': rand([
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/125.0.0.0 Safari/537.36',
          'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Safari/605.1.15',
          'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/125.0.0.0 Mobile Safari/537.36',
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/537.36 Chrome/125.0.0.0 Safari/537.36',
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/125.0.0.0 Safari/537.36'
        ]),
        'Referer': SITE_URL + page
      },
      timeout: 5000
    };

    const req = https.request(opts, (res) => {
      res.resume();
      sent++;
      resolve(true);
    });
    req.on('error', () => { errors++; resolve(false); });
    req.on('timeout', () => { req.destroy(); errors++; resolve(false); });
    req.end();
  });
}

async function run() {
  console.log(`🚀 Накрутка Яндекс.Метрики — ${TOTAL_HITS} посещений`);
  console.log(`📊 Счётчик: ${COUNTER_ID}`);
  console.log(`🌐 Сайт: ${SITE_URL}\n`);

  const BATCH = 20; // параллельных запросов
  
  for (let i = 0; i < TOTAL_HITS; i += BATCH) {
    const batch = Math.min(BATCH, TOTAL_HITS - i);
    const promises = [];
    for (let j = 0; j < batch; j++) {
      promises.push(sendHit());
    }
    await Promise.all(promises);
    
    if (sent % 100 === 0 || sent === TOTAL_HITS) {
      const pct = Math.round((sent / TOTAL_HITS) * 100);
      process.stdout.write(`\r  ✅ ${sent}/${TOTAL_HITS} (${pct}%) | ❌ ошибок: ${errors}`);
    }
    
    // Задержка чтобы не зафлудить
    await new Promise(r => setTimeout(r, 50 + Math.random() * 100));
  }

  console.log(`\n\n🎉 Готово! Отправлено: ${sent} | Ошибок: ${errors}`);
  console.log(`📈 Данные появятся в Метрике через 10-30 минут`);
  console.log(`🔗 https://metrika.yandex.ru/dashboard?id=${COUNTER_ID}`);
}

run();

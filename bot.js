const https = require('https');

const TOKEN = '8669902687:AAGvUB-tXPKX7MFf7k8RanPrF74RveR4WTg';
const API = `https://api.telegram.org/bot${TOKEN}`;

// Chat ID куда отправлять заявки (заполнится после /start)
// Можно указать вручную свой chat_id
let ADMIN_CHAT_ID = null;

function request(method, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const url = new URL(`${API}/${method}`);
    const opts = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    };
    const req = https.request(opts, res => {
      let buf = '';
      res.on('data', c => buf += c);
      res.on('end', () => { try { resolve(JSON.parse(buf)); } catch { resolve(buf); } });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function sendMessage(chatId, text) {
  return request('sendMessage', { chat_id: chatId, text, parse_mode: 'HTML' });
}

// ─── HTTP SERVER для приёма заявок с сайта ───
const http = require('http');

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  if (req.method === 'POST' && req.url === '/lead') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', async () => {
      try {
        const d = JSON.parse(body);
        const msg =
          `📩 <b>НОВАЯ ЗАЯВКА с сайта SteppeAI!</b>\n\n` +
          `👤 <b>Имя:</b> ${d.name || '—'}\n` +
          `📞 <b>Телефон:</b> ${d.phone || '—'}\n` +
          `🏙 <b>Город:</b> ${d.city || '—'}\n` +
          `🐄 <b>Тип стада:</b> ${d.herdType || '—'}\n` +
          `🔢 <b>Кол-во голов:</b> ${d.heads || '—'}\n` +
          `💬 <b>Комментарий:</b> ${d.comment || '—'}\n\n` +
          `⏰ ${new Date().toLocaleString('ru-RU')}`;

        // Отправить всем админам
        if (ADMIN_CHAT_ID) {
          await sendMessage(ADMIN_CHAT_ID, msg);
        }

        console.log(`[${new Date().toLocaleTimeString()}] 📩 Заявка: ${d.name} / ${d.phone}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        console.error('Error:', err.message);
        res.writeHead(400);
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

// ─── POLLING для /start ───
let offset = 0;

async function poll() {
  try {
    const res = await request('getUpdates', { offset, timeout: 30 });
    if (res.ok && res.result) {
      for (const upd of res.result) {
        offset = upd.update_id + 1;
        const msg = upd.message;
        if (!msg) continue;

        const chatId = msg.chat.id;
        const firstName = msg.from.first_name || '';
        const text = msg.text || '';

        console.log(`[${new Date().toLocaleTimeString()}] ${firstName} → ${text}`);

        if (text === '/start') {
          ADMIN_CHAT_ID = chatId;
          await sendMessage(chatId,
            `🐄 <b>SteppeAI Bot активирован!</b>\n\n` +
            `Теперь все заявки с сайта будут приходить сюда.\n` +
            `Chat ID: <code>${chatId}</code>\n\n` +
            `Ждём заявок! 🚀`
          );
          console.log(`✅ Admin chat ID set: ${chatId}`);
        }
      }
    }
  } catch (err) {
    console.error('Poll error:', err.message);
  }
  setTimeout(poll, 500);
}

const PORT = 3847;

server.listen(PORT, () => {
  console.log(`🐄 SteppeAI Bot + Webhook Server`);
  console.log(`📡 HTTP сервер: http://localhost:${PORT}/lead`);
  console.log(`🤖 Telegram polling запущен...`);
  console.log(`\n⚡ Напишите /start боту чтобы привязать чат для заявок\n`);
});

// Удалить webhook и запустить polling
(async () => {
  await request('deleteWebhook', {});
  const me = await request('getMe', {});
  if (me.ok) console.log(`✅ Бот: @${me.result.username}`);
  poll();
})();

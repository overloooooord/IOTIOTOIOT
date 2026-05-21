const https = require('https');

const TOKEN = '8669902687:AAGvUB-tXPKX7MFf7k8RanPrF74RveR4WTg';
const API = `https://api.telegram.org/bot${TOKEN}`;

let offset = 0;

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
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); } catch { resolve(buf); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function sendMessage(chatId, text) {
  return request('sendMessage', {
    chat_id: chatId,
    text: text,
    parse_mode: 'HTML'
  });
}

async function poll() {
  try {
    const res = await request('getUpdates', { offset, timeout: 30 });
    if (res.ok && res.result) {
      for (const upd of res.result) {
        offset = upd.update_id + 1;
        const msg = upd.message;
        if (!msg) continue;

        const chatId = msg.chat.id;
        const userId = msg.from.id;
        const username = msg.from.username || '—';
        const firstName = msg.from.first_name || '';
        const text = msg.text || '';

        console.log(`[${new Date().toLocaleTimeString()}] ${firstName} (@${username}) → ${text}`);

        if (text === '/start') {
          await sendMessage(chatId,
            `🐄 <b>Привет, ${firstName}!</b>\n\n` +
            `Добро пожаловать в <b>SteppeAI</b> — цифровой пастух для вашего стада.\n\n` +
            `📋 <b>Ваши данные:</b>\n` +
            `├ 🆔 User ID: <code>${userId}</code>\n` +
            `├ 💬 Chat ID: <code>${chatId}</code>\n` +
            `└ 👤 Username: @${username}\n\n` +
            `🌐 Сайт: steppai.kz\n` +
            `📩 Связь: @steppaimain`
          );
        } else if (text === '/id') {
          await sendMessage(chatId,
            `🆔 <b>Ваш ID:</b> <code>${userId}</code>\n` +
            `💬 <b>Chat ID:</b> <code>${chatId}</code>`
          );
        } else if (text === '/help') {
          await sendMessage(chatId,
            `📖 <b>Команды:</b>\n` +
            `/start — приветствие + ваш ID\n` +
            `/id — показать ID\n` +
            `/help — помощь`
          );
        }
      }
    }
  } catch (err) {
    console.error('Poll error:', err.message);
  }
  setTimeout(poll, 500);
}

// Delete webhook first (in case it was set), then start polling
(async () => {
  console.log('🐄 SteppeAI Bot запускается...');
  const del = await request('deleteWebhook', {});
  console.log('Webhook deleted:', del.ok ? '✅' : '❌');
  const me = await request('getMe', {});
  if (me.ok) {
    console.log(`✅ Бот запущен: @${me.result.username}`);
  } else {
    console.error('❌ Ошибка подключения к боту');
    process.exit(1);
  }
  poll();
})();

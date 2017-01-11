const Telegraf = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || '';

const bot = new Telegraf(BOT_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`);
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);

function repeatIt(messageText = '') {
  const timesPosition = messageText.indexOf(' ');
  let times = messageText.substring(0, timesPosition);
  const text = messageText.substring(timesPosition + 1);

  if (times > 500) {
    times = 500;
  }

  let answer = '';
  for (let i = 0; i < times; i += 1) {
    answer += text;
  }

  return answer || messageText;
}

bot.on('message', (ctx) => {
  const messageText = ctx.update.message.text;
  console.log(messageText);

  return ctx.reply(repeatIt(messageText));
});

// bot.startPolling()

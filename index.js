const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

function repeatIt(messageText = '') {
  const timesPosition = messageText.indexOf(' ');
  const times = messageText.substring(0, timesPosition);
  const text = messageText.substring(timesPosition);

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

bot.startPolling()

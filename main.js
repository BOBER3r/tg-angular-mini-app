import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.WEB_APP_URL;

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Welcome to this bot!', 
        Markup.keyboard([
            Markup.button.webApp(
                'Send message', 
                `${webAppUrl}/feedback`
            )
        ])
    );
});

bot.on(message('web_app_data'), async (ctx) => {
    const data = JSON.parse(ctx.webAppData.data);
    ctx.reply(`Your message: ${data?.feedback ?? 'empty message'}`);
});

bot.launch();

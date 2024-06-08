import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";
const token = '7352303919:AAGJBgWQhCbx9-0ldmL1bTONmxyd10L5AcM';
const webAppUrl = 'https://angular-tg-app-4d0aa.web.app';

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
    )
})

bot.on(message('web_app_data'), async (ctx) =>{
    const data = ctx.webAppData.data.json()
    ctx.reply(`Your message: ${data?.feedback}` ?? 'empty message')
})

bot.launch();
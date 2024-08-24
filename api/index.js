const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const token = process.env.TELEGRAM_TOKEN

const bot = new TelegramBot(token, { polling: true });

const url = 'https://tgbot-weld-mu.vercel.app/'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text

    if (text === 'bb') {
        await bot.sendMessage(chatId, 'Hello', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Yes', web_app: { url: url } }],
                ]
            }
        })
    }
});

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


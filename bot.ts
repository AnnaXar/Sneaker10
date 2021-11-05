
const ViberBot = require("viber-bot").Bot;
const BotEvents = require("viber-bot").Events;
const express = require("express");
const app = express();
const route = require('./routes/route')

const TextMessage = require("viber-bot").Message.Text;
const KeyboardMessage = require('viber-bot').Message.Keyboard;


const BOT_ACCOUNT_TOKEN = require('./secret/viber.ts');
const EXPOSE_URL = require('./secret/url.ts');

if (!BOT_ACCOUNT_TOKEN) {
    console.log("Could not find bot account token key.");
    process.exit(1);
}
else if (!EXPOSE_URL) {
    console.log("Could not find exposing url");
    process.exit(1);
}

const bot = new ViberBot({
	authToken: BOT_ACCOUNT_TOKEN,
	name: "Sneaker10helpbot",
	avatar: "https://www.facebook.com/sneaker10/photos/a.320088251505194/1129339873913357/" 
});


// Subscribe
bot.on(BotEvents.SUBSCRIBED, response => {
    
    response.send(new TextMessage(`Γεία σου ${response.userProfile.name}. Είμαι το  ${bot.name} πως μπορώ να σε εξυπηρετήσω με τις σημερινές σας αγορές;`))
    .catch(err => {console.log(err)})
});



// Message
bot.on(BotEvents.MESSAGE_RECEIVED, route);

const port = process.env.PORT || 3000;
app.use("/viber/webhook", bot.middleware());
app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
    bot.setWebhook(`${EXPOSE_URL}/viber/webhook`,).catch(error => {
        console.log('Can not set webhook on following server. Is it running?');
        console.error(error);
    });
});


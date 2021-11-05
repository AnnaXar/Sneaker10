
export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const TextMessage = require("viber-bot").Message.Text;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const SAMPLE_RICH_MEDIA = require('./../views/shops').SAMPLE_RICH_MEDIA
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
//a controller that responds when you choose the functionality shops
module.exports = (message, response) => {
    response
    .send(
        [new TextMessage('Βρες ένα από τα πιο hot spot στην Αθήνα να ανανεώσεις το στυλ σου!',MAIN_KEYBOARD),
        (new RichMediaMessage(SAMPLE_RICH_MEDIA, ΜΑΙΝ_KEYBOARD,null))
    ])
    .catch(err => { console.log(err) })
}
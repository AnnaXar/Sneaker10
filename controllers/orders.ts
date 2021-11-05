export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const TextMessage = require("viber-bot").Message.Text;
//const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const PLUS_BUTTON_KEYBOARD = require('./../views/menu').PLUS_BUTTON_KEYBOARD
const SAMPLETHREE_RICH_MEDIA = require('./../views/orders').SAMPLETHREE_RICH_MEDIA

// a controller that responds when you choose the functionality orders
module.exports = (message, response) => {
    response
    .send([
        (new RichMediaMessage(SAMPLETHREE_RICH_MEDIA, PLUS_BUTTON_KEYBOARD,null))
    ])
    .catch(err => { console.log(err) })
}
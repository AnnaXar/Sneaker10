export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD


//A controller that responds when you add a new valid order
module.exports = (message, response) => {
    response
    .send([
        new TextMessage('Σε περιμένουμε για την παραλαβή σου.🛍️',MAIN_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}
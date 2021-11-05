export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD


// A controller that responds when your order is ready
module.exports = (message, response) => {
    response
    .send([
        new TextMessage('On the way.Σε δύο με τρεις εργάσιμες αναμένεται να φτάσει στο κατάστημα και θα είναι έτοιμη για unboxing🎁',MAIN_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}
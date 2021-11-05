export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD


// A controller responding with the hours of operation
module.exports = (message, response) => {
    response
    .send([
        new TextMessage('Ώρες λειτουργίας 🕒\nΔευτ-Παρ.:9:00-21:00 \nΣάββατο:9:00-20:00\nΚυριακή:11:00-20:00',MAIN_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}
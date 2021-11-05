export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const TextMessage = require("viber-bot").Message.Text;
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD


// A controller that returns the user in the "main page" were he can pick actions
module.exports = (message, response) => {

    response
    .send([
        new TextMessage('Πως μπορούμε να εξυπηρετήσουμε τις fashion ανάγκες σου;',ΜΑΙΝ_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}
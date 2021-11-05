export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD


// A controller responding with a welcome message
module.exports = (message, response) => {
    response
    .send([
        new TextMessage('Καλησπέρα Sneakerhead👟. \nΠάτα ΓΙΑ ΠΑΜΕ να ανακαλύψεις όλα τα νέα trends.',SAMPLE_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}
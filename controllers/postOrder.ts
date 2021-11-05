export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SHOPS_KEYBOARD = require('./../views/menu').SHOPS_KEYBOARD


// A controller responding with a welcome message
module.exports = (message, response) => {
    response
    .send([
        new TextMessage('Η παραγγελία σου καταχωρήθηκε επιτυχώς✔️. Επέλεξε ένα από τα καταστήματα για παραλαβή!',SHOPS_KEYBOARD)
    ])
    .catch(err => { console.log(err) })
}
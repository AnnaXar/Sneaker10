export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const TextMessage = require("viber-bot").Message.Text;
//const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const SAMPLETWO_RICH_MEDIA = require('./../views/products').SAMPLETWO_RICH_MEDIA


module.exports = (message, response) => {
    response
    .send([new TextMessage('Επέλεξε ένα από τα hot new releases για να τα αποκτήσεις, αλλιώς τσέκαρε άλλα κομμάτια της συλλογής μας πατώντας περισσότερες επιλογές!',MAIN_KEYBOARD),
        (new RichMediaMessage(SAMPLETWO_RICH_MEDIA, MAIN_KEYBOARD,null))
    ])
    .catch(err => { console.log(err) })
}
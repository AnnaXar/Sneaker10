import { request } from "node:http";

export { }
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const TextMessage = require("viber-bot").Message.Text;
const SMS_KEYBOARD = require('./../views/menu').SMS_KEYBOARD
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const SAMPLE_KEYBOARD = require('./../views/menu').SAMPLE_KEYBOARD
const NAME_KEYBOARD = require('./../views/menu').Name;
const UrlMessage = require('viber-bot').Message.Url;
const PLUS_BUTTON_KEYBOARD  = require('./../views/menu').PLUS_BUTTON_KEYBOARD


// A controller that deals with  tracking number 
module.exports= (message, response) => {

    const trData = message.trackingData

   
    switch (trData.Q){
        
        case ("Number"):{
            trData.Number = message.text
            break;
        }
      
        default:{
            break;
        }
    } 


   
     if (!trData.Number){
        trData.Q = "Number"
        response
        .send([
            new TextMessage("Δώσε το tracking number που έχεις καταχωρήσει την παραγγελία",PLUS_BUTTON_KEYBOARD),
        ],
        trData)
        .catch(err => { console.log(err) })
    }else{
        let number = trData.Number.replace(' ', '%20');
        
       
        response
        .send([
            new TextMessage("Καταχωρήθηκε επιτυχώς",MAIN_KEYBOARD)
            
        ])
        .catch(err => { console.log(err) })
    }
}
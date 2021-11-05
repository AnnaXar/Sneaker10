export {}

var express = require("express");
const greeting = require("./../controllers/greeting");
const KeyboardMessage = require('viber-bot').Message.Keyboard;
const main = require("./../controllers/main");
const ΜΑΙΝ_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD
const TextMessage = require("viber-bot").Message.Text;
const shops= require("./../controllers/shops");
const timeschedule=require("./../controllers/timeschedule");
const postOrder=require("./../controllers/postOrder");
const orders=require("./../controllers/orders");
const delivery=require("./../controllers/delivery");
const newdeliverystatus=require("./../controllers/newdeliverystatus");
const products=require("./../controllers/products");
const comeANDget=require("./../controllers/comeANDget");
const RichMediaMessage = require('viber-bot').Message.RichMedia;
const MAIN_KEYBOARD = require('./../views/menu').MAIN_KEYBOARD


// Every message is redirected to the appropriate controller throw here.
module.exports = (message, response) => {
   const msg = message.text
   console.log(msg);
   switch (msg.toLowerCase('gr')) {
      case "για πάμε":{
         main(message, response)
         break;
      }
      case "καταστήματα": {
         shops(message,response)
         
         break;

      }
      case "διαθέσιμα προϊοντα": {
         products(message,response)
         
         break;

      }
      //press "ωράρια" button
      case "ώρες λειτουργίας": {
         timeschedule(message,response)
         break;
      }
   
   case "καταχώρηση παραγγελίας":{
      postOrder (message,response)
      break;
   }
   case "ενεργές παραγγελίες":{
      orders (message,response)
      break;
   }
   case "που βρίσκεται η παραγγελία μου;":{
      delivery (message,response)
      break;
   }
   case "jj":{
      
         newdeliverystatus(message,response)
         break;
      
   }
   case "παραλαβή":{
      comeANDget(message,response)
      break;
   }

      case "ευχαριστώ":
      case "καλή συνέχεια":
      case "εντάξει":
      {
         response
         .send([
             new TextMessage("Ελπίζω να σε βοήθησα, καλή συνεχεια.")
         ])
         .catch(err => { console.log(err) })
         break;
      }
      default:{
         if (message.trackingData.Q){
         newdeliverystatus(message,response)
         break;

         }
         else if (['http','https'].includes(msg.toLowerCase('gr').split(':')[0])){
            response
            .send([
            (new RichMediaMessage("", MAIN_KEYBOARD,null))
        ])
        .catch(err => { console.log(err) })
         }
         break;
      }
   }

}
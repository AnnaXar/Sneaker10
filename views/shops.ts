// The news and info carousel




let SAMPLE_RICH_MEDIA =
{
   "Type":"rich_media",
   "ButtonsGroupColumns":6,
   "ButtonsGroupRows":7,
   "BgColor":"#ffffff",
   "Buttons":[]
}
//first shop

   SAMPLE_RICH_MEDIA.Buttons.push(
      {
         "Columns":6,
         "Rows":3,
         "ActionType":"open-url",
         "BgColor":'#FFE603',
         "ActionBody":"https://www.sneaker10.gr/el/stores/870-",
         "Image":"https://www.sneaker10.gr/img/st/318_5-retina_store_image.jpg",
         "Silent":true
        
      },
      {
         "Columns":6,
         "Rows":2,
         "ActionType":"reply",
         "ActionBody":" ",
         "Text":"<font color=#323232><b>Sneaker10</b></font><font color=#777777><br></font>Ερμού 51,Σύνταγμα<font color=#6fc133></font>",
         "TextSize":"medium",
         "TextVAlign":"middle",
         "TextHAlign":"middle",
         "Silent":true
      },
     
      {
         "Columns":6,
         "Rows":1,
        
         "BgColor":"#000000",
         "ActionType":"reply",
         "ActionBody":"Ώρες λειτουργίας",
         "Text":"<font color='#FFFF00'>Ωράρια</font>",
         
         "TextSize":"large",
         "TextVAlign":"middle",
         "TextHAlign":"middle",
         
         "Silent":true
      },
      {
         "Columns":6,
         "Rows":1,
         "ActionType":"open-url",
         "ActionBody":"tel:2105646",
         "BgColor":"#ffff00",
         "Text":"<font color='#000000'>Κλήση 📞</font>",
         "TextSize":"medium",
         "TextVAlign":"middle",
         "TextHAlign":"middle",
         "Silent":true
      }
   ),
   //second store
 
   
   
      SAMPLE_RICH_MEDIA.Buttons.push(
         {
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":"https://www.sneaker10.gr/el/stores/228-",
            "Image":"https://www.sneaker10.gr/img/st/228_1-retina_store_image.jpg",
            "Silent":true
           
         },
         {
            "Columns":6,
            "Rows":2,
            "ActionType":"reply",
            "ActionBody":" ",
            "Text":"<font color=#323232><b>Sneaker10</b></font><font color=#777777><br></font>Αιγάλεω,RiverWest<font color=#6fc133></font>",
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Silent":true
         },
        
         {
            "Columns":6,
            "Rows":1,
           
            "BgColor":"#000000",
            "ActionType":"reply",
            "ActionBody":"Ώρες λειτουργίας",
            "Text":"<font color='#FFFF00'>Ωράρια</font>",
            
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            
            "Silent":true
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"open-url",
            "ActionBody":"tel:2105646",
            "BgColor":"#FFFF00",
            "Text":"<font color='#000000'>Κλήση 📞</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Silent":true
         }
      ),
      //Third store
      SAMPLE_RICH_MEDIA.Buttons.push(
         {
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":"https://www.sneaker10.gr/el/stores/242-",
            "Image":"https://www.sneaker10.gr/img/st/242_5-retina_store_image.jpg",
            "Silent":true
           
         },
         {
            "Columns":6,
            "Rows":2,
            "ActionType":"reply",
            "ActionBody":" ",
            "Text":"<font color=#323232><b>Sneaker10</b></font><font color=#777777><br></font>Γλυφάδα,Λ. Δημάρχου Αγγέλου Μεταξά 13<font color=#6fc133></font>",
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Silent":true
         },
        
         {
            "Columns":6,
            "Rows":1,
            
            "BgColor":"#000000",
            "ActionType":"reply",
            "ActionBody":"Ώρες λειτουργίας",
            "Text":"<font color='#ffff00'>Ωράρια</font>",
            
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            
            "Silent":true
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"open-url",
            "ActionBody":"tel:2105646",
            "BgColor":"#ffff00",
            "Text":"<font color='#000000'>Κλήση 📞</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Silent":true
         }
      )


 



module.exports.SAMPLE_RICH_MEDIA = SAMPLE_RICH_MEDIA;
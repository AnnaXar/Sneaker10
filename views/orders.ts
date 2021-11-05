
//carousel for the orders that you have to your account

let SAMPLETHREE_RICH_MEDIA =
{
   "Type":"rich_media",
   "ButtonsGroupColumns":6,
   "ButtonsGroupRows":7,
   "BgColor":"#FFFFFF",
   "Buttons":[]
}

  SAMPLETHREE_RICH_MEDIA.Buttons.push(
      {
         "Columns":6,
         "Rows":3,
         "ActionType":"open-url",
         "ActionBody":"https://www.sneaker10.gr/el/400423-nike-w-air-max-96-ii.html#/405537-%CF%87%CF%81%CF%89%CE%BC%CE%B1-sail_sail_light_bone_summit_white",
         "Image":"https://www.sneaker10.gr/2377414-product_thumb/nike-w-air-max-96-ii.jpg",
         "Silent":true
      },
      {
        "Columns":6,
        "Rows":2,
        "ActionType":"reply",
        "ActionBody":" ",
        "Text":"<font color=#323232><b>Ενεργή Παραγγελία</b></font><font color=#777777><br></font>Nike Air Max 96 2 Γυναικεία Παπούτσια<font color=#6fc133></font>",
        "TextSize":"medium",
        "TextVAlign":"middle",
        "TextHAlign":"left",
        "Silent":true
     },
     
      {
         "Columns":6,
         "Rows":2,
         "ActionType":"reply",
         "ActionBody":"Που βρίσκεται η παραγγελία μου;",
         "BgColor":"#000000",
         "Text":"<font color='#FFFF00'>Εξέλιξη Παραγγελίας</font>",
         "TextSize":"large",
         "TextVAlign":"middle",
         "TextHAlign":"middle",
         "Silent":true
         
      }
   
   )

module.exports.SAMPLETHREE_RICH_MEDIA = SAMPLETHREE_RICH_MEDIA;
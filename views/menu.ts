// All the menus and keyboards used.
// Easy change of the app look and feel by just chaning this file.

module.exports.SAMPLE_KEYBOARD = {
	"Type": "keyboard",
	"InputFieldState":"regular",
	"Revision": 1,
	"BgColor": "#172128",
	"Buttons": [
		{

			"Columns": 6,
			"Rows": 2,
			"Image":"https://www.sneaker10.gr/img/sneaker10-logo-15784046062.jpg",
            "Text":"<font color=”#FFFFFF” size=20><b>Για Πάμε</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "για πάμε",
			"TextVAlign":"bottom",
			"TextHAlign":"middle",
			"Silent":true

		}
	]
};

module.exports.PLUS_BUTTON_KEYBOARD = {
	
	"Type": "keyboard",
	"InputFieldState":"regular",
	"Revision": 1,
	"BgColor": "#172128",
	"Buttons": [
		{

			"Columns": 6,
			"Rows": 2,
			"BgColor":"#FFE603",
            "Text":"<font color=”#00000” size=28><b>Πρσοσθήκη Νέας Παραγγελίας</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "jj",
			"TextVAlign":"middle",
			"TextHAlign":"middle",
			"Silent":true

		}
	]
	}

	 



module.exports.MAIN_KEYBOARD = {
	"Type": "keyboard",
	"InputFieldState":"regular",
	"Revision": 1,
	"BgColor": "#FFFFFF",
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 2,

            "Text":"<font color=”#000000” size=16><b>Καταστήματα</b></font>",
			"BgColor": "#FFFFFF",
			"Image":"https://www.iconsdb.com/icons/preview/color/FFE603/shop-xxl.png",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "καταστήματα",
			"TextVAlign":"bottom",
			"TextHAlign":"middle",
			"Silent":true


		},
        {
			"Columns": 2,
			"Rows": 2,
			"Image":"https://www.iconsdb.com/icons/preview/color/FFE603/shopping-bag-2-xxl.png",
            "Text":"<font color=”#000000” size=16><b>Προϊόντα</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Διαθέσιμα προϊοντα",
			"TextVAlign":"bottom",
			"TextHAlign":"middle",
			"Silent":true

		},
        {
			"Columns": 2,
			"Rows": 2,
			"Image":"https://www.iconsdb.com/icons/preview/color/FFE603/purchase-order-xxl.png",
            "Text":"<font color=”#000000” size=16><b>Ενεργές Παραγγελίες</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Ενεργές Παραγγελίες",
			"TextVAlign":"bottom",
			"TextHAlign":"middle",
			"Silent":true

		}
	]
};



module.exports.SHOPS_KEYBOARD = {
	"Type": "keyboard",
	"InputFieldState":"regular",
	"Revision": 1,
	"BgColor": "#FFFFFF",
	"Buttons": [
		{
			"Columns": 2,
			"Rows": 2,

            "Text":"<font color=”#000000” size=15><b>Ερμού 51 \n Διαθεσιμότητα:5</b></font>",
			
			"BgColor": "#FFE603",
			
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Παραλαβή",
			"TextVAlign":"middle",
			"TextHAlign":"middle",
			"Silent":true


		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor":"#FFE603",
            "Text":"<font color=”#000000” size=15><b>River West \n Διαθεσιμότητα:2</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Παραλαβή",
			"TextVAlign":"middle",
			"TextHAlign":"middle",
			"Silent":true

		},
        {
			"Columns": 2,
			"Rows": 2,
			"BgColor":"#FFE603",
            "Text":"<font color=”#000000” size=15><b>Λ. Δημάρχου Αγγέλου Μεταξά 13\n Διαθεσιμότητα:1</b></font>",
			"BgLoop": true,
			"ActionType": "reply",
			"ActionBody": "Παραλαβή",
			"TextVAlign":"middle",
			"TextHAlign":"middle",
			"Silent":true

		}
	]
};
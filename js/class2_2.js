const firstName = "Kristjan";
const lastName = "Petersell"
const datetimeValue =  require("./datetime_et");
const fs = require("fs");
//let folkWisdom = "";

fs.readFile("../txtfiles/vanasonad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		//folkWisdom = data;
		onScreen(data);
	}
}); //readFile lõpeb
const onScreen = function (folkWisdom){
	console.log("---------------------------------------------------------");
	console.log("Programmi autor on " + firstName + " " + lastName);
	console.log("---------------------------------------------------------");
	console.log("Täna on " + datetimeValue.dateETformatted());
	console.log("Kell on " + datetimeValue.timeETformatted());
	console.log("Praegu on " + datetimeValue.timeOfDayET() + ".");
	console.log("---------------------------------------------------------");
	//console.log(folkWisdom);
	let folkWisdoms = folkWisdom.split(";");
	//console.log(folkWisdoms);
	//console.log(folkWisdoms.length);
	//console.log("Tänane tarkus: " + folkWisdoms[Math.floor(Math.random() * folkWisdoms.length)]);
	//kõige tavalisem for tsükkel (loop) i = i + 1 või i += 1 või i ++
	for (let i = 0; i < folkWisdoms.length; i ++){
		console.log("Vanasõna nr " + (i + 1) + ': "' + folkWisdoms[i] + '"');
	}
	
	console.log("---------------------------------------------------------");
	//console.log(datetimeValue.monthsET.length);
	//console.log(datetimeValue.monthsET);
}

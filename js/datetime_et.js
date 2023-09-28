const monthsET = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"];
 
const dateETformatted = function(){
	let timeNow = new Date();
	return timeNow.getDate() + ". " + monthsET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeETformatted = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + "." + timeNow.getSeconds();
}

const timeOfDayET = function(){
	let partOfDay = "suvaline hetk";
	let hourNow = new Date().getHours();
	if(hourNow >= 4 && hourNow < 12){
		partOfDay = "hommik";
	}
	if(hourNow >= 12 && hourNow < 17){
		partOfDay = "pärastlõuna";
	}
	if(hourNow >= 17 && hourNow < 21){
		partOfDay = "õhtu";
	}
	if(hourNow >= 21 && hourNow <= 24){
		partOfDay = "öö";
	}
	if(hourNow >= 0 && hourNow < 4){
		partOfDay = "öö";
	}
	return partOfDay;
}

module.exports = {monthsET: monthsET, dateETformatted: dateETformatted, timeETformatted: timeETformatted, timeOfDayET: timeOfDayET};
 exports.timeETformatted = function(){
	let timeNow = new Date();
	let minutesNow = timeNow.getMinutes();
	let hoursNow = timeNow.getHours();
	let timeET = hoursNow + ":" + minutesNow;
	return timeET;
}
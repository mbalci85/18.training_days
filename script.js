function getRandEvent() {
	let eventCode = Math.ceil(Math.random() * 3);
	if (eventCode == 1) {
		return 'Marathon';
	} else if (eventCode == 2) {
		return 'Triathlon';
	} else if (eventCode == 3) {
		return 'Pentathlon';
	}
}

function getTrainingDays(eventt) {
	let days;
	if (eventt == 'Marathon') {
		days = 1;
	} else if (eventt == 'Triathlon') {
		days = 2;
	} else if (eventt == 'Pentathlon') {
		days = 3;
	}
	return days;
}

let name = 'Mustafa';

function logEvent(eventt) {
	console.log(`${name}'s event is: ${eventt}`);
}

function logTime(days) {
	console.log(`${name}'s time to train is: ${days} days`);
}

eventt = getRandEvent();
days = getTrainingDays(eventt);

logEvent(eventt);
logTime(days);

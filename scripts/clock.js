let time = new Date(Date.now());

let canvas = document.getElementById('clock-canvas'),
	ctx = canvas.getContext('2d');

let origin = [canvas.width / 2, canvas.height / 2];

let hourHandLength = 90,
    minuteHandLength = 160,
    secondHandLength = 190;

let hourHandColor =
    minuteHandColor = 
    secondHandColor = '#000';

let backgroundColor = '#f6f6f6';

setInterval(update, 100);

function drawNumber(number){

}    

function drawNumbers(){

}

function drawSecondHand(){
	let angle = -time.getSeconds()/30 * Math.PI + Math.PI / 2;
	let radius = secondHandLength;
	let endPoint = [origin[0] + Math.cos(angle) * radius,
					origin[1] - Math.sin(angle) * radius]

	ctx.beginPath();
	ctx.moveTo(...origin);
	ctx.lineTo(...endPoint);
	ctx.strokeStyle = secondHandColor;
	ctx.stroke();
}

function drawMinuteHand(){
	let angle = -time.getMinutes()/30 * Math.PI + Math.PI / 2;
	let radius = minuteHandLength;
	let endPoint = [origin[0] + Math.cos(angle) * radius,
					origin[1] - Math.sin(angle) * radius]

	ctx.beginPath();
	ctx.moveTo(...origin);
	ctx.lineTo(...endPoint);
	ctx.strokeStyle = minuteHandColor;
	ctx.stroke();
}

function drawHourHand(){
	let angle = -time.getHours()/6 * Math.PI + Math.PI / 2;
	let radius = hourHandLength;
	let endPoint = [origin[0] + Math.cos(angle) * radius,
					origin[1] - Math.sin(angle) * radius]

	ctx.beginPath();
	ctx.moveTo(...origin);
	ctx.lineTo(...endPoint);
	ctx.strokeStyle = hourHandColor;
	ctx.stroke();
}

function update(){
	time = new Date(Date.now());
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = backgroundColor;
	ctx.fill();

	drawSecondHand();
	drawMinuteHand();
	drawHourHand();
}

class Timer{

}
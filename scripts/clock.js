class Hand{
	constructor(timeFunction, period, length, width, strokeStyle){
		this.length = length;
		this.timeFunction = timeFunction;
		this.period = period;
		this.strokeStyle = strokeStyle;
		this.width = width;
	}

	draw(){
		let angle = -time[this.timeFunction]() / this.period 
					* 2 * Math.PI 
					+ Math.PI / 2;

		let endPoint = [origin[0] + Math.cos(angle) * this.length,
						origin[1] - Math.sin(angle) * this.length]

		ctx.strokeStyle = this.strokeStyle;
		ctx.lineWidth = this.width;

		ctx.beginPath();
		ctx.moveTo(...origin);
		ctx.lineTo(...endPoint);
		ctx.stroke();
	}
}

class Timer{
	//TODO
}

let time = new Date(Date.now());

let canvas = document.getElementById('clock-canvas'),
	ctx = canvas.getContext('2d');

let origin = [canvas.width / 2, canvas.height / 2];

let secondHand = new Hand('getSeconds', 60, 190, 1, '#000'),
	minuteHand = new Hand('getMinutes', 60, 160, 3, '#000'),
	hourHand = new Hand('getHours', 12, 90, 4, '#000');

let backgroundColor = '#f6f6f6';

setInterval(update, 100);

function update(){
	time = new Date(Date.now());
	draw();
}

function draw(){
	drawBackground();
	drawNumbers();
	secondHand.draw();
	minuteHand.draw();
	hourHand.draw();
	drawHandCenter();
}

function drawBackground(){
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = backgroundColor;
	ctx.fill();	
}    

function drawNumbers(){
	let radius = 217;
	for(i = 0; i < 12; i++){
		let angle = -i / 6 * Math.PI + Math.PI / 2; 
		drawNumber(i,
				   origin[0] + Math.cos(angle) * radius,
			       origin[1] - Math.sin(angle) * radius);
	}
}

function drawNumber(number, x, y){
	ctx.fillStyle = '#333';
	ctx.font = '20px arial';
	ctx.fillText(i || 12, x - 7, y + 5);
	/*
	ctx.beginPath();
	ctx.arc(x, y, 5, 0, 2 * Math.PI);
	ctx.fill();*/
}

function drawHandCenter(){
	ctx.fillStyle = '#000';
	ctx.beginPath();
	ctx.arc(...origin, 4, 0, 2 * Math.PI);
	ctx.fill();
}
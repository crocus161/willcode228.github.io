"use strict"
const canvas = document.getElementById('cv'),
			ctx    = canvas.getContext('2d');

let i = 0,
		k = 2 * Math.PI / 100,
		timer;

drawCircle();

function drawCircle(){
	
	ctx.clearRect(0,0,300,300);
	
	let color = getColor(i);
	
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.arc(150, 150, 100, 0, k*i, false);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.font = '35px arial';
	ctx.textAlign = 'center';
	ctx.fillStyle = color;
	ctx.fillText(i+'%', 150, 150+15);
//	ctx.stroke();
	ctx.closePath();
	
	
	if(i >= 100){
		clearTimeout(timer);
		document.querySelector('.preloader').style.opacity = 0;
		setTimeout(()=>{
			document.querySelector('.preloader').style.display = 'none';
		}, 900);
	}else{
		timer = setTimeout(drawCircle, 50);
		i++;
	}
}

function getColor(x){
	x = x * 255 / 100;
	let y = 255 - x;
	
	let color = `rgb(${x},${y},0)`;
	return color;
}

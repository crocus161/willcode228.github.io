const canvas = document.getElementById('cv'),
			ctx    = canvas.getContext('2d'),
			box    = 20;
	
//main obj
const bodyOfSnake = [];

bodyOfSnake[0] = {
	x: canvas.width/2,
	y: canvas.width/2,
}
let newApple = {
	x: Math.round(Math.random()*17 + 1) * box,
	y: Math.round(Math.random()*17 + 1) * box,
	color: 'white',
}
//main func for draw
	function drawElem(x,y,w,h,color){
		ctx.fillCap = 'round';
		ctx.fillStyle = color;
		ctx.fillRect(x,y,w,h);
	}
	//render
	function render(){
		//clear rect
		drawElem(0, 0, canvas.width, canvas.height, 'black');
		//player settings
		
		//draw snake
		for(let i = 0; i < bodyOfSnake.length; i++){
			drawElem(bodyOfSnake[i].x, bodyOfSnake[i].y, box, box, 'green');
		}
		// move comands
			// massive keys into vars
			let newX = bodyOfSnake[0].x,
					newY = bodyOfSnake[0].y;
			//if snake will eat apple
			if(newApple.x == bodyOfSnake[0].x && newApple.y == bodyOfSnake[0].y){
				newApple = {
					x: Math.round(Math.random()*17 + 1) * box,
					y: Math.round(Math.random()*17 + 1) * box,
				}
			}else{
				bodyOfSnake.pop();
			}

			if(direction == 'up'){
				newY += -box;
			}else if(direction == 'down'){
				newY += box;
			}else if(direction == 'right'){
				newX += -box;
			}else if(direction == 'left'){
				newX += box;
			}
		
		//revers pos after out of the canvas
		if(newX >= canvas.width){
			newX = 0;
		}else if(newX <= 0){
			newX = 600;
		}
		if(newY >= canvas.height){
			newY = 0;
		}else if(newY <= 0){
			newY = 600;
		}
		
		//add new head with new x,y
		const newHead = {
			x: newX,
			y: newY,
		}
		bodyOfSnake.unshift(newHead);
		//apple
		drawElem(newApple.x, newApple.y, box, box, 'red');
	}


	//player move

	let direction = '';
	
	window.onkeydown = function(e){
		if(e.keyCode === 38 && direction != 'down'){
			// changeSpeed_direction('up');
			direction = 'up';
			}else if(e.keyCode === 40 && direction != 'up'){
			// changeSpeed_direction('down');
			direction = 'down';
			}else if(e.keyCode === 37 && direction != 'left'){
			// changeSpeed_direction('right');
			direction = 'right';
			}else if(e.keyCode === 39 && direction != 'right'){
			// changeSpeed_direction('left');
			direction = 'left';
			}
	}

//loop
function game(){
	render();
}
const fps = 15;
setInterval(game, 1000/fps);
//Vars
let basic_btn     = document.querySelectorAll('.button'),
	clear_btn     = document.querySelector('.clear-btn'),
	color     = document.querySelector('.color'),
	range     = document.querySelector('.range'),
	select    = document.querySelector('.select');

let	btnToOpenCanvas = document.querySelector('.btnToOpenCanvas'),
	btnToOpenPaint  = document.querySelector('.btnToOpenPaint'),
	canvasTools     = document.querySelector('.canvasTools'),
	paintTools      = document.querySelector('.paintTools'),
	closeForPaintTools  = document.querySelector('.closeForPaintTools'),
	closeForCanvasTools = document.querySelector('.closeForCanvasTools');

let	bg_clr    = document.querySelector('.bg-clr'),
	bordr_clr = document.querySelector('.bordr-clr'),
	bordr_r   = document.querySelector('.bordr-r');


//Theme functions
bg_clr.addEventListener('input', () => {
	let new_bg_clr = bg_clr.value;
	canvas.style.backgroundColor = new_bg_clr;
});
bordr_clr.addEventListener('input', () => {
	let new_bordr_clr = bordr_clr.value;
	canvas.style.border = '1px solid'+ new_bordr_clr;
});
bordr_r.addEventListener('input', () => {
	let new_bordr_r = bordr_r.value;
	canvas.style.borderRadius = new_bordr_r + 'px';
});

function input(name, e, a){
	name = e.value;
	canvas.style.a = name + 'px';
}

for (let i = 0; i < basic_btn.length; i++) {
	basic_btn[i].onmousedown = function(){
		this.style.transform = 'scale(1.2)'; 
	}
	basic_btn[i].onmouseup = function(){
		this.style.transform = 'scale(1)'; 
	}
};

btnToOpenPaint.addEventListener('click', () => {
	forOpenBtn(paintTools);
});
closeForPaintTools.addEventListener('click', () => {
	forCloseBtn(paintTools);
});
btnToOpenCanvas.addEventListener('click', () => {
	forOpenBtn(canvasTools);
});
closeForCanvasTools.addEventListener('click', () => {
	forCloseBtn(canvasTools);
});

let index = 1;
function forOpenBtn(e){
	index++;
	e.style.left = 0;
	e.style.zIndex = index; 
}
function forCloseBtn(e){
	index = 1;
	e.style.left = -320 + 'px';
	e.style.zIndex = index; 
}


//main functions
const canvas = document.getElementById('cv'),
	  ctx	 = canvas.getContext('2d');

  //btn functions

let new_color = color.value,
	new_size  = range.value,
	pi        = Math.PI;


clear_btn.addEventListener('click', () => {
	ctx.clearRect(0, 0, 1000, 500);
});
color.addEventListener('input', () => {
	new_color = color.value;
});
range.addEventListener('input', () => {
	new_size  = range.value;
});

  //draw functions

window.addEventListener('keydown', function(e) { 
	if (e.keyCode === 67) {
		canvas.addEventListener('mousemove', draw);
	}else if(e.keyCode === 86){
		canvas.addEventListener('mousedown', function(e){
			
			canvas.addEventListener('mousemove', eraser_clear);
			canvas.addEventListener('mouseup', function(){
				this.removeEventListener('mousemove', eraser_clear);
			});
			
		});
	}
});
canvas.addEventListener('mousedown', function () {
	canvas.addEventListener('mousemove', draw);
	canvas.addEventListener('mouseup', function(){
		this.removeEventListener('mousemove', draw);
	});
});

function eraser_clear(e){
	this.removeEventListener('mousemove', draw);

	let x = e.offsetX,
		y = e.offsetY;

	ctx.clearRect(x, y, new_size, new_size);
}

function draw(e){
	let x = e.offsetX,
		y = e.offsetY;


	ctx.fillStyle = new_color;

	if (select[0].selected == true) {
		ctx.fillRect(x, y, new_size, new_size);
	};
	if(select[1].selected == true){
		ctx.beginPath();
		ctx.arc(x, y, new_size, 0, 2*pi, false);
		ctx.fill();
		ctx.closePath();
	};
}








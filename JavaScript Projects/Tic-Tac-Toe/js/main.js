window.addEventListener('load', game);


function game(){
	const box   = document.querySelector('.box'),
				inBox = document.querySelectorAll('.inBox');
	let count = 0,
		user = 'x';
	box.addEventListener('click', (e) => {
		if(e.target.className == 'inBox'){

			if(e.target.innerHTML == user){
				return true
			}

			if(count % 2 == 0){
				e.target.innerHTML = 'x';
				user = 'x';
			}else{
				e.target.innerHTML = '0';
				user = '0';
			}

			count++;

			if(inBox[0].innerHTML == user && inBox[1].innerHTML == user && inBox[2].innerHTML == user ||
				inBox[3].innerHTML == user && inBox[4].innerHTML == user && inBox[5].innerHTML == user || 
				inBox[6].innerHTML == user && inBox[7].innerHTML == user && inBox[8].innerHTML == user || 
				inBox[0].innerHTML == user && inBox[3].innerHTML == user && inBox[6].innerHTML == user || 
				inBox[1].innerHTML == user && inBox[4].innerHTML == user && inBox[7].innerHTML == user || 
				inBox[2].innerHTML == user && inBox[5].innerHTML == user && inBox[8].innerHTML == user || 
				inBox[0].innerHTML == user && inBox[4].innerHTML == user && inBox[8].innerHTML == user || 
				inBox[2].innerHTML == user && inBox[4].innerHTML == user && inBox[6].innerHTML == user ) {
				alert(user + ' победил');
				location.reload();
			}
			
		}
	});
}
//012
//345
//678
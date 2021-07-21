window.addEventListener('load', () => {
	window.addEventListener('keydown', (e) => {
		if(e.keyCode === 13){
			document.querySelector('input').value = eval(document.querySelector('input').value);
		}
	});
});
document.querySelector('#input').addEventListener('input',search);
document.querySelector('#btn').addEventListener('click',() => { recognizer.start(); });

function search(){
	let input = document.querySelector('#input').value.toUpperCase(),
      ul = document.querySelector('#myUl'),
      li = ul.getElementsByTagName('li');
	
	for (let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];
		if (a.textContent.toUpperCase().indexOf(input) > -1) {
				li[i].style.display = "";
		}else{
				li[i].style.display = "none";
		}
	}
}




let recognizer = new webkitSpeechRecognition();

recognizer.interimResults = true;
recognizer.lang = 'en-En';

recognizer.onresult = function (event) {
	let result = event.results[event.resultIndex];
	if (result.isFinal) {
		document.querySelector('#input').value = result[0].transcript;
		search();
	} else {
		document.querySelector('#input').value = result[0].transcript;
		search();
	}
};

function speech () {
	recognizer.start();
}






window.addEventListener('load', () => {

	const $ = el => document.querySelector(el);
	const $all = el => document.querySelectorAll(el);
	
	const randomize = arr => arr.sort(() => 0.5 - Math.random());
	
	const body = $('body'), 
	outer = $('.outer'), 
	settingsWrap = $('.settings__wrap'),
	settings = $('.settings'), 
	open = $('.settings__open'),
	close = $('.settings__close');
	

	const enAlphabet = 'abcdefghijklmnopqrstuvwxyz';
	const ruAlphabet = 'йцукенгшщзхъфывапролджэёячсмитьбю';


	if (localStorage.getItem('body-background')) {
		body.style.background = `${localStorage.getItem('body-background')}`;
	}
	if (localStorage.getItem('outer-background')) {
		outer.style.background = `${localStorage.getItem('outer-background')}`;
	}
	if (localStorage.getItem('outer-color')) {
		outer.style.color = `${localStorage.getItem('outer-color')}`;
	}
	if (localStorage.getItem('outer-size')) {
		outer.style.fontSize = `${localStorage.getItem('outer-size')}`;
	}


	//settings menu styling
	open.addEventListener('click', () => {
		settings.classList.add('main__dialog-active');
	});
	close.addEventListener('click', () => {
		settings.classList.remove('main__dialog-active');
	});


	const bodyBackground = $('.settings__input-background'),
		outerBackground = $('.settings__input-section'),
		outerColor = $('.settings__input-font'),
		plusSize = $('.plus__size'),
		minusSize = $('.minus__size'),
		settingsTitle = $('.settings__hgroup-title');

	let defaultSize = 25; 

	bodyBackground.addEventListener('input', () => {
		setSettings(bodyBackground.value, 'background', body, settingsWrap, 'body-background');
	});
	outerBackground.addEventListener('input', () => {
		setSettings(outerBackground.value, 'background', settingsTitle, outer, 'outer-background');
	});
	outerColor.addEventListener('input', () => {
		setSettings(outerColor.value, 'color', settingsTitle, outer, 'outer-color');
	});
	plusSize.addEventListener('click', () => {
		defaultSize += 3;
		setSettings(defaultSize + 'px', 'font-size', settingsTitle, outer, 'outer-size');

	});
	minusSize.addEventListener('click', () => {
		defaultSize -= 3;
		setSettings(defaultSize + 'px', 'font-size', settingsTitle, outer, 'outer-size');
	});

	function setSettings(input, styleName, firstElement, secondElement, localStorageName){
		firstElement.style[styleName] = `${input}`;
		secondElement.style[styleName] = `${input}`;
		localStorage.setItem(localStorageName, `${input}`);
	}
	//settings menu styling

	let defaultStrLength = 30;
	let defaultLang = enAlphabet;

	//form of letters amount in settings menu
	const strLengthInput = $('.settings__input-strLength'), 
		submitStrLength = $('.setLength-btn');

	submitStrLength.addEventListener('click', () => {
		if (Number(strLengthInput.value) > 50) {
			alert('Слишком большое число!');
		}else if(Number(strLengthInput.value) < 10){
			alert('Слишком маленькое число!');
		}
		localStorage.setItem('letters-amount', strLengthInput.value);
		initOuter(strLengthInput.value, defaultLang);
		settings.classList.remove('main__dialog-active');
	});

	if(localStorage.getItem('letters-amount')){
		strLengthInput.value = localStorage.getItem('letters-amount');
		defaultStrLength = localStorage.getItem('letters-amount');
	}
	//form of letters amount in settings menu


	//form of lang selecting is settings menu
	const langSelect = $('.settings__select'), 
		submitNewLang = $('.setLang-btn');

	langSelect.addEventListener('change', () => {
		if (langSelect.value == 'English') {
			defaultLang = enAlphabet;
		}else {
			defaultLang = ruAlphabet;
		}
		localStorage.setItem('language-select', langSelect.value);
		localStorage.setItem('language', defaultLang);
		initOuter(defaultStrLength, defaultLang);
	});

	if(localStorage.getItem('language')){
		defaultLang = localStorage.getItem('language');
	}
	if(localStorage.getItem('language-select')){
		langSelect.value = localStorage.getItem('language-select');
	}

	submitNewLang.addEventListener('click', () => {
		settings.classList.remove('main__dialog-active');
	});
	//form of lang selecting is settings menu
	
	function initOuter(lettersAmount, lang) {
		outer.innerHTML = '';
		lang = lang.split('');
		for (let i = 0; i < lettersAmount; i++) {
			const letter = randomize(lang)[0];
			let span = document.createElement('span');
			span.classList.add('outer__span');
			span.innerHTML += letter;
			outer.appendChild(span);
		}
		start();
	}
	initOuter(defaultStrLength, defaultLang);

	const resultWindow = $('.result'),
		mistakesSpan = $('.result__item-mistakes'),
		resultLetterPerMinutes = $('.result__item-speed'),
		resultClose = $('.result__close');



	function start(){
		
		let rightFlag = 0,
			wrongFlag = 0,
			startTimer;
	
		let span = $all('.outer__span');
		window.addEventListener('keydown', (e) => {
	
			if(e.key == span[rightFlag].textContent){
				span[rightFlag].classList.add('outer__span-active');
				rightFlag++;
			}else if(e.key != span[rightFlag].textContent && rightFlag){
				wrongFlag++;
			}
	
			if(rightFlag == 1) startTimer = Date.now();
	
			if(rightFlag == span.length){
				let endTimer = Date.now();
				let lettersPerMin = Math.round((60 / ((endTimer - startTimer) / 1000)) * defaultStrLength);
	
				mistakesSpan.textContent = wrongFlag;
				resultLetterPerMinutes.innerHTML = lettersPerMin;
	
				resultWindow.classList.add('main__dialog-active');
	
				resultClose.addEventListener('click', () => {
					location.reload();
				});
			}
		});
	}

});

window.addEventListener('load', () => {
	let questionsData = [
		{
			question: '1 + 1',
			a: '1',
			b: '2',
			c: '3',
			d: '4',
			correct: 'b'
		},
		{
			question: '1 + 2',
			a: '1',
			b: '2',
			c: '3',
			d: '4',
			correct: 'c'
		},
		{
			question: '1 + 3',
			a: '1',
			b: '2',
			c: '3',
			d: '4',
			correct: 'd'
		},
		{
			question: '2 + 2',
			a: '1',
			b: '2',
			c: '3',
			d: '4',
			correct: 'd'
		},
		{
			question: '2 + 1',
			a: '1',
			b: '2',
			c: '3',
			d: '4',
			correct: 'c'
		}
	];
	
	init();
	
	function init(){
		
		let flag = 0;
		
		const question = document.querySelector('.question'),
					a = document.querySelector('.label_a'),
					b = document.querySelector('.label_b'),
					c = document.querySelector('.label_c'),
					d = document.querySelector('.label_d');
		
		const allVarient = document.querySelectorAll('.test__variant-item');
		const submit_btn = document.querySelector('.test__box-subbtn');
		const result_box = document.querySelector('.result__box');
		
		let trueScore = 0,
			falseScore = 0;
		
		let activeQuestion;
		
		function initCard(){
				activeQuestion = questionsData[flag];
				question.innerText = activeQuestion.question;
				a.innerText = activeQuestion.a;
				b.innerText = activeQuestion.b;
				c.innerText = activeQuestion.c;
				d.innerText = activeQuestion.d;
			
		}
		
		initCard();
		
		submit_btn.addEventListener('click', () => {
			isCorrect();
			
			flag++;
			if(flag === questionsData.length){
				setResult();
				result_box.classList.add('result__box-active');
				result_box.querySelector('.result-subbtn').addEventListener('click', () => {
					location.reload();
				});
			}else{
				unCheck();
				initCard();		
			}
			
		});
		
		function isCorrect(){
				for(let i = 0; i < allVarient.length; i++){
					if(allVarient[i].checked == true && allVarient[i].id == activeQuestion.correct){
						trueScore++;
					}else if(allVarient[i].checked == true && allVarient[i].id != activeQuestion.correct){
						falseScore++;
					}
				}
			}
		
		function unCheck(){
			for(let i = 0; i < allVarient.length; i++){
				if(allVarient[i].checked == true){
					allVarient[i].checked = false;
				}
			}
		}
		
		function setResult(){
			const trueAnswer = document.querySelector('.result__wrap-write-answer');
			const falseAnswer = document.querySelector('.result__wrap-false-answer');
			
			trueAnswer.innerText += trueScore;
			falseAnswer.innerText += falseScore;
		}
		
		
	}
	
	
});

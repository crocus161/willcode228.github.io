window.addEventListener('load', () => {

    const $ = el => document.querySelector(el);
    const mixArray = arr => arr.sort(() => 0.5 - Math.random()); 
    
    const gameField = $('.card-wrapper');

    let score = 0,
        startTimer = 0,
        selectedCards = [],
        mainSymbolsArr = initGameField();

    gameField.addEventListener('click', (e) => {
        if(!e.target.classList.contains('card')) return;
        let card = e.target;

        //prevent double click on one card
        if(!selectedCards.includes(card)){
            card.classList.add('card-active');
            card.textContent = mainSymbolsArr[card.getAttribute('data-counter')];
            selectedCards.push({element: card, counter: card.getAttribute('data-counter')});
        }

        if(selectedCards.length == 2){
            let [a,b] = selectedCards;

            if(mainSymbolsArr[a.counter] == mainSymbolsArr[b.counter]){

                score++;
                if(score == 1){
                    startTimer = Date.now();
                }

                if(score == 9){
                    let endTimer = Date.now();
                    let resultTime = ((endTimer - startTimer) / 1000).toFixed(0);

                    resultGreeting(resultTime);

                    initGameField();
                }

                a.element.style.pointerEvents = 'none';
                b.element.style.pointerEvents = 'none';

            }else{
                setTimeout(() => {
                    a.element.classList.remove('card-active');
                    b.element.classList.remove('card-active');

                    a.element.textContent = '';
                    b.element.textContent = '';
                }, 500);
            }

            selectedCards = [];
        }

    });

    function initGameField() {

        score = 0;
        selectedCards = [];
        gameField.innerHTML = '';

        const allSymbols = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
        const gameSymbols = [];

        //18 cards on the game field so
        //9 different symbols is needed
        for(let i = 0; i < 9; i++){
            gameSymbolsInit();
        }

        //fill game field with cards
        for(let i = 0; i < 18; i++){
            gameField.innerHTML += `<div class="card" data-counter="${i}"></div>`;
        }

        function gameSymbolsInit() {
            let randSymbol = mixArray(allSymbols)[0];
            if(gameSymbols.includes(randSymbol)) gameSymbolsInit();
            else gameSymbols.push(randSymbol, randSymbol); 
        }

        return mixArray(gameSymbols);

    }

    function resultGreeting(time){

        if(localStorage.getItem('recordTime')){
            let record = Number(localStorage.getItem('recordTime'));

            if(record > time){
                localStorage.setItem('recordTime', time);
                alert(`New record!!!\nYou got this for ${time} seconds\nPrevious record was: ${record} seconds`);
            }else{
                alert(`You win!!!\nYou got this for ${time} seconds\nRecord is: ${record} seconds`);
            }

        }else{
            localStorage.setItem('recordTime', time);
            alert(`You win!!!\nYou got this for ${time} seconds`);
        }

    }

});

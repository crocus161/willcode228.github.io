window.addEventListener('load', () => {

    const players =  document.querySelectorAll('.player__indicator'),
        gameField = document.querySelector('.game__field'),
        scoreElement = document.querySelector('.score');

    const points = [1, 2, 3, -1, -2, -3];
    const scoreTable = {
        firstPlayer: 0,
        secondPlayer: 0
    };

    const greeting = name => name == 'firstPlayer' ? 'First' : 'Second'; 

    window.addEventListener('keydown', (e) => {
        let player;
        if(e.key == 'a') player = players[0];
        if(e.key == 'l') player = players[1];

        player.classList.add('pressed');

        let name = player.getAttribute('data-name');

        scoreTable[name] += Number(gameField.textContent);
        gameField.textContent = '';

        scoreElement.querySelector(`span[data-name=${name}]`).textContent = scoreTable[name];

        if(scoreTable[name] >= 10){
            alert(`${greeting(name)} Player Win!!!`);
            location.reload();
        }

        window.addEventListener('keyup', () => { 
            player.classList.remove('pressed');
        });
    });

    alert('Play game?');

    setInterval(() => {
        let randomizePoints = points.sort(() => 0.5 - Math.random());
        gameField.textContent = randomizePoints[0];
    }, 1800);

});
window.addEventListener('load', () => {

    const slider = document.querySelector('.slider-container'),
            before = document.querySelector('.container-before'),
            after = document.querySelector('.container-after');
    
    slider.addEventListener('mousemove', (e) => {
        let x = e.layerX;
        before.style.width = x + 'px';

        if(x < 50) before.style.width = '0px';
        if(x > 450) before.style.width = '480px';
    });

});
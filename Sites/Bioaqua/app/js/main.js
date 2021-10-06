window.addEventListener('load', () => {


    circlePriceText('.header__price');
    circlePriceText('.footer__price');

    function circlePriceText(selector) {
        const text = document.querySelector(selector);

        text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')

        const elements = text.querySelectorAll('span');
        for(let i = 0; i < elements.length; i++){
            elements[i].style.transform = `rotate(${i * 6}deg)`;
        }
    }

});

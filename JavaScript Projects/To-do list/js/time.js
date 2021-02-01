window.addEventListener('load', () => {

    //functions for easy element selecting
    const $ = elem => document.querySelector(`.${elem}`);

    const number = $('header__meta-date'),
            time = $('header__meta-progress');

    const get_date = () => {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date().getDay()];
    }
    number.innerText = `${new Date().getDate()}, ${get_date()}`;
});
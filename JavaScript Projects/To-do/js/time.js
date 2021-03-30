window.addEventListener('load', () => {

    //functions for easy element selecting
    const $ = elem => document.querySelector(`.${elem}`);

    const date = new Date();

    const week_name = $('header__meta-weekName'),
            month_name = $('header__meta-date .month'),
            number = $('header__meta-date .number');
            time = $('header__meta-progress');

    const get_week_day = () => {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    const get_mounth_name = () => {
        const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return month_names[date.getMonth()];
    }
    week_name.innerText = `${get_week_day()}`;
    number.innerText = `${date.getDate()}`;
    month_name.innerText = `${get_mounth_name()}`
});
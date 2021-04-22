const date = new Date();

const get_week_day = () => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}
const get_month_name = () => {
    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return month_names[date.getMonth()];
}

function getTime($){

    const week_name = $('header__meta-weekName'),
        month_name = $('header__meta-date .month'),
        number = $('header__meta-date .number');

            
    week_name.innerText = `${get_week_day()}`;
    number.innerText = `${date.getDate()}`;
    month_name.innerText = `${get_month_name()}` 
}

export default getTime;
   

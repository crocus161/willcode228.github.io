const $ = el => document.querySelector(el);

const start_btn = $('.start'),
    stop_btn = $('.stop'),
    reset_btn = $('.reset');

const minutes_el = $('.minutes'),
    seconds_el = $('.seconds'),
    milliseconds_el = $('.milliseconds'),
    arrow = $('.arrow');

let minutes = 0,
    seconds = 0,
    milliseconds = 0,
    flag = 0;

let interval;

start_btn.addEventListener('click', () => {
    flag++
    if(flag == 1){
        interval = setInterval(() => {
            milliseconds++;

            if(milliseconds >= 100){
                seconds += 1;
                milliseconds = 0;
            }

            if(seconds >= 60){
                minutes += 1;
                seconds = 0;
            }

            arrow.style.transform = `translateX(-50%) rotate(${((minutes * 6000) + (seconds * 100) + milliseconds) * 0.06}deg)`
            format(minutes_el, minutes);
            format(seconds_el, seconds);
            format(milliseconds_el, milliseconds);

        }, 10);
    }
    
});

stop_btn.addEventListener('click', () => {
    clearInterval(interval);
    flag = 0;
});

reset_btn.addEventListener('click', () => {
    flag = 0;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    arrow.style.transform = `translateX(-50%) rotate(0deg)`
    format(minutes_el, minutes);
    format(seconds_el, seconds);
    format(milliseconds_el, milliseconds);
});

function format(element, time) {
    element.innerText = time < 10 ? `0${time}` : time;
}

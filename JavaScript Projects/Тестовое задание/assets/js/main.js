window.addEventListener('load', () => {

    // preloader settings
    const preloader = document.querySelector('.loader__wrap');
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            preloader.style.display = 'none'
        }, 1500);
    }, 4000);
    // preloader settings
    

    //module form settings
    const close_module_btn = document.querySelectorAll('.module__window .close'),
            module = document.querySelectorAll('.module__window'),
            open_module_btn = document.querySelectorAll('.footer-link');
     
    //close module function 
    for(let i = 0; i < close_module_btn.length; i++){
        close_module_btn[i].addEventListener('click', () => {
            module[i].classList.remove('module-active');
        });
    }
    //open module function 
    for(let i = 0; i < open_module_btn.length; i++){
        open_module_btn[i].addEventListener('click', () => {
            module[i].classList.add('module-active');
        });
    }
    //module form settings

    //validation form settings
    const form = document.querySelector('.form'),
            day = form.querySelector('.day'),
            month = form.querySelector('.month'),
            year = form.querySelector('.year'),
            email = form.querySelector('.email'),
            name = form.querySelector('.name'),
            surname = form.querySelector('.surname'),
            male = form.querySelector('.male'),
            female = form.querySelector('.female');

    form.addEventListener('submit', (e) => {
        
        if(!email.value){
            e.preventDefault();
            document.querySelector('.error-email').style.opacity = 1;
            email.classList.add('input-error');
        } 
        if(!day.value || !month.value || !year.value){
            e.preventDefault();
            document.querySelector('.error-birth').style.opacity = 1;
            day.classList.add('input-error');
            month.classList.add('input-error');
            year.classList.add('input-error');
        }
        if(!name.value){
            e.preventDefault();
            document.querySelector('.error-name').style.opacity = 1;
            name.classList.add('input-error');
        } 
        if(!surname.value){
            e.preventDefault();
            document.querySelector('.error-surname').style.opacity = 1;
            surname.classList.add('input-error');
        }
        if(male.checked == false && female.checked == false){
            e.preventDefault();
            document.querySelector('.error-gender').style.opacity = 1;
            male.classList.add('input-error');
            female.classList.add('input-error');
        }

    });

});
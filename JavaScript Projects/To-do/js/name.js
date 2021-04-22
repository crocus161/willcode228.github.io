const name = ($) => {
    const title = $('header__title');
        //set name of the user
    if(localStorage.getItem('userName')){
        title.innerText = `Hello, ${localStorage.getItem('userName')} :)`;
    }else{
        let user_name = prompt('Hello. What is your name?', '');
        localStorage.setItem('userName', user_name);
        title.innerText = `Hello, ${localStorage.getItem('userName')} :)`;
    }
}

export default name;
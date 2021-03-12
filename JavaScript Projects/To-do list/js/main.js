window.addEventListener('load', () => {

    //functions for easy element selecting
    const $ = elem => document.querySelector(`.${elem}`);



    const preloader = $('loader__wrap'),
        main__wrapper = $('main');
    // preloader settings
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            main__wrapper.classList.add('main-active');
        }, 700);
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1500);
    }, 3000);
    // preloader settings



    //main arr that bring new task to local storage from update_data function
    let todos = [];


    const add_task_btn = $('main__form-btn'),
            tasks_list = $('main__body-list'),
            input = $('main__form-input');
    //function to create new task
    const create_task = task => {

        //main text var get input value
        let task_text = input.value;
        //if parameter was initialized main text var (task_text)
        //get value of parameter
        if (task) task_text = task;

        //if input is not empty
        if (task_text) {

            //write down new task text to the main arr
            todos.push(task_text);
            //remove null value and set it to the local storage
            update_data();

            //set counter value and text to the new task
            //check prefix value with function check_prefix
            const task_html = `<li class="body__list-item" data-task-counter="${todos.length}">
                            <button class="dell__task-btn main__task-btn">&#10004;</button>
                            <button class="change__task-btn main__task-btn">&#9998;</button>
                            ${check_prefix(task_text)}  
                        </li>`;

            //add new task
            tasks_list.innerHTML += task_html;
            //update tasks counter
            update_counter();
            //update progress value
            update_progress();
            //empty input 
            input.value = '';
        }
    }
    //function to create new task

    
    
    //settings of the buttons of task
    tasks_list.addEventListener('click', (e) => {

        //if you click on the any button of the task
        if(e.target.classList.contains('main__task-btn')){

            //get body__list-item parent of this btn
            let task_element = e.target.parentNode;
            //get body__list-item parent index of this btn
            let task_index = task_element.getAttribute('data-task-counter');

            //if you click on delete button
            if (e.target.classList.contains('dell__task-btn')) {
    
                //if button element was clicked and task classes has complete class
                //we change status this task to active and renewing his text in todos data
                if(task_element.classList.contains('completed')){

                    task_element.classList.remove('completed');

                    //return back the text of task
                    todos[task_index - 1] = task_element.getAttribute('data-text');

                    //change the sceen of the button
                    e.target.innerHTML = '&#10004;';
                }else{

                    //else we change status of this task to complete and overwrite task text in todos data
                    task_element.classList.add('completed');

                    //save task text if you will renewing the task
                    task_element.setAttribute('data-text', todos[task_index - 1]);

                    todos[task_index - 1] = null;

                    //change the sceen of the button
                    e.target.innerHTML = '&#8635;';
                }
    
            }
    
            //if you click on change text button
            if (e.target.classList.contains('change__task-btn')) {

                //new text of the class
                let new_task_text = prompt('Rewrite your task here', );

                //check the emptiness of the text
                if(!new_task_text) return false
                
                //rewrite the last task text
                todos[task_index - 1] = new_task_text;

                //delete last task text
                task_element.querySelector('span').remove();

                //add new task text
                task_element.innerHTML += check_prefix(new_task_text);

            }

            //update local storage
            update_data();
            //update tasks counter
            update_counter();
            //update progress value
            update_progress();
        }
        


    });




    //set task to local storage function
    const update_data = () => {
        let modified_data = todos.filter(item => item != null);
        localStorage.setItem('todos', JSON.stringify(modified_data));
    }



    //function that check different prefix for modify text of the task
    const check_prefix = task => {

        //list of regexp for all prefix 
        const link_reg_exp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
            important_text = /\!/g,
            question_text = /\?/g;

        //we used var result here because user can write a few prefixes at the same time in input 
        // \! and \? and \http
        //and if this happen text will be modified in all stations in order one by one
        //and in the end of the function will remove all prefixes 
        let result = `<span>${task}</span>`;

        //added yellow colour and replace all ? prefix
        if (question_text.test(task)) {
            task = task.replace(question_text, '');
            result = `<span class="question">${task}</span>`;
        }

        //added red colour and replace all ! prefix
        if (important_text.test(task)) {
            task = task.replace(important_text, '');
            result = `<span class="important">${task}</span>`;
        }

        //if the text will be a link we added a tag with href
        if ((link_reg_exp).test(task)) {
            result = `<span class="link"><a href="${task}" target="_blank">${task}</a></span>`;
        }

        return result;
    }
    //function that check different prefix for modify text of the task


    const tasks_counter = $('header__task-counter');
    //function that counting tasks end push the result to the DOM
    const update_counter = () => {
        let modified_data = todos.filter(item => item != null);
        if(modified_data.length == 0) tasks_counter.innerText = `not task`;
        else if(modified_data.length == 1) tasks_counter.innerText = `${modified_data.length} task`;
        else tasks_counter.innerText = `${modified_data.length} tasks`;
    }
    update_counter();
    //function that counting tasks end push the result to the DOM

    const progress = $('header-progress'),
        progress_title = $('header__progress-title');
    //update progress bar value function
    const update_progress = () => {

        let task_quantity = todos.length,
            completed_task_quantity = todos.filter(item => item == null).length;

        let completed_percent = (completed_task_quantity * 100 / task_quantity).toFixed(1);

        if(task_quantity == 0) completed_percent = 100;

        if (completed_percent == 100) progress_title.innerText = 'Wow! You have done all tasks!!!';
        else if(completed_percent == 0) progress_title.innerText = 'Completed 0.0% ¯\\_(ツ)_/¯';
        else progress_title.innerText = `You have done ${completed_percent}% of all tasks`;

        progress.setAttribute('value', completed_percent);
    }
    update_progress();
    //update progress bar value function

    /*Start functions*/

    //start create new task function and set it to local storage on click
    add_task_btn.addEventListener('click', () => { create_task() });
    //start create new task function and set it to local storage on enter keydown
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') create_task();
    });

    /*Start functions*/


    //set tasks from local storage to tasks_list
    if (localStorage.getItem('todos')) {
        let data = JSON.parse(localStorage.getItem('todos'));
        data.forEach(task => {
            create_task(task);
        });
    }

    const title = $('header__title');
    //set name of the user
    if(localStorage.getItem('userName')){
        title.innerText = `Hello, ${localStorage.getItem('userName')} :)`;
    }else{
        let user_name = prompt('Hello. What is your name?', '');
        localStorage.setItem('userName', user_name);
        title.innerText = `Hello, ${localStorage.getItem('userName')} :)`;
    }

});


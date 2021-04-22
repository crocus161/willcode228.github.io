import getTime from './time.js';
import preloader from './preloader.js';
import name from './name.js'
import update_counter from './task-counter.js'
import update_progress from './progress-counter.js'
import update_data from './update-data.js'
import check_prefix from './prefixer.js'

window.addEventListener('load', () => {
    
    //functions for easy element selecting
    const $ = elem => document.querySelector(`.${elem}`);

    //main arr that bring new task to local storage from update_data function
    let todos = [];

    //name init
    name($)
    //function for time streaming
    getTime($);
    //task count
    update_counter($, todos);
    //progress
    update_progress($, todos);
    //preloader init
    preloader($);

    
    const add_task_btn = $('main__form-btn'),
            tasks_list = $('main__body-list'),
            input = $('main__form-input');
    //function to create new task
    const create_task = task => {

        let task_text = input.value;
        if (task) task_text = task;

        if (task_text) {
            //write down new task text to the main arr
            todos.push(task_text);
            //remove null value and set it to the local storage
            update_data(todos);

            //set counter value and text to the new task
            //check prefix value with function check_prefix
            const task_html = `<li class="body__list-item" data-task-counter="${todos.length}">
                            <button class="dell__task-btn main__task-btn">&#10004;</button>
                            <button class="change__task-btn main__task-btn">&#9998;</button>
                            ${check_prefix(task_text)}  
                        </li>`;

            tasks_list.innerHTML += task_html;

            update_counter($, todos);
            update_progress($, todos);
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
            let task_index = task_element.getAttribute('data-task-counter');

            //if you click on delete button
            if (e.target.classList.contains('dell__task-btn')) {
    
                //if button element was clicked and task classes has complete class
                //we change status this task to active and renewing his text in todos data
                if(task_element.classList.contains('completed')){

                    task_element.classList.remove('completed');
                    //return back the text of task
                    todos[task_index - 1] = task_element.getAttribute('data-text');
                    //change the seen of the button
                    e.target.innerHTML = '&#10004;';
                }else{

                    task_element.classList.add('completed');
                    //save task text if you will renewing the task
                    task_element.setAttribute('data-text', todos[task_index - 1]);
                    todos[task_index - 1] = null;
                    //change the seen of the button
                    e.target.innerHTML = '&#8635;';
                }
    
            }
    
            //if you click on change text button
            if (e.target.classList.contains('change__task-btn')) {

                let new_task_text = prompt('Rewrite your task here', );

                if(!new_task_text) return false
                
                todos[task_index - 1] = new_task_text;

                task_element.querySelector('span').remove();
                task_element.innerHTML += check_prefix(new_task_text);

            }
            update_data(todos);
            update_counter($, todos);
            update_progress($, todos);
        }
        
    });


    /*Start functions*/

    add_task_btn.addEventListener('click', () => { create_task() });
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') create_task();
    });

    //set tasks from local storage to tasks_list
    if (localStorage.getItem('todos')) {
        let data = JSON.parse(localStorage.getItem('todos'));
        data.forEach(task => {
            create_task(task);
        });
    }

});


const update_counter = ($, data) => {
    const tasks_counter = $('header__task-counter');
    let modified_data = data.filter(item => item != null);
    if(modified_data.length == 0) tasks_counter.innerText = `not task`;
    else if(modified_data.length == 1) tasks_counter.innerText = `${modified_data.length} task`;
    else tasks_counter.innerText = `${modified_data.length} tasks`;
}
 export default update_counter;
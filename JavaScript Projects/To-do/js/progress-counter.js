const update_progress = ($, data) => {
    const progress = $('header-progress'),
        progress_title = $('header__progress-title');

    let task_quantity = data.length,
        completed_task_quantity = data.filter(item => item == null).length;

    let completed_percent = (completed_task_quantity * 100 / task_quantity).toFixed(1);

    if(task_quantity == 0) completed_percent = 100;

    if (completed_percent == 100) progress_title.innerText = 'Wow! You have done all tasks!!!';
    else if(completed_percent == 0) progress_title.innerText = 'Completed 0.0% ¯\\_(ツ)_/¯';
    else progress_title.innerText = `You have done ${completed_percent}% of all tasks`;

    progress.setAttribute('value', completed_percent);
}

export default update_progress;
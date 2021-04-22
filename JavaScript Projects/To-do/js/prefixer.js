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

export default check_prefix;
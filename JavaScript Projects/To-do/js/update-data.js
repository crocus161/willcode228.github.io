const update_data = (data) => {
    let modified_data = data.filter(item => item != null);
    localStorage.setItem('todos', JSON.stringify(modified_data));
}

export default update_data;
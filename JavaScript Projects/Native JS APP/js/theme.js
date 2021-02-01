//theme settings

let checkbox = document.querySelector('.check');
let body = document.querySelector('body');

    let menu = document.querySelector('.setting-menu');
    let white = document.querySelector('.white');
    let black = document.querySelector('.black');
    let tgl_btn = document.querySelector('.tgl-btn');
    let tools_item = document.querySelector('.tools-item');
    let scroll_bar = document.querySelector('.list-ul');

checkbox.onchange = () => {
    if(checkbox.checked){
        menu.style.background = '#ffffff';
        body.style.background = '#333333';
        body.style.color = '#ffffff';
        white.style.opacity = '0.3';
        black.style.opacity = '1';
        tgl_btn.style.background = '#ffffff'; 
        tgl_btn.style.color = '#333333'; 
    }else{
        tgl_btn.style.color = '#ffffff'; 
        tgl_btn.style.background = '#333333'; 
        menu.style.background = '#333333';
        body.style.background = '#ffffff';
        body.style.color = '#333333';
        black.style.opacity = '0.3';
        white.style.opacity = '1';  
    }
}
let menu_btn = document.querySelector('.menu-btn');
let set_menu = document.querySelector('.setting-menu')

menu_btn.onclick = () => {
    menu_btn.classList.toggle('men-active');
    set_menu.classList.toggle('set-active');
}

tgl_btn.onmouseover = () => {
    tgl_btn.classList.add('move');
}
tgl_btn.onmousedown = () => {
    tgl_btn.classList.remove('move');
}
tgl_btn.onmouseup = () => {
    tgl_btn.classList.add('move');
}


let checked = JSON.parse(localStorage.getItem('checkboxPosition'));
if (checked == true) {
    checkbox.checked = true;
} 
checkbox.onclick = () => {
    localStorage.setItem('checkboxPosition', checkbox.checked);
}
if (checked == true) {
    menu.style.background = '#ffffff';
        body.style.background = '#333333';
        body.style.color = '#ffffff';
        white.style.opacity = '0.3';
        black.style.opacity = '1';
        tgl_btn.style.background = '#ffffff'; 
        tgl_btn.style.color = '#333333'; 
}else{
    tgl_btn.style.color = '#ffffff'; 
    tgl_btn.style.background = '#333333'; 
    menu.style.background = '#333333';
    body.style.background = '#ffffff';
    body.style.color = '#333333';
    black.style.opacity = '0.3';
    white.style.opacity = '1';  
}








// main
let main_box = document.querySelector('.container-wrap');
let numOfList;
function toLocal() {
    let numOfList = main_box.innerHTML;
    localStorage.setItem('numOfList', numOfList);
}
tgl_btn.onclick = () => {

    let div = document.createElement('div');
    let title = document.createElement('p');
    let btnToAdd = document.createElement('input');
    let close = document.createElement('button');
    
    
    div.className = 'list';
    title.className = 'list-title';
    btnToAdd.className = 'btnToAdd';
    close.className = 'btn-close';


    btnToAdd.setAttribute('type', 'button');
    btnToAdd.setAttribute('value', 'Add');
    title.setAttribute('contenteditable', 'true');


    main_box.append(div);
    div.append(close);
    div.append(title);
    //div.append(btnToAdd);
    

    title.onkeyup = () => {
        toLocal();
    }


    btnToAdd.onmouseover = () => {
        btnToAdd.classList.add('move');
    }
    btnToAdd.onmousedown = () => {
        btnToAdd.classList.remove('move');
    }
    btnToAdd.onmouseup = () => {
        btnToAdd.classList.add('move');
    }

    let ulForList = document.createElement('ul');
    ulForList.className = 'list-ul';
    div.append(ulForList);
    ulForList.append(btnToAdd);


    
    btnToAdd.onclick = () => {

        let closeForLi = document.createElement('button'); 
        let liForList = document.createElement('li');
        let li2 = document.createElement('span');

        liForList.className = 'list-ul-li';
        closeForLi.className = 'li-close';
        li2.className = 'span';

        liForList.setAttribute('draggable', 'true');
        li2.setAttribute('contenteditable', 'true');


        ulForList.append(liForList);
        liForList.append(li2);
        liForList.append(closeForLi);
        toLocal();
        li2.onkeyup = () => {
            toLocal();
        }
        closeForLi.onclick = () => {
           li2.classList.add('line-through');
           liForList.style.opacity = '0';
           setTimeout(()=>{
            liForList.style.display = 'none';
            liForList.remove();
            toLocal();
            },500);
        }
        closeForLi.onmouseenter = () => {
            liForList.style.border = '1px solid rgba(60, 167, 60, 0.575)';
            liForList.style.borderBottom = '1px solid rgba(60, 167, 60, 0.575)';
        }
        closeForLi.onmouseleave = () => {
            liForList.style.border = '1px solid #333333';
            liForList.style.borderBottom = '1px solid #333333';
        }
    }
    close.onclick = (event) => {
        div.style.opacity = '0';
        setTimeout(()=>{
            div.style.display = 'none';
            close.parentElement.remove();
            event.stopPropagation();
            toLocal();
        },500);
    }    


    toLocal();
}


if(localStorage.getItem('numOfList')){
    main_box.innerHTML = localStorage.getItem('numOfList');
}










document.querySelector('.tgl-btn').onclick = () => {

    let div = document.createElement('div');
    let title = document.createElement('p');
    let btnToAdd = document.createElement('input');
    let close = document.createElement('button');
    
    
    div.className = 'list';
    title.className = 'list-title';
    btnToAdd.className = 'btnToAdd';
    close.className = 'btn-close';


    btnToAdd.setAttribute('type', 'button');
    btnToAdd.setAttribute('value', 'Add');
    title.setAttribute('contenteditable', 'true');


    main_box.append(div);
    div.append(close);
    div.append(title);
    

    title.onkeyup = () => {
        toLocal();
    }


    btnToAdd.onmouseover = () => {
        btnToAdd.classList.add('move');
    }
    btnToAdd.onmousedown = () => {
        btnToAdd.classList.remove('move');
    }
    btnToAdd.onmouseup = () => {
        btnToAdd.classList.add('move');
    }

    let ulForList = document.createElement('ul');
    ulForList.className = 'list-ul';
    div.append(ulForList);
    ulForList.append(btnToAdd);

    
    btnToAdd.onclick = () => {

        let closeForLi = document.createElement('button'); 
        let liForList = document.createElement('li');
        let li2 = document.createElement('span');

        liForList.className = 'list-ul-li';
        closeForLi.className = 'li-close';
        li2.className = 'span';

        liForList.setAttribute('draggable', 'true');
        li2.setAttribute('contenteditable', 'true');


        ulForList.append(liForList);
        liForList.append(li2);
        liForList.append(closeForLi);
        toLocal();
        li2.onkeyup = () => {
            toLocal();
        }
        closeForLi.onclick = () => {
           li2.classList.add('line-through');
           liForList.style.opacity = '0';
           setTimeout(()=>{
            liForList.style.display = 'none';
            liForList.remove();
            toLocal();
            },500);
        }
        closeForLi.onmouseenter = () => {
            liForList.style.border = '1px solid rgba(60, 167, 60, 0.575)';
            liForList.style.borderBottom = '1px solid rgba(60, 167, 60, 0.575)';
        }
        closeForLi.onmouseleave = () => {
            liForList.style.border = '1px solid #333333';
            liForList.style.borderBottom = '1px solid #333333';
        }
    }
    close.onclick = (event) => {
        div.style.opacity = '0';
        setTimeout(()=>{
            div.style.display = 'none';
            close.parentElement.remove();
            event.stopPropagation();
            toLocal();
        },500);
    }    

    toLocal();
}



let btc = document.querySelectorAll('.btn-close');
for (let i = 0; i < btc.length; i++) {
    btc[i].onclick = (e) => {
        btc[i].parentElement.style.opacity = '0';
        setTimeout(()=>{
            btc[i].parentElement.style.display = 'none';
            btc[i].parentElement.remove();
            toLocal();
        },500);
    }
}




let btc_li = document.querySelectorAll('.li-close');
for (let i = 0; i < btc_li .length; i++) {

    btc_li[i].onclick = () => {
        /* li2.classList.add('line-through'); */
        btc_li[i].parentElement.style.opacity = '0';
        setTimeout(()=>{
            btc_li[i].parentElement.style.display = 'none';
            btc_li[i].parentElement.remove();
            toLocal();
        },500);
    }
    btc_li[i].onmouseenter = () => {
        btc_li[i].parentElement.style.border = '1px solid rgba(60, 167, 60, 0.575)';
        btc_li[i].parentElement.style.borderBottom = '1px solid rgba(60, 167, 60, 0.575)';
    }
    btc_li[i].onmouseleave = () => {
        btc_li[i].parentElement.style.border = '1px solid #333333';
        btc_li[i].parentElement.style.borderBottom = '1px solid #333333';
    }
}



let btd = document.querySelectorAll('.btnToAdd');
for (let i = 0; i < btd.length; i++) {
    let ulForList = document.querySelector('.list-ul');
    ulForList.className = 'list-ul';
    btd[i].onclick = () => {

        let closeForLi = document.createElement('button'); 
        let liForList = document.createElement('li');
        let li2 = document.createElement('span');

        liForList.className = 'list-ul-li';
        closeForLi.className = 'li-close';
        li2.className = 'span';

        liForList.setAttribute('draggable', 'true');
        li2.setAttribute('contenteditable', 'true');


        btd[i].parentElement.append(liForList);
        liForList.append(li2);
        liForList.append(closeForLi);
        toLocal();
        li2.onkeyup = () => {
            toLocal();
        }
    }
    btd[i].onmouseover = () => {
        btd[i].classList.add('move');
    }
    btd[i].onmousedown = () => {
        btd[i].classList.remove('move');
    }
    btd[i].onmouseup = () => {
        btd[i].classList.add('move');
    }
}
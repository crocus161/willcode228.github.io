window.addEventListener('load', () => {

    //easy choosing element function
    const $ = elem => document.querySelector(`.${elem}`);
    const $_all = elem => document.querySelectorAll(`.${elem}`);
    // get randome number out of diapason
    const get_random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    const game_field = $('main__game-field'),
          dino_elem  = $('hero'),
          road       = $('road'),
          cloud_box  = $('cloud__box'),
          score_box  = $('score'),
          high_score_box = $('high_score');
    
    if(!localStorage.getItem('high_score')){
        localStorage.setItem('high_score', 0);
    }
    high_score_box.innerHTML = `Record: ${localStorage.getItem('high_score')}`;

    let clouds    = $_all('cloud'),
        cactus    = $_all('cactus');

    clouds_init();
    function clouds_init(){
        for(let i = 0; i < clouds.length; i++){
            x = get_random(120,680);
            y = get_random(0, 80);
            clouds[i].style.top = `${y}px`;
            clouds[i].style.left = `${x}px`;
        }
    }

    const fps = 100 / 20;

    let add_cactus_flag = 0;

    let dino_run_animation_progress = 1,
        dino_jump_flag = 0;

    let road_animation_progress = 0,
        clouds_animation_progress = 0;

    let score_point = 1,
        score_step = 1,
        game_step = 1.5;

    let cactus_data_animation_progress = [],
        cactus_data_start_point = [];

    let evil_type = [
        `<img src="img/Textures/cactus(1).png" alt="" srcset="">
        <img src="img/Textures/cactus(2).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(1).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(2).png" alt="" srcset="">
        <img src="img/Textures/cactus(1).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(1).png" alt="" srcset="">
        <img src="img/Textures/cactus(3).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(2).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(3).png" alt="" srcset="">
        <img src="img/Textures/cactus(1).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(3).png" alt="" srcset="">`,

        `<img src="img/Textures/cactus(1).png" alt="" srcset="">
        <img src="img/Textures/cactus(1).png" alt="" srcset="">`

    ];


    function evil_init(){
        for(let i = 0; i < cactus.length; i++){

            if(i == 0){
                let rand = get_random(850, 950);
                cactus_data_start_point[i] = rand;
            }else{
                let rand_num = get_random(150, 500);
                cactus_data_start_point[i] = cactus_data_start_point[i - 1] + rand_num;
            }

            evil_type = evil_type.sort((a,b) => Math.random() - 0.5);
            let randome_evil_type = evil_type[get_random(0, evil_type.length - 1)];

            cactus[i].style.left = `${cactus_data_start_point[i]}px`;
            cactus[i].innerHTML = randome_evil_type;
            cactus_data_animation_progress[i] = 0;   
        }
    }
    evil_init();

    //separetly function for run animation loop
    function dino_run_animation(){
        dino_run_animation_progress++
        if(dino_run_animation_progress == 4) dino_run_animation_progress = 1;
        dino_elem.style.backgroundImage = `url('img/T-Rex\ Animation/Dino-run(${dino_run_animation_progress}).png')`;
        
    }   
    let run__loop = setInterval(dino_run_animation, fps);
    //separetly function for run animation loop


    //moving settings
    window.addEventListener('keydown', (e) => {

        //stop changing the skin of dino on jump
        dino_jump_flag += 1;
        if(e.key == ' ' && dino_jump_flag == 1 || 
           e.key == 'ArrowUp' && dino_jump_flag == 1 || 
           e.key == 'w' && dino_jump_flag == 1){
            clearInterval(run__loop);
            dino_elem.style.backgroundImage = `url('img/T-Rex\ Animation/Dino-jump.png')`;
            dino_elem.classList.add('hero__jump');
            //resume changing of the skin
            setTimeout(() => {
                dino_elem.classList.remove('hero__jump');
                run__loop = setInterval(dino_run_animation, fps);
                //flag for one function start
                dino_jump_flag = 0;
            }, 500);
        }
    });
    //moving settings

    //main loop settings
    function loop(){

        game_step_settings()
        
        road_loop_settings();
        
        cloud_loop_settings();
        
        cactus_loop_settings();
        
        collision_settings();
        
        score_settings()
        
    }    
    let main__loop = setInterval(loop, fps);
    //main loop settings
    
    function game_step_settings(){
        game_step += 0.0001;
        if(game_step >= 3) game_step = 3;
    }

    function collision_settings(){
        for(let i = 0; i < cactus.length; i++){

            let hero_bottom = parseInt(window.getComputedStyle(dino_elem).bottom),
            cactus_left = parseInt(window.getComputedStyle(cactus[i]).left);

            if(hero_bottom < 50 && cactus_left >= 33 && cactus_left <= 65){

                clearInterval(run__loop);
                clearInterval(main__loop);

                dino_elem.style.backgroundImage = `none`;
                dino_elem.innerHTML = `<img src="img/T-Rex\ Animation/Dino-die.png" alt="">`

                local_storage_set_score();

                setTimeout(() => {
                    alert("You lose");
                    location.reload();
                }, 500)

            }
        }
    }

    function local_storage_set_score(){
        if(localStorage.getItem('high_score') < score_point){
            localStorage.setItem('high_score', Math.round(score_point).toFixed(0));
        }
    }

    function cactus_loop_settings(){
        let last_ind = cactus.length - 1;
        let last_cactus_left = parseInt(window.getComputedStyle(cactus[last_ind]).left);
        if(last_cactus_left <= -20){
            if(score_point >= 600){
                add_cactus();
            } 
            evil_init();
        }
        for(let i = 0; i < cactus.length; i++){
            cactus[i].style.left = `${parseInt(cactus_data_start_point[i]) + cactus_data_animation_progress[i]}px`;
            cactus_data_animation_progress[i] -= game_step;
        }
    }

    function road_loop_settings(){

        road.style.backgroundPositionX = `-${road_animation_progress}px`;
        road_animation_progress += game_step;

        if(parseInt(window.getComputedStyle(road).backgroundPositionX) <= -1000){
            road_animation_progress = 0;
        }
    }

    function cloud_loop_settings(){
        clouds_animation_progress += 0.5;
        cloud_box.style.right = `${clouds_animation_progress}px`;

        if(parseInt(window.getComputedStyle(cloud_box).right) >= 800){

            cloud_box.style.right = '-800px';
            clouds_init();
            clouds_animation_progress = -800;

        }
    }

    function score_settings(){
        score_step++;
        score_point = score_step * ((score_step/1000) * 0.01);
        score_box.innerHTML = `Score: ${(score_point).toFixed(0)}`;
    }
    
    function add_cactus(){
        add_cactus_flag++
        if(add_cactus_flag == 1){

            let div = document.createElement('div');
            div.className = 'cactus'

            game_field.appendChild(div);

            cactus = $_all('cactus');

        }
    }
});
window.addEventListener('load', () => {

    //easy choosing element function
    const $ = elem => document.querySelector(`.${elem}`);
    const $_all = elem => document.querySelectorAll(`.${elem}`);

    // get random number out of diapason
    const get_random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


    //choose main game objects
    const game_field = $('main__game-field'),
        dino_elem = $('hero'),
        road = $('road'),
        cloud_box = $('cloud__box'),
        score_box = $('score'),
        high_score_box = $('high_score');


    //if you don't play this game yet your high score == 0 
    if (!localStorage.getItem('high_score')) {
        localStorage.setItem('high_score', 0);
    }
    high_score_box.innerHTML = `Record: ${localStorage.getItem('high_score')}`;

    let clouds = $_all('cloud'),
        cactus = $_all('cactus');


    const fps = 100 / 20;

    let add_cactus_flag = 0;

    //animation stage(1-3) for real run animation
    let dino_run_animation_progress = 1,
        dino_jump_flag = 0;

    let road_animation_progress = 0,
        clouds_animation_progress = 0;

    let score_point = 1,
        score_step = 1,
        game_step = 1.5;

    //position of all cactuses
    let cactus_data_animation_progress = [],
        cactus_data_start_point = [];//start position of all cactuses

    //different type of cactus
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

    //init random position of cactus and push it to dom
    function evil_init() {
        for (let i = 0; i < cactus.length; i++) {

            if (i == 0) {
                //set first element position
                let rand = get_random(850, 950);
                cactus_data_start_point[i] = rand;
            } else {
                //others element position counter that defining the position of the previous element
                //and add random number to previous element position
                //so that there are no collision between previous and next cactus
                let rand_num = get_random(150, 500);
                cactus_data_start_point[i] = cactus_data_start_point[i - 1] + rand_num;
            }

            //randomly choose type of the cactus
            evil_type = evil_type.sort((a, b) => Math.random() - 0.5);
            let random_evil_type = evil_type[get_random(0, evil_type.length - 1)];

            //set cactus to the dom
            cactus[i].style.left = `${cactus_data_start_point[i]}px`;
            cactus[i].innerHTML = random_evil_type;
            cactus_data_animation_progress[i] = 0;
        }
    }
    evil_init();

    //set random clouds position and push it to the dom
    clouds_init();
    function clouds_init() {
        for (let i = 0; i < clouds.length; i++) {
            x = get_random(120, 680);
            y = get_random(0, 80);
            clouds[i].style.top = `${y}px`;
            clouds[i].style.left = `${x}px`;
        }
    }

    //separately function for run animation loop
    //if dino will jump loop will be clean and start after all jump animations
    function dino_run_animation() {
        dino_run_animation_progress++
        if (dino_run_animation_progress == 4) dino_run_animation_progress = 1;
        //set different pictures of dino to add run animation
        dino_elem.style.backgroundImage = `url('img/T-Rex\ Animation/Dino-run(${dino_run_animation_progress}).png')`;
    }
    let run__loop = setInterval(dino_run_animation, fps);
    //separately function for run animation loop


    //moving settings
    window.addEventListener('keydown', (e) => {

        //stop changing the skin of dino on jump
        dino_jump_flag += 1;
        if (e.key == ' ' && dino_jump_flag == 1 ||
            e.key == 'ArrowUp' && dino_jump_flag == 1 ||
            e.key == 'w' && dino_jump_flag == 1) {

            //stop animation of run
            clearInterval(run__loop);

            //set jump picture of dino
            dino_elem.style.backgroundImage = `url('img/T-Rex\ Animation/Dino-jump.png')`;
            dino_elem.classList.add('hero__jump');

            //resume changing of the skin
            setTimeout(() => {

                dino_elem.classList.remove('hero__jump');
                //start run animation

                run__loop = setInterval(dino_run_animation, fps);
                //flag for one function start

                dino_jump_flag = 0;
            }, 500);
        }
    });
    //moving settings

    //main loop settings
    function loop() {

        game_step_settings()

        road_loop_settings();

        cloud_loop_settings();

        cactus_loop_settings();

        collision_settings();

        score_settings()

    }
    let main__loop = setInterval(loop, fps);
    //main loop settings

    function game_step_settings() {

        //change score step after increase the long of the way
        //that dino run
        game_step += 0.0001;

        //set max speed
        if (game_step >= 3) game_step = 3;
    }

    function collision_settings() {
        for (let i = 0; i < cactus.length; i++) {

            let hero_bottom = parseInt(window.getComputedStyle(dino_elem).bottom),
                cactus_left = parseInt(window.getComputedStyle(cactus[i]).left);

            if (hero_bottom < 50 && cactus_left >= 33 && cactus_left <= 65) {
                //after collision

                //stop all game loop
                clearInterval(run__loop);
                clearInterval(main__loop);

                //picture "die" of the dino
                dino_elem.style.backgroundImage = `none`;
                dino_elem.innerHTML = `<img src="img/T-Rex\ Animation/Dino-die.png" alt="">`

                //set new high score if this is bigger that previous 
                local_storage_set_score();

                //game over message and reload the game
                setTimeout(() => {
                    alert("You lose");
                    location.reload();
                }, 500)

            }
        }
    }

    //new high score set to the local storage
    function local_storage_set_score() {
        if (localStorage.getItem('high_score') < score_point) {
            localStorage.setItem('high_score', Math.round(score_point).toFixed(0));
        }
    }

    //moving cactuses to the dino
    function cactus_loop_settings() {

        let last_ind = cactus.length - 1;
        let last_cactus_left = parseInt(window.getComputedStyle(cactus[last_ind]).left);

        if (last_cactus_left <= -20) {
            if (score_point >= 600) {
                add_cactus();
            }
            //if last cactus position is out of the game field
            //reload cactuses position
            evil_init();
        }

        //loop for moving all cactus to the dino
        for (let i = 0; i < cactus.length; i++) {
            cactus[i].style.left = `${parseInt(cactus_data_start_point[i]) + cactus_data_animation_progress[i]}px`;
            cactus_data_animation_progress[i] -= game_step;
        }
    }

    //moving road loop
    function road_loop_settings() {

        road.style.backgroundPositionX = `-${road_animation_progress}px`;
        road_animation_progress += game_step;

        if (parseInt(window.getComputedStyle(road).backgroundPositionX) <= -1000) {
            road_animation_progress = 0;
        }
    }

    //moving cloud to the dino
    function cloud_loop_settings() {
        clouds_animation_progress += 0.5;
        cloud_box.style.right = `${clouds_animation_progress}px`;

        if (parseInt(window.getComputedStyle(cloud_box).right) >= 800) {
            //if wrapper of clouds is out of the game filed
            //reload clouds position
            //reload wrapper position
            cloud_box.style.right = '-800px';
            clouds_init();
            clouds_animation_progress = -800;

        }
    }

    //change score
    function score_settings() {
        score_step++;
        score_point = score_step * ((score_step / 1000) * 0.01);
        score_box.innerHTML = `Score: ${(score_point).toFixed(0)}`;
    }

    //function to add more cactus
    function add_cactus() {
        add_cactus_flag++
        if (add_cactus_flag == 1) {

            let div = document.createElement('div');
            div.className = 'cactus'

            game_field.appendChild(div);

            cactus = $_all('cactus');

        }
    }
});
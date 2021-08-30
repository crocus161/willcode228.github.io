# willcode228.github.io
Всем привет, здесь, в основном, будут храниться проекты по верстке. 
И некоторые проекты на JavaScript (Документация к ним будет написана в самих проектах).
Представленные в этом репозитории проекты по верстке - лендинги.


                                Документация к проектам по верстке
                                
Данные лендинги представленные в троих различных файловых структурах, о которых я сейчас расскажу.

Первая структура(самая легкая) - использовал я ее для простеньких однодневных проектов.

        index.html
        js/
          main.js or script.js
        css/
          style.css
          blocks/
            Отдельные файлы с css кодом
        img/
        libs/
          Здесь я ложил все библиотеки, которые использовал
  
  
  
Вторая структура - использовал я ее для средних по размерам проектах.

        index.html
        js/
          main.js or script.js
        css/
          style.css
          style.map.css
        sass/
          style.sass
          blocks/
            Отдельные файлы с sass кодом
        img/
        libs/
          Здесь я ложил все библиотеки, которые использовал
          
Компиляция sass в таких проектах происходила с помощью расширения редактора кода Live Sass Compiller


Третья структура - использовал я ее в основном для больших или средних проектов.

    app/(исходный код)
     index.html
          js/
            app.min.js
            main.js or script.js
          css/
            style.min.css
          sass/
            style.sass
            blocks
              Отдельные файлы с sass кодом
          img/
            dist/
              Сюда складывались уже минифицированные картинки
            src/
              Исходные картинки
          libs/
            Здесь я ложил все библиотеки, которые использовал
      dist
        Сдесь ложились только минифицированные и оптимизированный файлы с таким же расположением как и в app
        
        
        
Здесь я расскажу об общих чертах своих проектов.


  -Во всех проектах используется BEM методология;
  

  -Все главные стили находятся в файлах variables.(sass,css) и interface.(sass,css);
  

  -Именование переменных css происходит с помощью разделения значений на главную(main) ветку и второстепенную(secondary),
  или к главной ветке не добавляется определяющий префикс, а к второстепенной добавляется;
  
  Например:
  
      //******** COLOURS *********//

      //main
      $white: #FFFFFF
      $black: #002B40
      $grey: #5E7177
      $accent: #00755F

      //secondary
      $secondary-black: #032736
      $secondary-grey: #EFF2F3
      $secondary-accent: #72BF00

      //******** COLOURS *********//

      //******** TRANSITIONS *********//
      $fast-transition: 0.3s
      $medium-transition: 0.5s
      $low-transition: 0.7s
      //******** TRANSITIONS *********//

      //******** SHADOWS *********//
      $shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
      $secondary-shadow: 3px 3px 20px $black
      //******** SHADOWS *********//

  -Одинаково именовались некоторые html элементы проектов:
  
    - p добавлялся класс с префиксом -info or __info, и главный класс main__info or info
    
    - h2,h3,h4,h5,h6 получали класс с префиксом -titke or __title, и главный класс main__title or title
      или если это были припеси к главным заголовкам блоков -subtitle or __subtitle и главный класс main__subtitle or subtitle
    
    - button получали класс с префиксом -btn or __btn, и главный класс main__btn or btn
    
    - a получали класс с префиксом -link or __link, и главный класс main__link or link
    
    - названия главных классов, как видно, тоже могли разделятся на главные и побочные с разными префиксами
    
    - названия файлов с картинками определялись по их смысловому значению 
      или просто разделялись по папкам(на отдельный блок) и назывались одинаковым именем с нумерацией

 

Здесь я оставлю ссылочки на каждый лендинг:

  Древние проекты:
  
  -https://willcode228.github.io/Air%20One%20Page/
  
  -https://willcode228.github.io/B&W/
  
  -https://willcode228.github.io/Creatives/
  
  -https://willcode228.github.io/Jewelery/
  
  -https://willcode228.github.io/Mogo/
  
  -https://willcode228.github.io/Бухгалтерские%20услуги/
  

  Новые пректы

  -https://willcode228.github.io/Collibra/app/index.html
  
  -https://willcode228.github.io/New%20Providence/index.html
  
  -https://willcode228.github.io/Headphone/app/index.html
  
  -https://willcode228.github.io/Single%20Page/index.html
  
  -https://willcode228.github.io/Zen/index.html
  
  -https://willcode228.github.io/Thrive%20Talk/app/index.html
  
  -https://willcode228.github.io/Next%20Generation/index.html
  
  -https://willcode228.github.io/Indicorp/app/index.html
  
  -https://willcode228.github.io/Arka/app/index.html
  
  -https://willcode228.github.io/Mad%20Hatters/index.html
  
  -https://willcode228.github.io/Blank/app/index.html
  
  -https://willcode228.github.io/Over%20Love/app/index.html
  
  -https://willcode228.github.io/Vpn/app/index.html
  
  -https://willcode228.github.io/Universal/app/index.html
  
   
 А здесь на JS проекты:
 
  -https://willcode228.github.io/JavaScript%20Projects/After-before-slider/
  
  -https://willcode228.github.io/JavaScript%20Projects/Calculator/
  
  -https://willcode228.github.io/JavaScript%20Projects/Dino/
  
  -https://willcode228.github.io/JavaScript%20Projects/Faster%20game/
  
  -https://willcode228.github.io/JavaScript%20Projects/HTML5%20Geolocation/
  
  -https://willcode228.github.io/JavaScript%20Projects/Live%20search/
  
  -https://willcode228.github.io/JavaScript%20Projects/Paint/
  
  -https://willcode228.github.io/JavaScript%20Projects/Ping%20pong/
  
  -https://willcode228.github.io/JavaScript%20Projects/Quize/
  
  -https://willcode228.github.io/JavaScript%20Projects/Snake/
  
  -https://willcode228.github.io/JavaScript%20Projects/Speed%20of%20seal/
  
  -https://willcode228.github.io/JavaScript%20Projects/Stop%20watch/
  
  -https://willcode228.github.io/JavaScript%20Projects/Tic-Tac-Toe/
  
  -https://willcode228.github.io/JavaScript%20Projects/To-do/
  
  -https://willcode228.github.io/JavaScript%20Projects/Testing%20exersice/

  -willcode228.github.io/JavaScript Projects/Find the same/

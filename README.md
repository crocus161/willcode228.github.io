# crocus161.github.io

Hello everyone, this repository mainly contains my layout projects. Additionally, some projects in JavaScript are included (documentation for them is written within the projects). The layout projects presented in this repository are landing pages.

## Documentation for Layout Projects

These landing pages are presented in three different file structures, which I will describe now.

### First Structure (the simplest) - used for small, single-day projects

```
index.html
js/
  main.js or script.js
css/
  style.css
  blocks/
    Separate files with CSS code
img/
libs/
  Here I placed all the libraries I used
```

### Second Structure - used for medium-sized projects

```
index.html
js/
  main.js or script.js
css/
  style.css
  style.map.css
sass/
  style.sass
  blocks/
    Separate files with SASS code
img/
libs/
  Here I placed all the libraries I used
```

Compilation of SASS in these projects was done using the Live Sass Compiler extension for the code editor.

### Third Structure - used mainly for large or medium-sized projects

```
app/ (source code)
  index.html
  js/
    app.min.js
    main.js or script.js
  css/
    style.min.css
  sass/
    style.sass
    blocks/
      Separate files with SASS code
  img/
    dist/
      Minified images were stored here
    src/
      Original images
  libs/
    Here I placed all the libraries I used
dist/
  Only minified and optimized files were stored here with the same structure as in app
```

## Common Features of My Projects

- All projects use the BEM methodology.
- All main styles are located in variables.(sass,css) and interface.(sass,css) files.
- Naming of CSS variables is done by dividing values into main and secondary branches, or the main branch doesn't get a prefix while the secondary does.

For example:

```scss
//******** COLOURS *********//

//main
$white: #FFFFFF;
$black: #002B40;
$grey: #5E7177;
$accent: #00755F;

//secondary
$secondary-black: #032736;
$secondary-grey: #EFF2F3;
$secondary-accent: #72BF00;

//******** COLOURS *********//

//******** TRANSITIONS *********//
$fast-transition: 0.3s;
$medium-transition: 0.5s;
$low-transition: 0.7s;
//******** TRANSITIONS *********//

//******** SHADOWS *********//
$shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
$secondary-shadow: 3px 3px 20px $black;
//******** SHADOWS *********//
```

- Certain HTML elements are named consistently across projects:

  - `p` tags are given a class with the prefix `-info` or `__info`, and the main class `main__info` or `info`.
  - `h2`, `h3`, `h4`, `h5`, `h6` tags receive a class with the prefix `-title` or `__title`, and the main class `main__title` or `title`, or if they are subtitles for main block titles, `-subtitle` or `__subtitle` and the main class `main__subtitle` or `subtitle`.
  - `button` tags are given a class with the prefix `-btn` or `__btn`, and the main class `main__btn` or `btn`.
  - `a` tags are given a class with the prefix `-link` or `__link`, and the main class `main__link` or `link`.
  - Main class names can also be divided into main and secondary with different prefixes.
  - File names for images are determined by their semantic meaning or simply divided by folders (for a specific block) and named consistently with numbering.

## Here are the links to each landing page:

### Older Projects:

- [Air One Page](https://crocus161.github.io/Sites/Air%20One%20Page/)
- [B&W](https://crocus161.github.io/Sites/B&W/)
- [Creatives](https://crocus161.github.io/Sites/Creatives/)
- [Jewelry](https://crocus161.github.io/Sites/Jewelery/)
- [Mogo](https://crocus161.github.io/Sites/Mogo/)
- [Accounting Services](https://crocus161.github.io/Sites/Бухгалтерские%20услуги/)

### Newer Projects:

- [Collibra](https://crocus161.github.io/Sites/Collibra/app/index.html)
- [New Providence](https://crocus161.github.io/Sites/New%20Providence/index.html)
- [Headphone](https://crocus161.github.io/Sites/Headphone/app/index.html)
- [Single Page](https://crocus161.github.io/Sites/Single%20Page/index.html)
- [Zen](https://crocus161.github.io/Sites/Zen/index.html)
- [Thrive Talk](https://crocus161.github.io/Sites/Thrive%20Talk/app/index.html)
- [Next Generation](https://crocus161.github.io/Sites/Next%20Generation/index.html)
- [Indicorp](https://crocus161.github.io/Sites/Indicorp/app/index.html)
- [Arka](https://crocus161.github.io/Sites/Arka/app/index.html)
- [Mad Hatters](https://crocus161.github.io/Sites/Mad%20Hatters/index.html)
- [Blank](https://crocus161.github.io/Sites/Blank/app/index.html)
- [Over Love](https://crocus161.github.io/Sites/Over%20Love/app/index.html)
- [Vpn](https://crocus161.github.io/Sites/Vpn/app/index.html)
- [Universal](https://crocus161.github.io/Sites/Universal/app/index.html)

## JavaScript Projects:

- [After-before Slider](https://crocus161.github.io/JavaScript%20Projects/After-before-slider/)
- [Calculator](https://crocus161.github.io/JavaScript%20Projects/Calculator/)
- [Dino](https://crocus161.github.io/JavaScript%20Projects/Dino/)
- [Faster Game](https://crocus161.github.io/JavaScript%20Projects/Faster%20game/)
- [HTML5 Geolocation](https://crocus161.github.io/JavaScript%20Projects/HTML5%20Geolocation/)
- [Live Search](https://crocus161.github.io/JavaScript%20Projects/Live%20search/)
- [Paint](https://crocus161.github.io/JavaScript%20Projects/Paint/)
- [Ping Pong](https://crocus161.github.io/JavaScript%20Projects/Ping%20pong/)
- [Quiz](https://crocus161.github.io/JavaScript%20Projects/Quize/)
- [Snake](https://crocus161.github.io/JavaScript%20Projects/Snake/)
- [Speed of Seal](https://crocus161.github.io/JavaScript%20Projects/Speed%20of%20seal/)
- [Stopwatch](https://crocus161.github.io/JavaScript%20Projects/Stop%20watch/)
- [Tic-Tac-Toe](https://crocus161.github.io/JavaScript%20Projects/Tic-Tac-Toe/)
- [To-do](https://crocus161.github.io/JavaScript%20Projects/To-do/)
- [Testing Exercise](https://crocus161.github.io/JavaScript%20Projects/Testing%20exersice/)
- [Find the Same](https://crocus161.github.io/JavaScript%20Projects/Find%20the%20same/)

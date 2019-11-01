# iHome UX kit

### UX for iHome system based in Materialize Teclabs kit

<img align="left" width="80" height="80" src="https://raw.githubusercontent.com/akarsh/akarsh-seggemu-resume/master/akarsh%20seggemu%20resume/Assets/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60%403x.png" alt="Resume application project app icon">

[Follow these steps to coloring layout.](https://teclabs.com.br/html/ihome/)


## Usage
##### 1. Clone repository
``` bash
$ git clone https://github.com/RAR90/ihome
```
##### 2. Colors
[Follow these steps to coloring layout.](https://teclabs.com.br/html/materialize.teclabs/css-color.html)

##### 3. Grid
[Materialize Teclabs use your own grid system, reference is here.](https://teclabs.com.br/html/materialize.teclabs/css-grid.html)

##### 4. Forms
[Form inputs usage examples.](https://teclabs.com.br/html/materialize.teclabs/form-layouts.html)

##### 5. More, much more!
[See more than 80 UX tools.](https://teclabs.com.br/html/materialize.teclabs)

## Structure
##### 1. Project level custom styles and scripts

To write custom codes and styles in project level, use this files
```
app-assets/css/custom/custom.css
app-assets/js/custom/custom-script.js
```

##### 2. Page level scripts

Each page have plugin dependencies (JavaScript and Css) and your own CSS and JavaScript file, new pages must follow this pattern.

Ex.: home.php
```
app-assets/js/scripts/home.js
app-assets/css/pages/home.css
```

##### 3. Navigation

All menus and navegation components must be placed in `/menus` directory
```
app-includes/menus/aside-right.php
app-includes/menus/aside.php
app-includes/menus/header.php
```
# iHome UX kit

### UX for iHome system based in Materialize Teclabs kit
#### Features
1. Bootstrap & Jquery suport
2. Font Awesome suport
3. Google Fonts suport
4. Modularized Pattern
5. Styles and scripts minified
6. Theme file structure
7. Module create, copy and rename automatized
8. Gulp ready
9. Php includes based

## Install
#### 1. Clone repository
``` bash
$ git clone https://github.com/RafaelAntonioRibeiro/ProceduralWorkBench
```
#### 2. Configure gulpfile.js
**Change this line with your infos**
proxy: '`your-localhost-ip`:`your-http-port`/`your-project-folder`'

``` javascript
// /////////////////////////////////////////////////////////////////////
// DEFAULT ASSETS
// /////////////////////////////////////////////////////////////////////

/* Browsersync options */
var options = {
	proxy: 'your-localhost-ip:your-http-port/your-project-folder',
...
```
#### 3. Install dependencies
In project directory
``` bash
$ npm install
```
#### 4. Give scripts permissions
In project directory
``` bash
$ sudo chmod 777 create && sudo chmod 777 rename && sudo chmod 777 copy
```
## Usage
Replace `%content%` with one of command options and remove `%`.
If you are running gulp, stop it before execute this commands then run gulp again.
#### Create
``` bash
$ ./create %page or partial% my_partial
```
#### Copy
``` bash
$ ./copy %page or partial% original my_copy
```
#### Rename
``` bash
$ ./rename %page or partial% original_name new_name
```

## Recommendations
1. Use Revealing module pattern and handles in javascript modules
2. Use a Javascript lint (optional but...)
3. Images and files belonging partials or pages and that will be call on document must be in your own folder and referenced in css file by these rules:
``` css
{ background-image: url('../imgs/image.png'); }
```
4. Images and files that will be call by sql queries or belonging a content of you project must be in src/files and referenced in document by these rules:
``` html
<img src="files/image.png">
```
5. Make sure that css of your plugins have images and files correctly associated

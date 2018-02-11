# Angular 5 Image Gallery

Responsive image gallery designed for high resolution images.

The project consists of a gallery, a viewer and a script for image preparation.

Before using the gallery, you have to process all of your images that will be part of your gallery with the node.js script. The processed images will be stored to your applications assets or, if you'd like to, at a remote location. During runtime everything runs client-side and there is no separate server-side communication involved. The viewer takes care that an optimal image quality is served based on the device resolution.

## Demo

http://tharazgul.bplaced.net/

1. json example: 
```
{
		"raw": {
			"path": "http://localhost:8080/api/getImage/RAW/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 3000,
			"height": 4000
		},
		"dominantColor": "#a09d9a",
		"orientation": 8,
		"preview_xxs": {
			"path": "http://localhost:8080/api/getImage/XXS/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 225,
			"height": 300
		},
		"preview_xs": {
			"path": "http://localhost:8080/api/getImage/RAW/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 450,
			"height": 600
		},
		"preview_s": {
			"path": "http://localhost:8080/api/getImage/RAW/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 576,
			"height": 768
		},
		"preview_m": {
			"path": "http://localhost:8080/api/getImage/RAW/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 810,
			"height": 1080
		},
		"preview_l": {
			"path": "http://localhost:8080/api/getImage/RAW/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 1080,
			"height": 1440
		},
		"preview_xl": {
			"path": "http://localhost:8080/api/getImage/RAW/MjAxNy4wNi4yNiBMdWJsaW5cSU1HXzg3ODIuSlBH",
			"width": 1620,
			"height": 2160
		}
	}
```
2. rotation is applied only for raw(large) image, no rotation has been applied to thubnails as after resizig exif data could be missing. Css property image-orientation: from-image; could be used to apply rotation for thumbnails basig on exif
3. Be sure to swap width/height when tag_orientation is 6 or 8 in your json, as size calculation has not been changed 

## How to use the gallery in your project
### Pre-requirements
Install **node (>= 4.2.2)** and **graphicsmagick**: http://www.graphicsmagick.org/README.html#installation

### Embed in your project

#### 1. Install angular5-image-gallery

```bash
npm install git+https://github.com/tharazgul/angular5-image-gallery.git --save
```

#### 2. Import angular5-image-gallery in your Angular module

```javascript
imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  Angular5ImageGalleryModule <-----
],
```

#### 3. Import scripts (when using angular-cli uncomment these lines in polyfills.ts)

```javascript
import 'web-animations-js/web-animations.min';
import 'hammerjs/hammer';

import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';

import 'web-animations-js';
```
#### 4. Run convert script

```bash
node node_modules/angular2-image-gallery/convert.js <path/to/your/images>
```
Add a flag to define the order of the images inside the gallery

`-n` sort by file name (default)

`-d` sort chronologically by the original creation time (e.g. for coverages of a wedding)

`-c` sort by primary image color

Additional optional parameter to support multiple galleries. Add it if you want to put your images into a separate gallery.

`--gName=yourGalleryName` 

#### 5. Embed gallery in your template

```javascript
<gallery 
    [flexBorderSize]="3" 
    [flexImageSize]="7"
    [galleryName]="'yourGalleryName'" 
    (viewerChange)="yourNotificationFunction($event)">
</gallery>
```

All parameters are optional. You may play around on the demo site to find out what parameters suit your needs.

The viewerChange event notifies you when the viewer component gets opened or closed.

That's it, start your application and have a look!

## Fetching images from an external data source

If you'd like to know how you could fetch your images from an external data source [CLICK HERE](https://github.com/tharazgul/angular5-image-gallery/blob/master/docs/externalDataSource.md)

## I don't want to use the convert script and provide my own metadata JSON

This is possible, but not the intent of this project. Please [CLICK HERE](https://github.com/tharazgul/angular5-image-gallery/blob/master/docs/ownJSON.md)


## Troubleshooting

If the conversion process fails, make sure you have enough swap space provided.

If you experience any other issues, please raise an issue on GitHub.

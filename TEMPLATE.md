Paints
=======

A flexible lightweight Javascript color theme provider, designed with canvas in mind. Pick from a large number of color themes, generate as many colours as you need, then start using them in your project. Check out our [examples]() for some ideas.  

Check out a quick [demo](http://code-curve.github.io/paints/).

===

## Installation
### Browser
If you want to use palette in your browser, then simply grab the [production](palettejs.min.js) or [development](palettejs.js) scripts, embed them in your project and you are ready to use palette.
```js
var icey = paints('ice', 20);
```

### Node
Fire up npm and run `npm install palettejs` then require it and get started.
```js
var paints = require('paints');
var icey = paints('ice', 30);
```

## Getting started

Palette is a breeze to use

```js
paints('reds', 10);
```

This call would return an array of 10 hex colors from the _reds_
theme. Check out [themes](#themes) for a complete list of themes.

## Themes
{{#each themes}} - ![alt text](./themes/{{@key}}.png "{{@key}}")
{{@key}}{{/each}}

## Contributing

If you want to add a color scheme, clone this repo add your theme to src/themes.js, credit yourself with a comment. Run `node build.js` to update the README.md then send a pull request.

## How to develop a theme

Open a look in [themes.js](src/themes.js)  
The basic template for a theme is as follows.

```js
    'my-theme': function(x) {
        var r = 100;
        var g = x * 100;
        var b = 255;
        
        return [r, g, b];
    }
```

Your theme function must return an RGB color in the form of an array of length 3 for some value of x where `0 < x < 1`. If you want to use HSL instead of RGB, pass your RGB values to the `hslToRgb` method like so:

```js
    'my-theme': function(x) {
        var h = 100;
        var s = x * 100;
        var l = 255;
        
        return hslToRgb(r, g, b);
    }
```

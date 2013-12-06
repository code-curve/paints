var palette = require('./src/palette.js');
var themes = require('./src/themes.js');
module.exports = palette;

if(typeof window === 'object') {
    window.palette = palette;
    window.themes = themes;
}


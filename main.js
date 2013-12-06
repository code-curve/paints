var paints = require('./src/paints.js');
var themes = require('./src/themes.js');
module.exports = paints;

if(typeof window === 'object') {
    window.paints = paints;
    window.themes = themes;
}


var themes = require('./themes');
var util = require('./util');
var modes = require('./modes');

module.exports = function(name, quantity, shuffled) {
    var mode = modes.hex,
        theme = themes[name],
        colors = [];

    for(var i = 0; i < quantity; i++) {
        var rgb = theme(1 - i / quantity);

        // get rid of decimals
        for(var j = 0; j < rgb.length; j++) {
            rgb[j] = Math.floor(rgb[j]);
        }

        // pass these colors to the current
        // mode and push it into colors array
        colors.push(mode.apply(this, rgb));
    }
    
    if(shuffled) {
        colors = util.shuffle(colors);
    }

    return colors;
};



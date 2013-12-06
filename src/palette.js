var createColor = function(template, base) {
    base = base || 10;
    
    return function() {
        var locate = '$',
            color = arguments,
            // variable freezing hack
            tpl = template.substr(0);
        
        // template values in at $ locations
        for(var i = 0; i < color.length; i++) {

            var insert = color[i].toString(base);
            var find = locate + (i + 1);
            
            if(base == 16) {
                insert = util.pad(insert, 2);
            }
            
            tpl = tpl.replace(find, insert);
        }
        
        // fix some useful properties
        // to our color object
        var out = new String(tpl);
        out.rgb = color;
        out.r = color[0];
        out.g = color[1];
        out.b = color[2];
        
        return tpl;
    };
};

var modes = {
    hex: createColor('#$1$2$3', 16),
    rgb: createColor('rgb($1, $2, $3)')
};

module.exports = function(themeName, quantity, shuffled) {
    var mode = modes.hex,
        theme = themes[themeName],
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



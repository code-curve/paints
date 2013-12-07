/* As defined in the CSS3 specification 
http://www.w3.org/TR/2011/REC-css3-color-20110607/#hsl-color
*/

var hueToRgb = function(m1, m2, h) {
    if(h < 0) h = h + 1;
    if(h > 1) h = h - 1;
    if(h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if(h * 2 < 1) return m2;
    if(h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
    return m1;
};

var hslToRgb = function(h, s, l) {
    // scale down on entry
    h /= 360;
    s /= 100;
    l /= 100;

    var m2 = l < 0.5 ? l * (s + 1) : (l + s - l * s),
        m1 = l * 2 - m2,
        r = hueToRgb(m1, m2, h + 1 / 3),
        g = hueToRgb(m1, m2, h),
        b = hueToRgb(m1, m2, h - 1 / 3);

    // scale up on exit
    r *= 255;
    g *= 255;
    b *= 255;

    var color = [r, g, b];
    color.r = r;
    color.g = g;
    color.b = b;
    return color;
};

module.exports = {
    hslToRgb: hslToRgb
};var util = require('./util');

module.exports = function(template, base) {
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
;var format = require('./format');

module.exports = {
    hex: format('#$1$2$3', 16),
    rgb: format('rgb($1, $2, $3)')
};;var themes = require('./themes');
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


;var hslToRgb = require('./color').hslToRgb;

module.exports = {
    
    'reds': function(x) {
        var h = 0;
        var s = 40 + x * 30;
        var l = 30 + x * 20;
        return hslToRgb(h, s, l);
    },

    'greens': function(x) {
        var h = 90;
        var s = 40 + x * 30;
        var l = 30 + x * 20;
        return hslToRgb(h, s, l);
    },

    'blues': function(x) {
        var h = 220;
        var s = 40 + x * 30;
        var l = 30 + x * 20;
        return hslToRgb(h, s, l);
    },

    'greyscale': function(x) {
        var v = x * 255;
        return [v, v, v];
    },

    'ice': function(x) {
        return hslToRgb(180, 80, 60 + x * 40);
    },

    'fire': function(x) {
        var h = x * 30;
        var s = 80 + x * 20;
        var l = 20 + x * 50;
        return hslToRgb(h, s, l);
    },

    'earth': function(x) {
        var h = 0 + x * 100;
        var s = 50 + x * 20;
        var l = 20 + x * 50;
        return hslToRgb(h, s, l);
    },

    'pastel': function(x) {
        var h = x * 360;
        var s = 70;
        var l = 80;
        return hslToRgb(h, s, l);
    },

    'zurg': function(x) {
        var h = 200 + x * 160;
        var s = 80 + x * 20;
        var l = 20 + x * 50;
        return hslToRgb(h, s, l);
    },

    'monaLisa': function(x) {
        var h = 60 - x * 20;
        var s = 30;
        var l = 10 + x * 60;    
        return hslToRgb(h, s, l);
    },

    'sea': function(x) {
        var h = 180 + x * 40;
        var s = 30;
        var l = 50;    
        return hslToRgb(h, s, l);
    },

    'pond': function(x) {
        var h = 100 + x * 100;
        var s = 80;
        var l = 20;    
        return hslToRgb(h, s, l);
    },

    'stars': function(x) {
        var h, s, l;
        if(x > 0.1) {
            h = 200;
            s = x * 30 + 50;
            l = x * 20;    
        } else {
            h = 50;
            s = 90;
            l = 70 * (1 - x);
        }
        
        return hslToRgb(h, s, l);
    },

    'night': function(x) {
        var h = 220 + 60 * x;
        var s = 80;
        var l = 5 + 10 * x;     
        return hslToRgb(h, s, l);
    },

    'dream': function(x) {
        var h = 220 + x * 60;
        var s = x < 0.2 ? 0 : 90;
        var l = x < 0.2 ? 50     + x * 30 : 70;     
        return hslToRgb(h, s, l);
    },

    'avocado': function(x) {
        var h = 100 - x * 70;
        var s = 60;
        var l = 50;     
        return hslToRgb(h, s, l);
    },

    'morgul': function(x) {
        var h = 100 + x * 60;
        var s = 60;
        var l = x * 40;     
        return hslToRgb(h, s, l);
    },

   'rainbow': function(x) {
        var h = x * 500 % 360;
        var s = 100;
        var l = 60;     
        return hslToRgb(h, s, l);
    },
   'mirkwood': function(x) {
        var h = 100;
        var s = 100 * x;
        var l = x * 40;     
        return hslToRgb(h, s, l);
    },
   'rand2': function(x) {
        var h = Math.tan(x) * 360;
        var s = 40;
        var l = 40;     
        return hslToRgb(h, s, l);
    },
   'rand3': function(x) {
        var h = (x * 3) * 120;
        var s = (x * 2) * 50;
        var l = x * 100;     
        return hslToRgb(h, s, l);
    },


};
;module.exports = {
    pad: function(num, len) {
        while(num.length < len) {
            num = "0" + num;
        }
        return num;
    },
    shuffle: function(arr) {
        var idx = arr.length, tmp, rand;

        while(0 !== idx) {
            rand = Math.floor(Math.random() * idx);
            idx -= 1;
            tmp = arr[idx];
            arr[idx] = arr[rand];
            arr[rand] = tmp;
        }

        return arr;
    }
};
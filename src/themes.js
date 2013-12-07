var hslToRgb = require('./color').hslToRgb;

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

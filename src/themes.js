var themes = {
    // 
    reds: function(x) {
        var h = 0;
        var s = 40 + x * 30;
        var l = 30 + x * 20;
        return hslToRgb(h, s, l);
    },

    greens: function(x) {
        var h = 90;
        var s = 40 + x * 30;
        var l = 30 + x * 20;
        return hslToRgb(h, s, l);
    },

    blues: function(x) {
        var h = 220;
        var s = 40 + x * 30;
        var l = 30 + x * 20;
        return hslToRgb(h, s, l);
    },

    greyscale: function(x) {
        var v = x * 255;
        return [v, v, v];
    },

    ice: function(x) {
        return hslToRgb(180, 80, 60 + x * 40);
    },

    fire: function(x) {
        var h = x * 30;
        var s = 80 + x * 20;
        var l = 20 + x * 50;
        return hslToRgb(h, s, l);
    },

    earth: function(x) {
        var h = 0 + x * 100;
        var s = 50 + x * 20;
        var l = 20 + x * 50;
        return hslToRgb(h, s, l);
    },

    pastel: function(x) {
        var h = x * 360;
        var s = 70;
        var l = 80;
        return hslToRgb(h, s, l);
    },

    zurg: function(x) {
        var h = 200 + x * 160;
        var s = 80 + x * 20;
        var l = 20 + x * 50;
        return hslToRgb(h, s, l);
    },

    monaLisa: function(x) {
        var h = 60 - x * 20;
        var s = 30;
        var l = 10 + x * 60;    
        return hslToRgb(h, s, l);
    },

    sea: function(x) {
        var h = 180 + x * 40;
        var s = 30;
        var l = 50;    
        return hslToRgb(h, s, l);
    }

};

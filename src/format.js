var util = require('./util');

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

var themes = require('./src/themes');
var palette = require('./src/palette');
var handlebars = require('handlebars');
var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});

var src = 'TEMPLATE.md';
var dst = 'README.md';
var dir = __dirname + '/themes/';

var img = gm(dir + 'blank.png');
console.log(img);

for(var name in themes) {
    (function(img) {
        var colors = palette(name, 10);
        
        for(var i = 0; i < colors.length; i++) {
            console.log(colors);
            img.drawRectangle(i * 10, 0, 10, 10).fill(colors[i]);
        }
        
        img.write(dir + name + '.png', function(err) {
            if(err) throw err;
        });
    })(img);
}

// read in file
var source = fs.readFileSync(src).toString();
var template = handlebars.compile(source);
var out = template({themes: themes});

// write back to file
fs.writeFileSync(dst, out);

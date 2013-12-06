var themes = require('./src/themes');
var handlebars = require('handlebars');
var fs = require('fs');

var src = 'TEMPLATE.md';
var dst = 'README.md';

// read in file
var source = fs.readFileSync(src).toString();
var template = handlebars.compile(source);
var out = template({themes: themes});

console.log(out);
// write back to file
fs.writeFileSync(dst, out);

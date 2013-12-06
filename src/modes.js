var format = require('./format');

module.exports = {
    hex: format('#$1$2$3', 16),
    rgb: format('rgb($1, $2, $3)')
};
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

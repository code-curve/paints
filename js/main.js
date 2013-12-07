$(document).ready(function() {
    var sidebar = $('#themes');
    var id;
    for(var name in themes) {
        if(!id) id = name;
        sidebar.append(createTheme(name));
    }

    update(id);
});

var createTheme = function(name) {
    var colors = paints(name, 10);
    var swatches = $('<li class="theme"></li>');
    swatches.attr('id', name);     

    listen(swatches);

    var title = $('<div class="title"></div>"');
    title.html(name);
    swatches.append(title);
    
    
    for(var i = 0; i < colors.length; i++) {
        var swatch = createSwatch(name, colors[i]);
        swatches.append(swatch);
    }
   
    return swatches;
};

var createSwatch = function(name, bg) {
    var swatch = $('<div class="swatch"></div>');
    swatch.css('backgroundColor', bg);
    return swatch;
};


var listen = function(el) {
    $(el).mouseenter(function() {
        var id = $(el).attr('id');
        update(id);
    });
};

var update = function(id) {
    var colors = paints(id, 10);
    var json = JSON.stringify(colors);
    json = json.replace(/,/g, ',\n');
    $('#json').html(json);
    $('#theme').html(id);
    $('.block').each(function(idx, block) {
        $('<div id=""></div>theme').html(id);
        $(block).css('backgroundColor', colors[idx]);
    });
};

jQuery(document).ready(function($) {
    
    //inputs clear and restore value
    var el = $('input[type=text], input[type=email], textarea, input.header-search');
    el.focus(function(e) {
        if (e.target.value === e.target.defaultValue)
            e.target.value = '';
    });
    el.blur(function(e) {
        if (e.target.value === '')
            e.target.value = e.target.defaultValue;
    });

});
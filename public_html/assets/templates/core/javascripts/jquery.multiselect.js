/*
 * jQuery.fn.multiselect
 * --
 * http://www.1stwebdesigns.com/blog/development/multiple-select-with-checkboxes-and-jquery
 * --
 */
(function($){
	
$.fn.multiselect = function() {
    $(this).each(function() {
        var checkboxes = $(this).find("input:checkbox");
        checkboxes.each(function() {
            var checkbox = $(this);
            // Highlight pre-selected checkboxes
            if (checkbox.attr("checked")) {
                checkbox.parent().addClass("multiselect-on");}

            // Highlight checkboxes that the user selects
            checkbox.click(function() {
                if (checkbox.attr("checked")) {
                    checkbox.parent().addClass("multiselect-on");}
                else {
                   checkbox.parent().removeClass("multiselect-on");}
            });
        });
    });
};

})(jQuery);
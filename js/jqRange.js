
/*
* jqRange cross platform wrapper around the Text Selection API
* */
(function(window, $){
    var selection = window.getSelection() || document.selection.createRange();
    $.fn.jqRange = function(){}

    return{
        selection:selection
    }
})(window, jQuery, undefined);
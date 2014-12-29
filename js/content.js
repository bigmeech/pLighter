(function(window,$){
    var selection;

    //get page info
    var pageData = {};

    //Get text range selection
    var onRangeSelection = function(){
        if(window.getSelection){
            selection = window.getSelection();
        }

        chrome.runtime.sendMessage({command:"getTabInfo"},function(res){
            console.log(res)
        });

        chrome.runtime.sendMessage({command:"saveSelection"},function(res){
            console.log(res)
        });
    };
    $("body").on("mouseup",onRangeSelection)
})(window, jQuery, undefined)
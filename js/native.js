
var getTabInfo = function(){

};

var saveSelection = function(){

};

var default_action = function(){

}

var commands ={
    getTabInfo:getTabInfo,
    saveSelection:saveSelection,
    "default":default_action
}

chrome.runtime.onMessage.addListener(function(command, sender, res){
    commands[command]();
    res();
});
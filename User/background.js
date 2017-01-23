var active = false;
var textPre = "";

chrome.tabs.onActivated.addListener(function (activeInfo) { //при смене активной вкладки скр
    if (active) {
        chrome.tabs.sendRequest(activeInfo.tabId, {showBlocked: 1});
    }
    else {
        chrome.tabs.sendRequest(activeInfo.tabId, {hideBlocked: 1});
    }

});
var getActive=function(){return active;}
var changeActive=function(frodShow){
//chrome.browserAction.onClicked.addListener(function (tab) {

    active = frodShow;

    chrome.tabs.getSelected(null, function (tab) { //выбирается ид открытого таба, выполняется коллбек с ним
                                                //запрос  на сообщение
        if (active) {


            chrome.browserAction.setIcon({
                path: {
                    "19": "img/icon-19-2.png",
                    "38": "img/icon-38-2.png"
                }
            });
            chrome.tabs.sendRequest(tab.id, {showBlocked: 1});
        } else {
            chrome.browserAction.setIcon({
                path: {
                    "19": "img/icon-19.png",
                    "38": "img/icon-38.png"
                }
            });

            chrome.tabs.sendRequest(tab.id, {hideBlocked: 1});
        }
    });

}

chrome.tabs.onUpdated.addListener(function (tab) {

    if (active) {
        chrome.tabs.executeScript(null, {
            code: 'var showFrod = true;'
        }, function () {
            chrome.tabs.executeScript(null, {file: "adHider.js"});
        });
    }
    else {
        chrome.tabs.executeScript(null, {
            code: 'var showFrod = false;'
        }, function () {
            chrome.tabs.executeScript(null, {file: "adHider.js"});
        });
    }

});


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.setNumber) {
        chrome.browserAction.setBadgeText({tabId: sender.tab.id, text: String(request.setNumber)});
    }


    return true;
});

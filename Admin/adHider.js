// var chrome = false;
var frodCounter = 0;
//var showFrod = false;
var localvalues = Array();

function hideAdvert() {
    var post_root = document.getElementById("page_wall_posts");
    if (!post_root) post_root = document.getElementById("main_feed");
    if (post_root) {
        var posts = post_root.getElementsByClassName("post");
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].classList.contains("frod")) continue;
            if (posts[i].classList.contains("not_frod")) continue;
            var postContent = false;
            if (posts[i].getElementsByClassName("published_by_quote"))
                postContent = posts[i].getElementsByClassName("published_by_quote")[0];
            //console.log(postContent);
            if (!postContent)
                postContent = posts[i].getElementsByClassName("wall_post_text")[0];
            //console.log(postContent);
            if (postContent) {
                var frod = false;
                var postWeight = 0;

                var hasStreetLinks = postContent.getElementsByClassName("mem_link");
                for (var k = 0; k < hasStreetLinks.length; k++) {
                    //console.log(hasStreetLinks[k].innerText.toLowerCase());
                    if (hasStreetLinks[k].innerText.toLowerCase().indexOf("продолжение") > -1) {
                        frod = true;
                    }
                }

                var links = postContent.getElementsByTagName("a");
                var spans = postContent.getElementsByTagName("span");
                var adsclass = [];
                //var adsclass = posts[i].getElementsByClassName("wall_marked_as_ads")
                adsclass.push(posts[i].getElementsByClassName("wall_marked_as_ads"));
                adsclass.push(posts[i].getElementsByClassName("_ads_promoted_post_data_w"));
                adsclass.push(posts[i].getElementsByClassName("wall_text_name_explain_promoted_post"));
                var check = true;
                for (var jj = 0, len = adsclass.length; jj < len; jj++) {
                    if (adsclass[jj].length > 0) {
                        k = 2;
                        check = false;
                    }
                }
                if (((links.length == 0) || ((links.length == 1) && (spans.length == 1))) && (!posts[i].classList.contains("post_copy")) && (check)) {} else {
                    SearchBadIns();
                }

                function SearchBadIns() {
                    words = postContent.innerText.replace(/[^A-Za-zА-Яа-яЁё]/g, " ").toLowerCase().split(" ");
                    for (var j = 0; j < words.length; j++) {
                        if ((typeof localvalues[words[j]] != "undefined") && (words[j].length > 5)) { k += localvalues[words[j]]; }
                    }


                }
                if (k > 1) { frod = true; }
                if ((window.location.href.indexOf("vkblockford") > -1) && (k < 1)) {
                    delta = (2 - k) / words.length;
                    for (var j = 0; j < words.length; j++) {
                        if (words[j].length > 5) {
                            if (typeof localvalues[words[j]] != "undefined") {
                                localvalues[words[j]] += delta;
                                var serial = {};

                                serial[words[j]] = localvalues[words[j]];
                                database.ref('/').update(serial);
                            } else {
                                var serial = {};
                                localvalues[words[j]] = delta;
                                key = words[j];
                                value = localvalues[words[j]];
                                serial[words[j]] = localvalues[words[j]];

                                database.ref('/').update(serial);
                            }
                        }
                    }
                }
                if ((window.location.href.indexOf("vkblocknotford") > -1) && (k > 1)) {
                    delta = (k - 0.9) / words.length;
                    for (var j = 0; j < words.length; j++) {
                        if (words[j].length > 5) {
                            if (typeof localvalues[words[j]] != "undefined") {
                                localvalues[words[j]] -= delta;
                                if (localvalues[words[i]] < 0) { localvalues[words[i]] = 0 }
                                var serial = {};

                                serial[words[j]] = localvalues[words[j]];
                                database.ref('/').update(serial);
                            } else {

                            }
                        }
                    }
                }



                console.log(k);


                if (frod) {
                    posts[i].classList.add("frod");
                    posts[i].style.backgroundColor = "rgb(255, 193, 193)";
                    if (!showFrod)
                        posts[i].style.display = "none";
                    // posts[i].style.opacity ="0.7";
                    var repl = posts[i].getElementsByClassName("replies_wrap");
                    if (repl && repl.length) repl[0].style.display = "none";
                    frodCounter++;
                    chrome.extension.sendMessage({ setNumber: frodCounter }, function(response) {

                    });

                } else {
                    posts[i].classList.add("not_frod");
                }
            }
        }
    }
}

var runner = false;

var StorageArea = chrome.storage.local;
var appConfig = {};

var loadDefaults = function() {
    return {
        table_order: -1,
        live_tracking: true,
        cats: true,
        configured: false
    }
}

var getConfig = function() {
    StorageArea.get(function(data) {
        if (data.configured === undefined) {
            appConfig = loadDefaults();
        } else appConfig = data;
    });
}

var saveConfig = function() {
    StorageArea.set(appConfig, function() {
        getConfig();
    });
}


var resetFrodCounter = function() {
    chrome.extension.sendMessage({ setNumber: "" }, function(response) {
        // console.log(response.farewell);
    });
}

function showBlocked() {
    showFrod = true;
    var frod = document.getElementsByClassName("frod");
    console.log('showBlocked');
    if (frod)
        for (var i = 0; i < frod.length; i++) {
            frod[i].style.display = "block";
        }
}

function collectionContains(collection, searchText) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].innerText.toLowerCase().indexOf(searchText) > -1) {
            return true;
        }
        //console.log(collection[i].innerText.toLowerCase());
    }
    return false;
}

function hideBlocked() {
    showFrod = false;
    var frod = document.getElementsByClassName("frod");
    console.log('hideBlocked');
    if (frod)
        for (var i = 0; i < frod.length; i++) {
            frod[i].style.display = "none";
        }
}


chrome.extension.onRequest.addListener(function(request) {
    if (request.showBlocked) {
        showBlocked();

    }
    if (request.hideBlocked) {
        hideBlocked();
    }
});


function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.head.appendChild(script);
}

init = function() {
    resetFrodCounter();
    if (window.location.origin.indexOf("vk.com") > -1) {
        /*	if (localStorage.getItem("VKblock")==null)
        	{*/
        var config = {
            apiKey: "AIzaSyAT17MuBscIup_XUAJ4mm6-rTfa8s_XJwE",
            authDomain: "torrid-inferno-9382.firebaseapp.com",
            databaseURL: "https://torrid-inferno-9382.firebaseio.com",
            storageBucket: "torrid-inferno-9382.appspot.com",
            messagingSenderId: "163244159886"
        };
        try {
            firebase.initializeApp(config);
            email = "" /*adminFirebaseEmail*/ ;
            password = "" /*adminPassword*/ ;
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
            database = firebase.database();
            database.ref('/').update({ "зелибобаss": "10" });
            database.ref('/').once('value').then(function(snapshot) {
                var values = snapshot.val();

                localStorage.setItem("VKblock", JSON.stringify(values));

                // var load =JSON.parse(localStorage.getItem("VKblock"));
                //console.log(load);
            });
        } catch (err) { console.log(err); }
        //}
        localvalues = JSON.parse(localStorage.getItem("VKblock"));

        //console.log(load);

        if (runner != false) clearInterval(runner);

        runner = setInterval(function() {
            hideAdvert();
        }, 1500);

    }
}

init();
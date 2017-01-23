// var chrome = false;
var frodCounter = 0;
//var showFrod = false;
var localvalues=Array();
function hideAdvert() {
	var post_root = document.getElementById("page_wall_posts");
	if (!post_root) post_root = document.getElementById("main_feed");
	if (post_root) {
		var posts = post_root.getElementsByClassName("post");
		/*var totalLikes = post_root.getElementsByClassName("post_like_count");
		/*var publicLikes = 0;
		var avgLike = 0;
		if (totalLikes&&totalLikes.length) {
			for (var i = 0; i < totalLikes.length; i++) {
				var oneLike = parseInt(totalLikes[i].innerHTML);
				if (!isNaN(oneLike)) {
					publicLikes+=oneLike;
				}
			}
			avgLike = Math.ceil(publicLikes/totalLikes.length);
		}*/
		for (var i = 0; i <posts.length; i++) {
			if (posts[i].classList.contains("frod")) continue;
			if (posts[i].classList.contains("not_frod")) continue;
			var postContent = false;
			if ( posts[i].getElementsByClassName("published_by_quote"))
			postContent = posts[i].getElementsByClassName("published_by_quote")[0];
			 //console.log(postContent);
			if (!postContent)
			 postContent = posts[i].getElementsByClassName("wall_post_text")[0];
			 //console.log(postContent);
			if (postContent) {
				var frod = false;
				var postWeight = 0;
			
				/*var links = postContent.getElementsByTagName("a");
				var emoji = postContent.getElementsByClassName("emoji");
				if (emoji&&emoji.length) {
					postWeight-= emoji.length*5;
					if (emoji.length>3) postWeight-= 6;
				}
				var smile = postContent.getElementsByClassName("emoji_css");
				if (smile&&smile.length) postWeight-= smile.length*5;
				
				var isPlace = posts[i].getElementsByClassName("page_media_place_label");
				
				
				var hasImages = posts[i].getElementsByClassName("page_post_thumb_sized_photo");
				if (hasImages&&hasImages.length) hasImages = hasImages.length;
				else hasImages = 0;				


				var hasAudioWall = posts[i].getElementsByClassName("wall_audio");
				if (hasAudioWall&&hasAudioWall.length) hasAudioWall = true;
				else hasAudioWall = false;								
				
				if (hasAudioWall) postWeight+=30;
				
				var appPost = posts[i].getElementsByClassName("wall_post_source_default");
				if (appPost&&appPost.length) appPost = true;
				else appPost = false;				
				
				
				if(appPost) postWeight-=10;
				
				var publishedComment = posts[i].getElementsByClassName("published_comment");
				if (publishedComment&&publishedComment.length) publishedComment = true;
				else publishedComment = false;			


				var hasPoll = posts[i].getElementsByClassName("page_media_poll_wrap");
				if (hasPoll&&hasPoll.length) hasPoll = true;
				else hasPoll = false;				
				
				
				// var hasFiles = posts[i].getElementsByClassName("fl_l");
				// if (hasFiles&&hasFiles.length) {
					// hasFiles = hasFiles.length;
					 // postWeight+=hasFiles*25;
				// }
				// else hasFiles = 0;
				
				 // postWeight+=10;
				
				if (hasPoll) postWeight+=10;
				
				if (publishedComment) postWeight-=3;
				
				if (hasImages)  postWeight+=3;
				
				if (isPlace&&isPlace.length) {
					isPlace = true; 
					postWeight+=25;
				} else isPlace = false;			
				
				var isRepost = posts[i].classList.contains("post_copy");
				if (isRepost) postWeight-=20;
				
				var publishedWrap = posts[i].getElementsByClassName("published_by_wrap");
				if (publishedWrap&&publishedWrap.length) postWeight-=11;
				
				var samestLink = [];
				
				if (links&&links.length) {
					for (var j = 0; j < links.length; j++) {
						var url = links[j];

						if (url.text.indexOf("vk.cc/")!=-1) postWeight-=23;
						if (url.text.indexOf("#")===0) postWeight+=7;
						if (url.classList.contains("mem_link")) postWeight-=3;
						var href = url.getAttribute("href");
						// if (url.href!==url.innerHTML&&url.innerHTML.indexOf("@")==-1) {
							// postWeight-=9;
						// } 
						if (href) {
							if (href.indexOf("[section]=audio")!=-1) {
								postWeight+=25;
							}
							if (href.indexOf("section=search")!=-1) {
								postWeight+=25;
							}
							if (href.indexOf("vk.com/app")) {
								postWeight-=25;
							}
						}
						if (href&&href.indexOf("post=-")!=-1) postWeight-=10;
						if (url.innerHTML) {
							var n = url.innerHTML.match(/\d+/);
							if (n&&n.length) {
								var linkId = n[0];
								linkId = parseInt(linkId);
								if (!isNaN(linkId)&&linkId>0) {
									if (samestLink.indexOf(linkId)==-1) {
										samestLink.push(linkId);
									} else {
										postWeight-=20;
									}
								}
							}
						}
						// if (url.getAttribute("onclick").indexOf("showPhoto")!=-1) postWeight+=10;
					}
					if (links.length>3) postWeight+=links.length*12;
					if (links.length>2&&isRepost) postWeight-=links.length*11+8;
					if (links.length==1&&links[0].innerHTML.indexOf("vk.com")==-1) postWeight+= 7;
				} else {
					links = false;
					postWeight+=7;
				}
				
				var hasAudio = posts[i].getElementsByClassName("audio");
				if (hasAudio&&hasAudio.length>0) {
					hasAudio = hasAudio.length;
					postWeight+=hasAudio*7;
					if (hasAudio.length ==1&&isRepost) {
						postWeight-=10;
					}
				}
				else hasAudio = false;			
				
				var shares = parseInt(posts[i].getElementsByClassName("post_share_count")[0].innerHTML);
				var likes = parseInt(posts[i].getElementsByClassName("post_like_count")[0].innerHTML);
				if (likes*9<avgLike&&links.length) {
					postWeight-=20;
				}
				
				if (!isNaN(shares)&&!isNaN(likes)) {
					likes+=1;
					shares+=1;
					var ratio = likes/shares;
					if (ratio>9&&isRepost&&links) {
						postWeight-=15;
					}
				}

				var hasVideo = posts[i].getElementsByClassName("page_post_thumb_video");
				if (hasVideo&&hasVideo.length) {
					hasVideo = true;
					postWeight+=19;
					
					var duration = posts[i].getElementsByClassName("page_post_video_duration_text");
					if (duration&&duration.length) duration = duration[0];
					if (duration.innerHTML) {
						duration = duration.innerHTML.split(":");
						if (duration.length>2) postWeight+=15;
					}
				} else hasVideo = false;
				*/
				// if (links&&emoji&&emoji.length>1&&links.length>0&&!isPlace) {
					// frod = true;
				// }
				// if (hasVideo&&emoji&&emoji.length) frod = false;
				

/*
				
				var hasAlbum = posts[i].getElementsByClassName("wall_album");
				if (hasAlbum&&hasAlbum.length) {
					hasAlbum = true;
					postWeight+=15;
				}
				else hasAlbum = 0;
				
				
				var hasStreetLinks = posts[i].getElementsByClassName("mem_link");
				if (hasStreetLinks&&hasStreetLinks.length) hasStreetLinks = hasStreetLinks.length;
				else hasStreetLinks = 0;


				
				postWeight-=hasStreetLinks*7;
				*/
				
				// if (emoji&&emoji.length>2&&isRepost==true&&hasAudio==false) {
					// frod = true;
				// }
				// for (var j = 0; j < links.length; j++) {
					// var url = links[j];
					// if ((url.classList.contains("mem_link")&&hasStreetLinks==0)||(url.text.indexOf("vk.cc/")!=-1&&isRepost&&!hasAudio)) {
						// frod = true;
						// continue;
					// }
					// var href = url.getAttribute("href");
					
					// if (href&&href.indexOf("post=-")!=-1&&hasAudio==false) frod = true;
				// }
				// console.log(postWeight);
				// posts[i].getElementsByClassName("wall_text_name")[0].innerHTML = postWeight;

        




    var hasStreetLinks = postContent.getElementsByClassName("mem_link");
for (var k=0;k<hasStreetLinks.length;k++)
{
//console.log(hasStreetLinks[k].innerText.toLowerCase());
if( hasStreetLinks[k].innerText.toLowerCase().indexOf("продолжение") > -1 ) {
           frod=true; 
        }
}

var links = postContent.getElementsByTagName("a");
 var spans = postContent.getElementsByTagName("span");
if (((links.length==0)||((links.length==1)&&(spans.length==1)))&&(!posts[i].classList.contains("post_copy")))
{}
else{
	var adsclass = posts[i].getElementsByClassName("wall_marked_as_ads");
if (adsclass.length>0) {
	k=2;
}
else{
      var k=0;
SearchBadIns();


}
}
function SearchBadIns()
{
	words=postContent.innerText.replace(/[^A-Za-zА-Яа-яЁё]/g, " ").toLowerCase().split(" ");
	for (var j=0;j<words.length;j++)
	{
		if ((typeof localvalues[words[j]] != "undefined")&&(words[j].length>5))
		{k+=localvalues[words[j]];}
	}


}
if (k>1) {frod=true;}
 if ((window.location.href.indexOf("vkblockford")>-1)&&(k<1))
 {
	 delta=(2-k)/words.length;
	for (var j=0;j<words.length;j++)
	{if (words[j].length>5)
		{
		if (typeof localvalues[words[j]] != "undefined")
		 {
			 localvalues[words[j]]+=delta;
			var serial={};
			
			serial[words[j]]=localvalues[words[j]]; 
			   database.ref('/').update(serial); 
		 }
		 else{
				var serial={};localvalues[words[j]]=delta;
			 key=words[j];
			value=localvalues[words[j]];
			serial[words[j]]=localvalues[words[j]];
			 	
			   database.ref('/').update(serial); 
		 }
		}
	}
 }
 if ((window.location.href.indexOf("vkblocknotford")>-1)&&(k>1))
 {
	 delta=(k-0.9)/words.length;
	for (var j=0;j<words.length;j++)
	{if (words[j].length>5)
		{
		if (typeof localvalues[words[j]] != "undefined")
		 {
			 localvalues[words[j]]-=delta;
			 if (localvalues[words[i]]<0) {localvalues[words[i]]=0}
			var serial={};
			
			serial[words[j]]=localvalues[words[j]]; 
			   database.ref('/').update(serial); 
		 }
		 else{
				
		 }
		}
	}
 }



console.log(k);
				//if (postWeight<=71) frod = true;
				
				// console.log('showingFrod');
				// console.log(showFrod);
				
				if (frod) {
					posts[i].classList.add("frod");
					posts[i].style.backgroundColor="rgb(255, 193, 193)";
					if (!showFrod)
					posts[i].style.display="none";
					// posts[i].style.opacity ="0.7";
					var repl = posts[i].getElementsByClassName("replies_wrap");
					if (repl&&repl.length) repl[0].style.display = "none";
					frodCounter++;
					// console.log(chrome.runtime);
					// console.log(chrome.extension);
					chrome.extension.sendMessage({setNumber: frodCounter}, function(response) {
					  // console.log(response.farewell);
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
	StorageArea.get(function(data){
		if (data.configured === undefined) {
			appConfig = loadDefaults();
		} else  appConfig = data;
	});
}

var saveConfig = function() {
	StorageArea.set(appConfig,function(){
		getConfig();
	});
}


var resetFrodCounter = function() {
	chrome.extension.sendMessage({setNumber: ""}, function(response) {
		 // console.log(response.farewell);
	});
}

function showBlocked() {
	showFrod = true;
	var frod = document.getElementsByClassName("frod");
	console.log('showBlocked');
	if (frod) for (var i = 0; i<frod.length; i++) {
		frod[i].style.display = "block";
	}
}

function collectionContains(collection, searchText) {
    for (var i = 0; i < collection.length; i++) {
        if( collection[i].innerText.toLowerCase().indexOf(searchText) > -1 ) {
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
	if (frod) for (var i = 0; i<frod.length; i++) {
		frod[i].style.display = "none";
	}
}


chrome.extension.onRequest.addListener(function (request) {
	if (request.showBlocked) {
		showBlocked();
	
	}
	if (request.hideBlocked) {
		hideBlocked();
	}
});


function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

 init = function() {
	resetFrodCounter();
	if (window.location.origin.indexOf("vk.com")>-1) {
/*	if (localStorage.getItem("VKblock")==null)
	{*/
 var config = {
    apiKey: "AIzaSyAT17MuBscIup_XUAJ4mm6-rTfa8s_XJwE",
    authDomain: "torrid-inferno-9382.firebaseapp.com",
    databaseURL: "https://torrid-inferno-9382.firebaseio.com",
    storageBucket: "torrid-inferno-9382.appspot.com",
    messagingSenderId: "163244159886"
  };
try{
  firebase.initializeApp(config);
  email=""/*adminFirebaseEmail*/;
  password=""/*adminPassword*/;
  firebase.auth().signInWithEmailAndPassword(email,  password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  database = firebase.database();
  database.ref('/').update({"зелибобаss":"10"}); 
  database.ref('/').once('value').then(function(snapshot) {
var values = snapshot.val();

  localStorage.setItem("VKblock",JSON.stringify(values));
   
 // var load =JSON.parse(localStorage.getItem("VKblock"));
  //console.log(load);
  });
}
catch(err){console.log(err);}
	//}
	localvalues=JSON.parse(localStorage.getItem("VKblock"));

  //console.log(load);
		
		if (runner!=false) clearInterval(runner);
		
		runner = setInterval(function(){
			hideAdvert();
		},1500);

	}
}

init();

document.addEventListener("load", function() {
	document.onscroll = function(){
		var bliss = "http://i.imgur.com/HRmDOt0.gif";//"http://evinugur.com/dorite/doritesummerbreeze.gif";
		var whoaman = "http://i.imgur.com/1RdnEyE.jpg";//"http://evinugur.com/dorite/splashfire.jpg";
		var classes = ['_s0 _5xib _5sq7', 'UFIActorImage', 'tickerStoryImage', '_s0 _rw', '_s0 _rw', 'profilePhoto', '_s0 _50c7 _54rt'];
		for (var i = 0; i < classes.length; i++) {
			var arr = document.getElementsByClassName(classes[i]);
			for (var j = 0; j < arr.length; j++) {
				arr[j].src = bliss;
			}
		}
		var tricky = ['_55lt', '_5ys_', "_55lu"];
		for (var i = 0; i < tricky.length; i++) {
			var arr = document.getElementsByClassName(tricky[i]);
			for (var j = 0; j < arr.length; j++) {
				arr[j].children[0].src = bliss;
			}
		}
		if (document.getElementById("summerrain") === null) {
			var style = document.createElement("style");
			style.id = "summerrain";
			style.innerHTML  = "#globalContainer{background-repeat: repeat; background-image: url(" + whoaman + ");}";
			document.head.appendChild(style);
		}
	};
	
}, true);
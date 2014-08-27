document.addEventListener("load", function() {
	document.onscroll = function(){
		window.defined = undefined;
		var bliss = "http://evinugur.com/dorite/doritesummerbreeze.gif";
		var whoaman = "http://evinugur.com/dorite/splashfire.jpg";
		var classes = ['_s0 _5xib _5sq7', 'UFIActorImage', 'tickerStoryImage', '_s0 _rw', '_5ys_', '_s0 _rw'];
		for (var i = 0; i < classes.length; i++) {
			var arr = document.getElementsByClassName(classes[i]);
			for (var j = 0; j < arr.length; j++) {
				arr[j].src = bliss;
			}
		}
		var tricky = document.getElementsByClassName("_55lt");
		for (var i = 0; i < tricky.length; i++) {
			tricky[i].children[0].src = bliss;
		}
		var style = document.createElement("style");
		style.innerHTML  = "#globalContainer{background-repeat: repeat; background-image: url(" + whoaman + ");}";
		document.head.appendChild(style);
	};
	
}, true);

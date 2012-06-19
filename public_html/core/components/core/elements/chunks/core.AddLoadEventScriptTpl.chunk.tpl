<!-- addLoadEvent Function -->
<script type="text/javascript" >
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

// NOTE: register all the functions that need to run on page load here
// As in the example below
// addLoadEvent(nameOfSomeFunctionToRunOnPageLoad);
// addLoadEvent(function() {
      /* more code to run on page load */ 
// });

addLoadEvent(function() {
	//alert("add event load occurred!");
	/* Allows form expansion of message form field */
	$('textarea#message').autoResize();
});

addLoadEvent(function() {
	/* makes images ready for better css styling, */
	/* see webdesignerwall.com/tutorials/css3-image-styles-part-2 */
	$('#logo img').each(function() {
		var imgClass = $(this).attr('class');
		$(this).wrap('<span class="image-wrap ' + imgClass + '" style="width: auto; height: auto;"/>');
		$(this).removeAttr('class');
	});
});

addLoadEvent(function() {
	/* Turns elements with class 'media' into full object embedding */
	$('.media').media();
});

addLoadEvent(function() {
	/* Color the checkboxes in a multiselect */
	$('.multiselect').multiselect();
});

addLoadEvent(function() {
	/* The Orbit slider settings */
	$('#slider').orbit({
	animation: 'fade', 		// fade, horizontal-slide, vertical-slide, horizontal-push
	animationSpeed: 800, 		// how fast animations are
	timer: true, 			// true or false to have the timer
	advanceSpeed: 4000, 		// if timer is enabled, time between transitions 
	pauseOnHover: false, 		// if you hover pauses the slider
	startClockOnMouseOut: false, 	// if clock should start on MouseOut
	startClockOnMouseOutAfter: 1000,	// how long after MouseOut should the timer start again
	directionalNav: true, 		// manual advancing directional navs
	captions: true, 		// do you want captions?
	captionAnimation: 'none', 	// fade, slideOpen, none
	captionAnimationSpeed: 4000, 	// if so how quickly should they animate in
	bullets: true,			// true or false to activate the bullet navigation
	bulletThumbs: false,		// thumbnails for the bullets
	});
});

addLoadEvent(function() {
	/* Allows for making images size fluid */
	if (document.getElementById && document.getElementsByTagName) {
	var contentImgs = document.getElementById("content").getElementsByTagName("img");
	imgSizer.collate(contentImgs);
	var side_contentImgs = document.getElementById("side_content").getElementsByTagName("img");
	imgSizer.collate(side_contentImgs);
	var pagebox01Imgs = document.getElementById("pagebox01").getElementsByTagName("img");
	imgSizer.collate(pagebox01Imgs);
	var pagebox02Imgs = document.getElementById("pagebox02").getElementsByTagName("img");
	imgSizer.collate(pagebox02Imgs);
	var pagebox03Imgs = document.getElementById("pagebox03").getElementsByTagName("img");
	imgSizer.collate(pagebox03Imgs);
	var pagebox04Imgs = document.getElementById("pagebox04").getElementsByTagName("img");
	imgSizer.collate(pagebox04Imgs);
	var subpagesImgs = document.getElementById("subpages").getElementsByTagName("img");
	imgSizer.collate(subpagesImgs);
	var polaroidsImgs = document.getElementById("polaroids").getElementsByTagName("img");
	imgSizer.collate(polaroidsImgs);
	}
});
</script>
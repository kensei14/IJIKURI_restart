/**
 * @author Mack
 */

//(function($) {

$(document).ready(function() {
    //var pageWidth = $(window).width() || 1000;
    var pageWidth = document.documentElement.clientWidth || window.innerWidth || window.document.documentElement.clientWidth || window.outerWidth;
    var pageHeight = document.documentElement.clientHeight || window.innerHeight || window.document.documentElement.clientHeight || window.outerHeight;
    var screenWidth = window.outerWidth;
    var screenHeight = window.outerHeight;

    var logo = $("#logo");
    var logo_width = pageWidth * 0.35;

    //logo.css("height", parseInt(pageHeight * 0.4) + "px");
    logo.css({
    	width: parseInt(logo_width) + "px",
    	height: "auto",
    	left: parseInt(pageWidth/2 - logo_width/2) + "px",
    	top: parseInt(pageHeight * 0.2) + "px"
    });
	
    var a_elems = document.getElementsByTagName("a");
    for(var i=0; i < a_elems.length; i++) {
    	a_elems[i].addEventListener("click", scrollToAnchor, false);
    }
    
    setData(pageWidth, pageHeight);
    setModal();
    
    $("#img01").ready(function() {
		$("#global_container").fadeTo(2000, 1.0, function() { });
    });
    
});

var pre_scroll = -1; /* 前のイベントでのスクロール値 */
window.onscroll = function() {
	var scroll = document.body.scrollTop || document.documentElement.scrollTop;
	var rate;
		
	if (scroll > pre_scroll) {	// 下に向かっている 
		for(var i=1; i < fadeData.length; i++) {
			if ((scroll > fadeData[i][0]) && !fadeData[i][1]) {
		    	fadeData[i][1] = true;
				$(fadeData[i][2]).fadeTo(1000, 0.0, function() { $(this).css({display: "none"}); });
			}
		}

		if ((scroll > fadeData[0][0]) && !fadeData[0][1]) {
	    	fadeData[0][1] = true;
			//$(fadeData[0][2]).fadeTo(1000, 0.0, function() { $("#myheader").slideDown(10000); }) ;
			$("#logo").fadeTo(1000, 0.0, function() { $("#global_container").css({display: "none"}) });
			$(fadeData[0][2]).fadeTo(1000, 0.0, function() { $("#myheader").slideDown('normal', 'swing'); $(this).css({display: "none"});  }); //なぜかcssで min-width, min-heightを指定すると動かない。
		}
		
	} else { //上に向かっている
		for(var i=1; i < fadeData.length; i++) {
			if ((scroll < fadeData[i][0]) && fadeData[i][1]) {
		    	fadeData[i][1] = false;
				$(fadeData[i][2]).fadeTo(1000, 1.0, function() { });    		
			}    		
		}
	}
	pre_scroll = scroll;
	
	obj1.scrolling(scroll);
	obj2.scrolling(scroll);
	obj3.scrolling(scroll);
	obj4.scrolling(scroll);
}

function scrollToAnchor(event) {	
	event.preventDefault();

	var anchor  = $(this).attr('href');
	switch(anchor) {
		case '#About':
			scrollTo(0, fadeData[2][0] + 10);
			break;
		case '#Members':
			scrollTo(0, fadeData[5][0] + 10);
			break;
		case '#Works':
			break;
		case '#Contact':
			break;
		default :
			break;
	}
						
	return false;
}

//背景のフェード値
var fadeData =  [
	[500, false, "#img01"],
	[1000, false, "#img02_01"],
	[1500, false, "#img02_02"],
	[3500, false, "#img02_03"],
	[4000, false, "#img03_01"],
	[4500, false, "#img03_02"],
	[6000, false, "#img03_03"]
]

//})(jQuery);

/**
 * @author Mack
 */

var pageWidth, pageHeight;
var member_lock = {
	lock: false,
	pos_origin: 0
};

//(function($) {
$(document).ready(function() {
    //var pageWidth = $(window).width() || 1000;
    pageWidth = document.documentElement.clientWidth || window.innerWidth || window.document.documentElement.clientWidth || window.outerWidth;
    pageHeight = document.documentElement.clientHeight || window.innerHeight || window.document.documentElement.clientHeight || window.outerHeight;

	//ロゴ
    var logo = $("#logo");
    var logo_width = pageWidth * 0.35;
    logo.css({
		width: parseInt(logo_width) + "px",
		height: "auto",
		left: parseInt(pageWidth/2 - logo_width/2) + "px",
		top: parseInt(pageHeight * 0.2) + "px"
    });

	//menu_barのクリック時
    var a_elems = document.getElementsByTagName("a");
    for(var i=0; i < a_elems.length; i++) {
    	a_elems[i].addEventListener("click", scrollToAnchor, false);
    }
    
    //コンテンツの生成
    setContents(pageWidth, pageHeight);
    setModal();
    setAnim();
    
    $("#img01").ready(function() {
		$("#global_container").fadeTo(2000, 1.0, function() { });
    });
    
});
//})(jQuery);

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
	/*
	if (member_lock.lock) {
		$("#elem4").animate(
			{ 'left':  member_lock.pos_origin + 'px' },
			{ 'duration': 400, 'easing': 'linear' }
		);
	}
	*/
	obj.scroll_all(scroll);
}

function scrollToAnchor(event) {	//メニュークリック時の移動
	//alert($("#elem1").find(".c_wrapper").css("margin-bottom"));
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

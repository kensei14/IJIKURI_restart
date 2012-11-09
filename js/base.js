/**
 * @author Mack
 */

(function($) {
	$.fn.preload = function(options) {
		var opts 	= $.extend({}, $.fn.preload.defaults, options),
			o		= $.meta ? $.extend({}, opts, this.data()) : opts;
		return this.each(function() {
			var $e	= $(this),
				t	= $e.attr('rel'),
				i	= $e.attr('href'),
				l	= 0;
			$('<img/>').load(function(i){
				++l;
				if(l==2) o.onComplete();
			}).attr('src',i);
			$('<img/>').load(function(i){
				++l;
				if(l==2) o.onComplete();
			}).attr('src',t);	
		});
	};
	$.fn.preload.defaults = {
		onComplete	: function(){return false;}
	};
})(jQuery);


var pageWidth, pageHeight;

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
    var a_elems = $("#myheader").find("a");
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
    
  	/*
  	$("#background").children().each(function(i) {
  		var a = $(this).find('a');
	  	console.log($(this).find('a'));
  		a.preload({
			onComplete	: function() {
				a.attr("id", "img02_01");
				a.attr("class", "bg");
			}
  		});
  	});
  	*/
  	
    /*
	$link.find('a').preload({
		onComplete	: function(){
			++loaded;
			if(loaded == total_images){
			}
		}
	});
    */
});
//})(jQuery);

var pre_scroll = -1; /* 前のイベントでのスクロール値 */

$(window).bind("scroll", window_scroll);

function window_scroll() {
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
	
	obj.scroll_all(scroll);
}

function scrollToAnchor(event) {	//メニュークリック時の移動
	event.preventDefault();

	var anchor  = $(this).attr('href');
	console.log(anchor);
	var targetOffset = 0;
	switch(anchor) {
		case '#About':
			targetOffset = fadeData[2][0];
			break;
		case '#Members':
			targetOffset = fadeData[5][0];
			break;
		case '#Works':
			targetOffset = fadeData[8][0];
			break;
		case '#Contact':
			targetOffset = fadeData[9][0] + 2000;
			break;
		default :
			break;
	}
	
    $('html, body').animate({scrollTop: targetOffset}, 'easing');
	/*    if ($.browser.msie){    
	        document.documentElement.scrollTop = targetOffset;  
	    }
	*/
						
	return false;
}
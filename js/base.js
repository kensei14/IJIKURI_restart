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
    
    $("#img01").ready(function() {
		$("#global_container").fadeTo(2000, 1.0, function() { });
    });
});

function Contents(elem, initial_page, final_page, initial_pos, final_pos, img_width) {
	this.initial_page = initial_page;
	this.final_page = final_page;
	this.initial_pos = initial_pos;	
	this.final_pos = final_pos;
	this.current = [];

	this.speed = [];
	this.speed[0] = ((final_page + final_pos[0]) - (initial_page + initial_pos[0])) / (final_page - initial_page);
	this.speed[1] = (final_pos[1] - initial_pos[1]) / (final_page - initial_page);
	
	this.begining = [];
	this.begining[0] = (initial_page + initial_pos[0]) - (this.speed[0] * initial_page);
	this.begining[1] = this.initial_pos[1];
	
	this.elem = elem;

	var pad = img_width * 0.2;
	this.elem.css({
		top: parseInt(this.begining[0]) + "px",
		left: parseInt(this.begining[1]) + "px",
		
		padding: pad + "px",
		width: img_width - pad + "px",
		height: "auto",
		border: "1px solid black"		
	});
	
	//子要素の幅・高さ指定
	var c = this.elem.children();
	//var c_size = parseInt(c.css("width").replace("px", "")) * 0.75;
	var c_size = img_width - (2 * pad);
	c.css({
		width: c_size + "px",
		height: c_size + "px",
		border: "1px solid red"
	});
	
	this.scrolling = function(scrollx) {
		this.out();
		this.current[0] = this.begining[0] + (this.speed[0] * scrollx);
		this.current[1] = this.begining[1] + (this.speed[1] * scrollx);
		
		this.elem.css({
			top: parseInt(this.current[0]) + "px",
			left: parseInt(this.current[1]) + "px"
		});
	}
	
	this.out = function() {
		var str = "";
		str += "  top=" + this.elem.css("top") + "  ";
		str += "  left=" +  this.elem.css("left") + "  ";
		str += "  scroll=" + pre_scroll;
		str += "  initial_pos=" + this.initial_pos[0] + "  ";
		str += "  initial_pos=" + this.final_pos[0] + "  ";
		str += "  speed=" + this.speed[0] + "  ";

		console.log( str);
	}
}

var pre_scroll = -1; /* 前のイベントでのスクロール値 */
window.onscroll = function() {
	var scroll = document.body.scrollTop || document.documentElement.scrollTop;
	var rate;
		
	if (scroll > pre_scroll) {	// 下に向かっている 
		for(var i=1; i < fadeData.length; i++) {
			if ((scroll > fadeData[i][0]) && !fadeData[i][1]) {
		    	fadeData[i][1] = true;
				$(fadeData[i][2]).fadeTo(1000, 0.0, function() { }) ;
			}
		}

		if ((scroll > fadeData[0][0]) && !fadeData[0][1]) {
	    	fadeData[0][1] = true;
			//$(fadeData[0][2]).fadeTo(1000, 0.0, function() { $("#myheader").slideDown(10000); }) ;
			$("#logo").fadeTo(1000, 0.0, function() {});
			$(fadeData[0][2]).fadeTo(1000, 0.0, function() { $("#myheader").slideDown('normal', 'swing'); }); //なぜかcssで min-width, min-heightを指定すると動かない。
		}
		
	} else { //上に向かっている
		for(var i=1; i < fadeData.length; i++) {
			if ((scroll < fadeData[i][0]) && fadeData[i][1]) {
		    	fadeData[i][1] = false;
				$(fadeData[i][2]).fadeTo(1000, 1.0, function() { }) ;    		
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

var obj1, obj2, obj3, obj4;
function setData(w, h) {
	obj1 = new Contents($("#elem1"), 500, 1500, [300, parseInt(w*0.15)], [0,  parseInt(w*0.15)], parseInt(w*0.36));
	obj2 = new Contents($("#elem2"), 500, 1500, [700,  parseInt(w*0.36)], [300,  parseInt(w*0.36)], parseInt(w*0.5));
	obj3 = new Contents($("#elem3"), 3500, 4500, [500,  parseInt(w*0.12)], [0,  parseInt(w*0.12)], parseInt(w*0.5));
	obj4 = new Contents($("#elem4"), 3500, 4500, [800,  parseInt(w*0.50)], [500,  parseInt(w*0.50)], parseInt(w*0.3));
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

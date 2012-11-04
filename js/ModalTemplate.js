/**
 * @author Mack
 */

function setModal() {
	//select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
	  e.preventDefault();

	  var sizing = modal_sizing();
	
	  $('#mask').fadeIn(1000);	
	  $('#mask').fadeTo("slow",0.7);
          
  	  var id = $(this).attr('href');
  	  $(id).css({
  	  	height: sizing.modalHeight + "px",
  	  	width: sizing.modalWidth + "px",
	    top: (sizing.winHeight - sizing.modalHeight) / 2 + "px",
	    left: (sizing.winWidth - sizing.modalWidth) / 2 + "px"
	  });
	  
	  var list = [];
	  if (id == "#dialog2") {
	  	var c = $("#dialog2 .content");
	  	var side = $("#dialog2 .sidebar");
	  	
	  	for (var i=0; i < portfolio.length; i++) {
	  		var new_img = $("<img style='overflow: hidden; display: none; ' />");
	  		new_img.attr("src", portfolio[i][0]);
	  		list[i] = new_img;
	  	}
	  	
		$(id).fadeIn(2000, function() {
			
			//クロージャを使う??
		  	for (var i=0; i < list.length; i++) {
		  		side.append(list[i]);
				list[i].attr("width", side.width());
				list[i].fadeIn(1000);
		  	}
		});
	  }
	});
	
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('#mask').hide();
		$('.window').hide();
	});		
	
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
	
	$(window).resize(function () {
	 
	 	var sizing = modal_sizing();
 		var box = $('#boxes .window');
	 	
	  box.css({
  	  	height: sizing.modalHeight + "px",
  	  	width: sizing.modalWidth + "px",
	    top: (sizing.winHeight - sizing.modalHeight) / 2 + "px",
	    left: (sizing.winWidth - sizing.modalWidth) / 2 + "px"
	  });
	});

}

//モーダル・ウィンドウのサイズを返してくれる。
function modal_sizing() {
	$("#mask").css({
	  width: $(document).width(),
	  height: $(window).height()
  	});
  	
	var h_rate = 0.8,
		w_rate = 0.6;
	return {
		winHeight: $(document).height(),
		winWidth: $(window).width(),
		modalHeight: parseInt($(document).height() * h_rate),
		modalWidth: parseInt($(window).width() * w_rate)
	}
}

//ポートフォリオデータ
var portfolio = [
	["src/portfolio/port1.jpeg", "#port1", "ケロムレスト", "description description description description description description description description" ],
	["src/portfolio/port2.jpeg", "#port2", "ASEANロゴ", "description description description description description description description description" ],
	["src/portfolio/port3.jpeg", "#port3", "ASEANロゴ2", "description description description description description description description description" ],
	["src/portfolio/port4.jpeg", "#port4", "ASEANロゴ", "description description description description description description description description" ]
]
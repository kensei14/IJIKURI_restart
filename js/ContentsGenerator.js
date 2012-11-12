/**
 * @author Mack
 */

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
	
	var id = this.elem.attr("id");
	
	var pad = img_width * 0.10;
	this.elem.css({ //円全体のCSS
		top: parseInt(this.begining[0]) + "px",
		left: parseInt(this.begining[1]) + "px",

		padding: pad + "px",
		width: img_width - pad + "px",
		height: img_width - pad + "px",
		zIndex: 50
		//border: "1px solid black"
	});
	if (id == "elem100") {
		this.elem.css({ zIndex: -1 });
	}

	var wrapper = this.elem.children();	//子要素の幅・高さ指定

	var wrapper_size = img_width - (2 * pad); //円内部のコンテンツの横幅(padding含む)
	wrapper.css({
		width: wrapper_size + "px",
		height: wrapper_size + "px",
		margin: "auto",
		marginTop: pad/2 + "px",
		position: "relative",
		//border: "solid 1px red"
	});

	var t_font = img_width * 0.055;
	if (t_font <= 40) { t_font = 40; }

	wrapper.find(".title").css({ //コンテンツの中のタイトル部のCSS
		fontSize: t_font + "px",
	});

	var d_font = 0;
	if (id == "elem1") { d_font = img_width * 0.057 }
	else if (id == "elem2") { d_font = img_width * 0.025 }
	else if (id == "elem3") { d_font = img_width * 0.04 }
	else if (id == "elem4") { d_font = img_width * 0.03 }
	else if (id == "elem5") { d_font = img_width * 0.055 }
	else if (id == "elem6") { d_font = img_width * 0.06 }
	else { d_font = img_width * 0.05 } //Member_listの場合全てに適用
	if (d_font <= 20) { d_font = 20; }

	wrapper.find(".description").css({ //コンテンツの中の内容部のCSS
		fontSize: d_font + "px",

		position: "absolute",
		top: 50 + "%",
		marginTop: -parseInt(wrapper.find(".description").css("height").replace("px",""))/2 - 30 + "px",
		//border: "solid 1px blue"
	});
	
	wrapper.find(".description").find("dd").css({ //コンテンツの中の内容部のCSS
		fontSize: d_font * 0.8 + "px",
	});

	this.scrolling = function(scrollx) {
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
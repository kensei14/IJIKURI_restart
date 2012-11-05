/**
 * @author Mack
 */
var obj1, obj2, obj3, obj4, obj5, obj6;
function setData(w, h) {
	obj1 = new Contents($("#elem1"), 500, 1500, [300, parseInt(w*0.15)], [0,  parseInt(w*0.15)], parseInt(w*0.36));
	obj2 = new Contents($("#elem2"), 500, 1500, [700,  parseInt(w*0.36)], [300,  parseInt(w*0.36)], parseInt(w*0.5));
	obj3 = new Contents($("#elem3"), 3500, 4500, [500,  parseInt(w*0.12)], [0,  parseInt(w*0.12)], parseInt(w*0.5));
	obj4 = new Contents($("#elem4"), 3500, 4500, [800,  parseInt(w*0.50)], [500,  parseInt(w*0.50)], parseInt(w*0.3));
	obj5 = new Contents($("#elem5"), 6500, 7500, [600,  parseInt(w*0.18)], [50,  parseInt(w*0.18)], parseInt(w*0.4));
	obj6 = new Contents($("#elem6"), 9000, 10000, [400,  parseInt(w*0.25)], [100,  parseInt(w*0.25)], parseInt(w*0.4));
}

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

	var pad = img_width * 0.10;
	this.elem.css({ //円全体のCSS
		top: parseInt(this.begining[0]) + "px",
		left: parseInt(this.begining[1]) + "px",

		padding: pad + "px",
		width: img_width - pad + "px",
		height: img_width - pad + "px",
		//border: "1px solid black"
	});

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

	var d_font = img_width * 0.025;
	if (d_font <= 20) { d_font = 20; }

	wrapper.find(".description").css({ //コンテンツの中の内容部のCSS
		fontSize: d_font^ + "px",

		position: "absolute",
		top: 50 + "%",
		marginTop: -parseInt(wrapper.find(".description").css("height").replace("px",""))/2 - 10 + "px",
		//border: "solid 1px blue"
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
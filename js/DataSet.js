/**
 * @author Mack
 */
//背景のフェード値
var fadeData =  [
	[500, false, "#img01"],
	[1000, false, "#img02_01"],
	[1500, false, "#img02_02"],
	[3500, false, "#img02_03"],
	[4000, false, "#img03_01"],
	[4500, false, "#img03_02"],
	[6000, false, "#img03_03"],
	[6500, false, "#img04_01"],
	[7500, false, "#img04_02"],
	[9000, false, "#img04_03"],
	//[9000, false, "#img05"]
]

var obj = {};
function setContents(w, h) {
	obj.circle = [
		//コンテンツの値：　id initial_page final_page initial_pos final_pos width
		new Contents($("#elem1"), 500, 1500, [300, parseInt(w*0.15)], [0,  parseInt(w*0.15)], parseInt(w*0.36)),
		new Contents($("#elem2"), 500, 1500, [700,  parseInt(w*0.36)], [300,  parseInt(w*0.36)], parseInt(w*0.5)),
		new Contents($("#elem3"), 3500, 4500, [500,  parseInt(w*0.12)], [0,  parseInt(w*0.12)], parseInt(w*0.4)),
		new Contents($("#elem4"), 3500, 4500, [800,  parseInt(w*0.50)], [500,  parseInt(w*0.50)], parseInt(w*0.3)),
		new Contents($("#elem5"), 6500, 7500, [600,  parseInt(w*0.3)], [100,  parseInt(w*0.3)], parseInt(w*0.35)),
		new Contents($("#elem6"), 8500, 10000, [400,  parseInt(w*0.25)], [0,  parseInt(w*0.25)], parseInt(w*0.3)),

		/*Member List*/
		new Contents($("#elem7"), 8800, 13000, [400,  parseInt(w*0.6)], [0,  parseInt(w*0.6)], parseInt(w*0.35)),
		new Contents($("#elem8"), 8800, 13000, [400,  parseInt(w*0.5)], [0,  parseInt(w*0.5)], parseInt(w*0.4)),
		new Contents($("#elem9"), 8800, 13000, [400,  parseInt(w*0.55)], [0,  parseInt(w*0.55)], parseInt(w*0.36)),
		new Contents($("#elem10"), 8800, 13000, [400,  parseInt(w*0.45)], [0,  parseInt(w*0.45)], parseInt(w*0.38)),

		/*Dummy Contents*/
		new Contents($("#elem100"), 8800, 13000, [400,  parseInt(w*0.25)], [0,  parseInt(w*0.25)], 300)
	];

	obj.scroll_all = function(scroll) {
		var l = this.circle.length;
		for(var i=0; i < l; i++) {
			this.circle[i].scrolling(scroll);
		}
	}
}

//ポートフォリオデータ　モーダルで使用
var portfolio = [
	["src/portfolio/port1.jpeg", "#port1", "ケロムレスト", "description description description description description description description description" ],
	/*
	["src/portfolio/port2.jpeg", "#port2", "ASEANロゴ", "description description description description description description description description" ],
	["src/portfolio/port3.jpeg", "#port3", "ASEANロゴ2", "description description description description description description description description" ],
	["src/portfolio/port4.jpeg", "#port4", "ASEANロゴ", "description description description description description description description description" ]
	*/
]
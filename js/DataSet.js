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

//コンテンツの値：　id initial_page final_page initial_pos final_pos width
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9;
function setData(w, h) {
	obj1 = new Contents($("#elem1"), 500, 1500, [300, parseInt(w*0.15)], [0,  parseInt(w*0.15)], parseInt(w*0.36));
	obj2 = new Contents($("#elem2"), 500, 1500, [700,  parseInt(w*0.36)], [300,  parseInt(w*0.36)], parseInt(w*0.5));
	obj3 = new Contents($("#elem3"), 3500, 4500, [500,  parseInt(w*0.12)], [0,  parseInt(w*0.12)], parseInt(w*0.4));
	obj4 = new Contents($("#elem4"), 3500, 4500, [800,  parseInt(w*0.50)], [500,  parseInt(w*0.50)], parseInt(w*0.3));
	obj5 = new Contents($("#elem5"), 6500, 7500, [600,  parseInt(w*0.3)], [100,  parseInt(w*0.3)], parseInt(w*0.35));
	obj6 = new Contents($("#elem6"), 8500, 10000, [400,  parseInt(w*0.25)], [0,  parseInt(w*0.25)], parseInt(w*0.3));
	//ダミーコンテンツ
	obj7 = new Contents($("#elem7"), 8800, 13000, [400,  parseInt(w*0.25)], [0,  parseInt(w*0.25)], 300);
	obj8 = new Contents($("#elem8"), 8800, 13000, [400,  parseInt(w*0.25)], [0,  parseInt(w*0.25)], parseInt(w*0.3));
	obj9 = new Contents($("#elem9"), 8800, 13000, [400,  parseInt(w*0.25)], [0,  parseInt(w*0.25)], parseInt(w*0.2));
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
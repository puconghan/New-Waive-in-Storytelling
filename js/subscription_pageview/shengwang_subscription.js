var m = [80, 80, 80, 80];
var w = $('.article').width();
w = w - m[1] - m[3] - 50;
var h = 400 - m[0] - m[2];
Array.prototype.max = function() {
	var max = this[0];
	var len = this.length;

	for (var i = 1; i < len; i++) {
		if (this[i] > max) {
			max = this[i];
		}
	}
	return max;
}

// Data array for pageview
var data1 = [175482, 173921, 178700, 173445, 161303, 183206, 189261, 217394, 212578, 198895, 208623, 198026, 200070, 210005, 202120, 226972, 292047, 284975, 261037, 264295, 270422, 269353, 279135, 331320, 318608, 283991, 277259, 293945, 308135, 305437, 304406, 302415, 293567, 339569, 339286, 318603, 308628, 346517, 380255, 401014, 400551, 374231, 347277, 346659, 352628, 370844, 361397, 344931, 332978, 322979, 316816, 326260, 332066, 373403, 367229, 364258, 336124, 321106, 327089, 321979, 327933, 312738, 297174, 289470, 298910, 288113, 288649, 275576, 277637, 269326, 266297, 270346, 281770, 289829, 286486, 290191, 288483, 284481, 282943, 295527, 291992, 281244, 290836, 304520, 312638, 315248, 340015, 359397, 314658, 301604, 290045, 286285, 279677, 283368, 283455, 283472, 282046, 273739, 264889, 263804, 268360, 272038, 260891, 259681, 264792, 264437, 261575, 263431, 255635, 249191, 240464, 243134, 247868, 249436, 259109, 260240, 255172, 245218, 246684, 257279, 246445, 250681, 253160, 158083, 124375, 103424, 92013, 84288, 79570, 81353, 77501, 86423, 91367, 77134, 72733, 75086, 73187, 78561, 72893, 65001, 61389, 58644, 57300, 56425, 55216, 56025, 57242, 56695, 54606, 52382, 49065, 50394, 46373, 45043, 44081, 44282, 40008, 40695, 39078, 38132, 37556, 35148, 35020, 35007, 35611, 36426, 36385, 42478, 48364, 47425, 53957, 48190, 50320, 48604, 46921, 44851, 43966, 44070, 44526, 43346, 43620, 43827, 42943, 40981, 37430, 39619, 39029, 38970, 48079, 40831, 37650, 40742, 40700, 37518, 35734, 36837, 40780, 37878, 38511, 38254, 35875, 35839, 41012, 41748, 40820, 41776, 40940, 37594, 38706, 46713, 40631, 39482, 40146, 39345, 34579, 34940, 35261, 35055, 36278, 34577, 33946, 32180, 34504, 31709, 31277, 32966, 34396, 34261, 35065, 36156, 35215, 34973, 36506, 40976, 41071, 35887, 38473, 38858, 37412, 40535, 44409, 44536, 41461, 41800, 40481, 39448, 39021, 41847, 43265, 37960, 37131, 38756, 40067, 39809, 41746, 44520, 45984, 45759, 44644, 48365, 45358, 45164, 44856, 41710, 43218, 44381, 44425, 41489, 41245, 41952, 39868, 37437, 37874, 38719, 38276, 40039, 40005, 37065, 36563, 42630, 37110, 37776, 39769, 39497, 36519, 35525, 35092, 36555, 39983, 41987, 43808, 36193, 36513, 38174, 39410, 38374, 36556, 38514, 35384, 34289, 34999, 33570, 32052, 32420, 32501, 33185, 32231, 31748, 32109, 34841, 31627, 30443, 30402, 30155];
// Data array for subscription
var data2 = [19482, 7864, 6630, 5420, 3221, 3893, 2772, 2188, 2220, 1841, 1760, 1637, 1380, 1300, 1234, 4352, 4102, 3209, 2818, 1963, 1690, 2053, 2814, 1990, 1536, 1348, 1134, 1907, 2828, 1917, 2523, 1953, 1585, 1326, 1201, 1091, 979, 1247, 1248, 1097, 963, 866, 836, 832, 1032, 994, 694, 666, 630, 656, 648, 724, 1773, 14198, 6860, 5197, 3277, 3042, 3141, 3110, 3140, 2560, 2029, 1858, 1891, 1763, 1708, 1581, 1538, 1441, 1375, 1436, 1613, 1656, 1519, 1463, 1459, 1335, 1418, 1539, 1556, 1330, 1413, 1513, 1559, 1590, 1958, 2019, 1372, 1219, 1173, 1173, 1212, 1263, 1243, 1183, 1205, 1200, 1126, 1111, 1260, 1307, 1225, 1093, 1120, 1193, 1194, 1205, 1099, 1068, 866, 925, 1015, 1156, 1171, 1046, 1081, 1027, 1012, 1315, 1304, 1364, 1997, 1002, 778, 637, 574, 512, 473, 493, 401, 440, 492, 432, 395, 405, 385, 385, 349, 334, 326, 329, 290, 321, 319, 324, 320, 348, 326, 312, 299, 304, 246, 280, 275, 215, 242, 239, 216, 238, 249, 210, 219, 216, 219, 215, 216, 254, 252, 219, 215, 193, 242, 207, 203, 188, 183, 218, 198, 201, 206, 192, 173, 188, 177, 166, 128, 168, 169, 171, 143, 167, 168, 147, 125, 166, 181, 147, 159, 167, 141, 138, 163, 149, 150, 173, 176, 134, 163, 172, 153, 139, 165, 168, 123, 152, 131, 133, 161, 139, 136, 118, 135, 134, 131, 115, 134, 144, 169, 159, 144, 125, 165, 162, 169, 135, 122, 113, 137, 122, 142, 127, 125, 124, 115, 98, 105, 135, 119, 91, 102, 112, 128, 98, 119, 129, 114, 132, 127, 138, 151, 124, 150, 107, 129, 119, 109, 160, 130, 136, 105, 91, 105, 113, 110, 132, 127, 100, 87, 99, 84, 97, 123, 112, 82, 93, 96, 102, 107, 116, 127, 75, 89, 74, 95, 91, 120, 114, 88, 78, 86, 79, 98, 95, 115, 110, 109, 110, 105, 95, 76, 80, 102, 89]		

var x = d3.scale.linear().domain([0, data1.length]).range([0, w]);

var xlabel = d3.time.scale()
	.domain([new Date(new Date("2012-03-01")), d3.time.day.offset(new Date("2013-01-08"), 1)])
	.range([0, w]);

var y1 = d3.scale.linear().domain([0, data1.max()]).range([h, 0]);
var y2 = d3.scale.linear().domain([0, data2.max()]).range([h, 0]);
 
var line1 = d3.svg.line()
	.x(function(d,i) { 
		//console.log('Plotting X1 value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
		return x(i); 
	})
	.y(function(d) { 
		//console.log('Plotting Y1 value for data point: ' + d + ' to be at: ' + y1(d) + " using our y1Scale.");
		return y1(d); 
	})
	
var line2 = d3.svg.line()
	.x(function(d,i) { 
		//console.log('Plotting X2 value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
		return x(i); 
	})
	.y(function(d) { 
		//console.log('Plotting Y2 value for data point: ' + d + ' to be at: ' + y2(d) + " using our y2Scale.");
		return y2(d); 
	})
 
 
var shengwang_subscription_pageviews = d3.select("#shengwang_subscription_pageviews").append("svg:svg")
      .attr("width", w + m[1] + m[3])
      .attr("height", h + m[0] + m[2] + 30)
      .append("svg:g")
      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var xAxis = d3.svg.axis().scale(xlabel).tickSize(-h).tickSubdivide(true);

shengwang_subscription_pageviews.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + h + ")")
      .call(xAxis);

shengwang_subscription_pageviews.append("text")
	.attr("class", "bottomlabel")
	.attr("text-anchor", "end")
	.attr("y", h + 50)
	.attr("x", w - 190)
	.attr("dy", ".2em")
	.text("Selected Top Ranked Fantasy Novel: King of Wisdom (奇幻玄幻: 圣王),");

shengwang_subscription_pageviews.append("text")
	.attr("class", "bottomlabelauthor")
	.attr("text-anchor", "end")
	.attr("y", h + 70)
	.attr("x", w - 40)
	.attr("dy", ".2em")
	.text("Written by millionaire author: Zhong Wang (王钟), Pen name: Meng Ru Shen Ji (梦入神机).")

var yAxisLeft = d3.svg.axis().scale(y1).ticks(4).orient("left");

shengwang_subscription_pageviews.append("svg:g")
      .attr("class", "y axis axisLeft")
      .attr("transform", "translate(-15,0)")
      .call(yAxisLeft);
			
shengwang_subscription_pageviews.append("text")
	.attr("class", "scaleleft")
	.attr("text-anchor", "end")
	.attr("y", 1)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Pageviews");

var yAxisRight = d3.svg.axis().scale(y2).ticks(6).orient("right");

shengwang_subscription_pageviews.append("svg:g")
	      .attr("class", "y axis axisRight")
	      .attr("transform", "translate(" + (w+15) + ",0)")
	      .call(yAxisRight);
	
shengwang_subscription_pageviews.append("text")
	.attr("class", "scaleright")
	.attr("text-anchor", "end")
	.attr("y", w)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Subscriptions");

shengwang_subscription_pageviews.append("svg:path").attr("d", line1(data1)).attr("class", "data1");
shengwang_subscription_pageviews.append("svg:path").attr("d", line2(data2)).attr("class", "data2");
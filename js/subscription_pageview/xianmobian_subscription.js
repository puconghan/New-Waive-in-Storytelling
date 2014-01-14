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

// Data array for pageviews
var data1 = [94, 58204, 61436, 68823, 66540, 70182, 69006, 63794, 65203, 66909, 68939, 67774, 64885, 67153, 68392, 73135, 72502, 76652, 68335, 74764, 82706, 84832, 78703, 77592, 83775, 85771, 82023, 88088, 85984, 88943, 87803, 83534, 82167, 85517, 92223, 87177, 84721, 84970, 86857, 91664, 89182, 87178, 88688, 92466, 87815, 87142, 81344, 87058, 85703, 86517, 95042, 94335, 93060, 96712, 96925, 93199, 107740, 112939, 118256, 109742, 116375, 115608, 117804, 123603, 111351, 118910, 124708, 117959, 116848, 118140, 125315, 127310, 130663, 123385, 126397, 118827, 124625, 133495, 138714, 136560, 131504, 121120, 124900, 116644, 119435, 118085, 126729, 126750, 129435, 122518, 122048, 126600, 122201, 123233, 128829, 120968, 127182, 105005, 114099, 123043, 117351, 127816, 139101, 135812, 131801, 114544, 138859, 137553, 122228, 131887, 133434, 131945, 135591, 134775, 143800, 143804, 120371, 137816, 127158, 128466, 135142, 132074, 133600, 128097, 133375, 129658, 128969, 130713, 141133, 128986, 137111, 130274, 133193, 134946, 131212, 134795, 135458, 129482, 133700, 132676, 136435, 131049, 125794, 111752, 101501, 85892, 85718, 76092, 75843, 76331, 76730, 59449, 77887, 79181, 77209, 67277, 72970, 71064, 70040, 72884, 72380, 70891, 72169, 72646, 69653, 69177, 71957, 73142, 71846, 70288, 68454, 67675, 68817, 68408, 71650, 72327, 70508, 70139, 69012, 62887, 62506, 63431, 66254, 64022, 64422, 33168, 56876, 65676, 69136, 67256, 67775, 67096, 66968, 67266, 69189, 67759, 64964, 63804, 63667, 63678, 65396, 64608, 64509, 65080, 67781, 67942, 69891, 68787, 69080, 67952, 67938, 65783, 63783, 65581, 69749, 63040, 64382, 64227, 65235, 63431, 64765, 64639, 64039, 64869, 65013, 64172, 62467, 59987, 66029, 66354, 65514, 64744, 69321, 66415, 57261, 67758, 65784, 63837, 35239, 34947, 35809, 35456, 36320, 31789, 35747, 34495, 34160, 35996];
// Data array for subscription
var data2 = [46, 5909, 2492, 1936, 1560, 1850, 1405, 1630, 1352, 1477, 1256, 1744, 2641, 3162, 1358, 1607, 1132, 863, 1985, 2202, 869, 2250, 601, 626, 588, 618, 494, 506, 546, 507, 551, 461, 401, 389, 384, 413, 378, 318, 336, 368, 358, 314, 308, 329, 323, 323, 304, 370, 323, 321, 329, 300, 325, 293, 324, 299, 459, 473, 544, 461, 511, 516, 488, 548, 469, 472, 501, 523, 465, 492, 525, 517, 491, 519, 497, 475, 453, 492, 1505, 1590, 1198, 963, 875, 821, 814, 806, 824, 744, 762, 731, 725, 721, 694, 706, 716, 645, 674, 560, 638, 655, 629, 689, 689, 581, 572, 507, 492, 465, 428, 377, 404, 431, 439, 432, 431, 418, 421, 380, 403, 399, 394, 351, 366, 378, 361, 407, 369, 370, 423, 450, 403, 364, 389, 387, 347, 372, 382, 359, 335, 380, 387, 378, 495, 489, 360, 331, 394, 258, 277, 308, 300, 295, 310, 373, 364, 294, 288, 258, 229, 244, 230, 241, 252, 262, 260, 204, 237, 231, 263, 227, 215, 196, 203, 172, 209, 209, 190, 194, 200, 154, 152, 196, 186, 144, 159, 202, 170, 193, 201, 167, 200, 205, 164, 159, 166, 190, 176, 144, 180, 225, 169, 194, 196, 164, 179, 176, 195, 221, 166, 169, 183, 174, 156, 173, 165, 152, 175, 181, 150, 164, 151, 172, 138, 139, 151, 153, 127, 135, 158, 330, 256, 514, 474, 184, 777, 182, 178, 150, 721, 435, 204, 190, 199, 157, 162, 165, 184, 183]

var x = d3.scale.linear().domain([0, data1.length]).range([0, w]);

var xlabel = d3.time.scale()
	.domain([new Date(new Date("2012-05-06")), d3.time.day.offset(new Date("2013-01-08"), 1)])
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
 
 var xianmobian_subscription_pageviews = d3.select("#xianmobian_subscription_pageviews").append("svg:svg")
	.attr("width", w + m[1] + m[3])
	.attr("height", h + m[0] + m[2] + 30)
	.append("svg:g")
	.attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var xAxis = d3.svg.axis().scale(xlabel).tickSize(-h).tickSubdivide(true);

xianmobian_subscription_pageviews.append("svg:g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + h + ")")
	.call(xAxis);

xianmobian_subscription_pageviews.append("text")
	.attr("class", "bottomlabel")
	.attr("text-anchor", "end")
	.attr("y", h + 50)
	.attr("x", w - 148)
	.attr("dy", ".2em")
	.text("Selected Top Ranked Fantasy Novel: Immortal and Devil (奇幻玄幻: 仙魔变),")

xianmobian_subscription_pageviews.append("text")
	.attr("class", "bottomlabelauthor")
	.attr("text-anchor", "end")
	.attr("y", h + 70)
	.attr("x", w - 180)
	.attr("dy", ".2em")
	.text("Written by millionaire author: Hui Wang (王辉), Pen name: Wu Zui (无罪).")

var yAxisLeft = d3.svg.axis().scale(y1).ticks(4).orient("left");

xianmobian_subscription_pageviews.append("svg:g")
	.attr("class", "y axis axisLeft")
	.attr("transform", "translate(-15,0)")
	.call(yAxisLeft);

xianmobian_subscription_pageviews.append("text")
	.attr("class", "scaleleft")
	.attr("text-anchor", "end")
	.attr("y", 1)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Pageviews");

var yAxisRight = d3.svg.axis().scale(y2).ticks(6).orient("right");

xianmobian_subscription_pageviews.append("svg:g")
	.attr("class", "y axis axisRight")
	.attr("transform", "translate(" + (w+15) + ",0)")
	.call(yAxisRight);

xianmobian_subscription_pageviews.append("text")
	.attr("class", "scaleright")
	.attr("text-anchor", "end")
	.attr("y", w)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Subscriptions");

xianmobian_subscription_pageviews.append("svg:path").attr("d", line1(data1)).attr("class", "data1");
xianmobian_subscription_pageviews.append("svg:path").attr("d", line2(data2)).attr("class", "data2");
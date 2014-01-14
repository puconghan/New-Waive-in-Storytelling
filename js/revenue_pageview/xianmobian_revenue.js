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

//Data array for revenue
var data2 = [0, 388116, 157464, 165902, 24682, 33198, 12162, 3066, 6684, 17234, 9994, 13976, 10856, 6352, 5720, 10592, 5288, 4164, 4018, 77136, 6750, 80692, 12764, 8274, 5320, 5720, 19484, 68320, 5498, 378562, 27012, 2754, 9364, 7926, 6162, 6532, 4532, 4432, 7340, 79372, 6532, 95416, 6120, 4632, 2742, 866, 1632, 3866, 6742, 15132, 17130, 9428, 9594, 52864, 5032, 21954, 16864, 17864, 5664, 2166, 5298, 4366, 5620, 8264, 6286, 6098, 4998, 9106, 18898, 2354, 113790, 14766, 5632, 9850, 14176, 10962, 3066, 6682, 8962, 6098, 11664, 1266, 8584, 16330, 10352, 2554, 20904, 3720, 7072, 3198, 53452, 14086, 8066, 16472, 26348, 5532, 6286, 13164, 2098, 1466, 5032, 2398, 1566, 4040, 5594, 3066, 2288, 2220, 1100, 1100, 3808, 1200, 4674, 2898, 2454, 1732, 9298, 9398, 11032, 14640, 18884, 8820, 8366, 7086, 8246, 13206, 4132, 84584, 24896, 108256, 17064, 2720, 2454, 11566, 7674, 21314, 2476, 15274, 21584, 6274, 3608, 24096, 414899, 124079, 142295, 86481, 89639, 79037, 77324, 90919, 94376, 90991, 102277, 140228, 158908, 97954, 98659, 94590, 131178, 141270, 120514, 73381, 97187, 105763, 88025, 97058, 97848, 124122, 94419, 98689, 111254, 105243, 110733, 138562, 124141, 91182, 91692, 118620, 105219, 166616, 131315, 31125, 93785, 117291, 105581, 100455, 138151, 178080, 114105, 111885, 138945, 213314, 102043, 112781, 146761, 124449, 112966, 97601, 125998, 141108, 101534, 127412, 103941, 131589, 115020, 104289, 118496, 120446, 106692, 92736, 81257, 86850, 81087, 81781, 83464, 78384, 82088, 85306, 81830, 79935, 64015, 87716, 86439, 86639, 253024, 120987, 80292, 118816, 130237, 111476, 127591, 109172, 8683268, 329246, 115744, 130173, 129704, 114129, 206152, 123482, 106882, 127875, 118925, 36367, 118813, 102428, 106077, 110344];

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
 
 var xianmobian_revenue_pageview = d3.select("#xianmobian_revenue_pageview").append("svg:svg")
	.attr("width", w + m[1] + m[3])
	.attr("height", h + m[0] + m[2] + 30)
	.append("svg:g")
	.attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var xAxis = d3.svg.axis().scale(xlabel).tickSize(-h).tickSubdivide(true);

xianmobian_revenue_pageview.append("svg:g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + h + ")")
	.call(xAxis);

xianmobian_revenue_pageview.append("text")
	.attr("class", "bottomlabel")
	.attr("text-anchor", "end")
	.attr("y", h + 50)
	.attr("x", w - 145)
	.attr("dy", ".2em")
	.text("Selected Top Ranked Fantasy Novel: Immortal and Devil (奇幻玄幻: 仙魔变),")

xianmobian_revenue_pageview.append("text")
	.attr("class", "bottomlabelauthor")
	.attr("text-anchor", "end")
	.attr("y", h + 70)
	.attr("x", w - 180)
	.attr("dy", ".2em")
	.text("Written by millionaire author: Hui Wang (王辉), Pen name: Wu Zui (无罪).")

var yAxisLeft = d3.svg.axis().scale(y1).ticks(4).orient("left");

xianmobian_revenue_pageview.append("svg:g")
	.attr("class", "y axis axisLeft")
	.attr("transform", "translate(-15,0)")
	.call(yAxisLeft);

xianmobian_revenue_pageview.append("text")
	.attr("class", "scaleleft")
	.attr("text-anchor", "end")
	.attr("y", 1)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Pageviews");

var yAxisRight = d3.svg.axis().scale(y2).ticks(6).orient("right");

xianmobian_revenue_pageview.append("svg:g")
	.attr("class", "y axis axisRight")
	.attr("transform", "translate(" + (w+15) + ",0)")
	.call(yAxisRight);

xianmobian_revenue_pageview.append("text")
	.attr("class", "scaleright")
	.attr("text-anchor", "end")
	.attr("y", w)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Revenue");

xianmobian_revenue_pageview.append("svg:path").attr("d", line1(data1)).attr("class", "data1");
xianmobian_revenue_pageview.append("svg:path").attr("d", line2(data2)).attr("class", "data2");
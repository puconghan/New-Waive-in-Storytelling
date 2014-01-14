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
//Data array for number of daily generated words
var data2 = [0, 14620, 13460, 9851, 6139, 9623, 6184, 6264, 6588, 15511, 6175, 6331, 6598, 6091, 9147, 6276, 6797, 6044, 9337, 6683, 6672, 12878, 6767, 6296, 6410, 6068, 6568, 9520, 7194, 14648, 6798, 7660, 6767, 6580, 6730, 7698, 6474, 7022, 6723, 10606, 6697, 10205, 6431, 7206, 7246, 11273, 3219, 6629, 6146, 6615, 7811, 6645, 6569, 9968, 6265, 6297, 6800, 10123, 6321, 6735, 9585, 6666, 6175, 10187, 6979, 7543, 6890, 9867, 7967, 7505, 11497, 6358, 6839, 6372, 6257, 6435, 6694, 6582, 6595, 6795, 6861, 7249, 6748, 6653, 7626, 8255, 6352, 7205, 7195, 6758, 6497, 9510, 7471, 6926, 6192, 6177, 6197, 6225, 6367, 6190, 6212, 6514, 6299, 6119, 7546, 6529, 6067, 6164, 6125, 6361, 6711, 6669, 6224, 6458, 6492, 6359, 6363, 7273, 6452, 6476, 6138, 6192, 6348, 6349, 6611, 9742, 6201, 7055, 5515, 2107, 6481, 6447, 6271, 6057, 6087, 6159, 6512, 5192, 6215, 3176, 9579, 5492, 8908, 6425, 6428, 5900, 6215, 5585, 5011, 7015, 6648, 6511, 6790, 7419, 6386, 6416, 6801, 6582, 9975, 9584, 6695, 3260, 6410, 6565, 6404, 6157, 6466, 10109, 0, 7082, 6311, 6655, 6538, 8881, 6186, 5928, 6500, 6138, 6323, 2745, 102, 0, 6226, 6304, 7849, 6521, 9155, 5959, 6528, 6070, 7325, 5669, 6222, 6317, 9421, 5415, 6587, 6045, 6585, 6093, 6890, 10390, 6605, 9443, 10207, 9626, 9876, 9848, 8611, 6375, 6432, 6142, 6367, 6224, 6178, 6699, 6890, 7530, 6428, 3323, 5898, 6930, 6686, 7264, 6321, 9986, 6112, 9655, 8716, 9828, 9848, 9902, 8346, 9370, 9286, 9658, 9417, 9435, 9471, 9945, 9764, 9623, 9507, 0, 10462, 9843, 9130, 10910]

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
 
 var xianmobian_word_pageviews = d3.select("#xianmobian_word_pageviews").append("svg:svg")
	.attr("width", w + m[1] + m[3])
	.attr("height", h + m[0] + m[2] + 30)
	.append("svg:g")
	.attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var xAxis = d3.svg.axis().scale(xlabel).tickSize(-h).tickSubdivide(true);

xianmobian_word_pageviews.append("svg:g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + h + ")")
	.call(xAxis);

xianmobian_word_pageviews.append("text")
	.attr("class", "bottomlabel")
	.attr("text-anchor", "end")
	.attr("y", h + 50)
	.attr("x", w - 148)
	.attr("dy", ".2em")
	.text("Selected Top Ranked Fantasy Novel: Immortal and Devil (奇幻玄幻: 仙魔变),")

xianmobian_word_pageviews.append("text")
	.attr("class", "bottomlabelauthor")
	.attr("text-anchor", "end")
	.attr("y", h + 70)
	.attr("x", w - 180)
	.attr("dy", ".2em")
	.text("Written by millionaire author: Hui Wang (王辉), Pen name: Wu Zui (无罪).")

var yAxisLeft = d3.svg.axis().scale(y1).ticks(4).orient("left");

xianmobian_word_pageviews.append("svg:g")
	.attr("class", "y axis axisLeft")
	.attr("transform", "translate(-15,0)")
	.call(yAxisLeft);

xianmobian_word_pageviews.append("text")
	.attr("class", "scaleleft")
	.attr("text-anchor", "end")
	.attr("y", 1)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Pageviews");

var yAxisRight = d3.svg.axis().scale(y2).ticks(6).orient("right");

xianmobian_word_pageviews.append("svg:g")
	.attr("class", "y axis axisRight")
	.attr("transform", "translate(" + (w+15) + ",0)")
	.call(yAxisRight);

xianmobian_word_pageviews.append("text")
	.attr("class", "scaleright")
	.attr("text-anchor", "end")
	.attr("y", w)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Number of Words (per day)");

xianmobian_word_pageviews.append("svg:path").attr("d", line1(data1)).attr("class", "data1");
xianmobian_word_pageviews.append("svg:path").attr("d", line2(data2)).attr("class", "data2");


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
var data1 = [82323, 222540, 210377, 202459, 206653, 239996, 253443, 264996, 247174, 244170, 242899, 246792, 131819, 96276, 101339, 98165, 104540, 110093, 106720, 100875, 106964, 113272, 108867, 113008, 117002, 129597, 130434, 153693, 171020, 150214, 159126, 184526, 182184, 189044, 164845, 212542, 220736, 199104, 221208, 223460, 209282, 195008, 196847, 201224, 180205, 173516, 166119, 171389, 164501, 185100, 166880, 168961, 180047, 174517, 191056, 178722, 191908, 169706, 184325, 173823, 193388, 186479, 194757, 188845, 182578, 186267, 184327, 177904, 201769, 205398, 187693, 216746, 193818, 206809, 231974, 214678, 221816, 234837, 235415, 246129, 250757, 240742, 239288, 237480, 241863, 238783, 230579, 228899, 241991, 248578, 254282, 264176, 241531, 232190, 245376, 228893, 238330, 250819, 280467, 269153, 260499, 245263, 264056, 248151, 271868, 264078, 257620, 284054, 290654, 289135, 298073, 317665, 328968, 327618, 300976, 331812, 345567, 352206, 357679, 364272, 351420, 336888, 347869, 358304, 351502, 347498, 359483, 337814, 344321, 355375, 369615, 362421, 375167, 395397, 383013, 376976, 394166, 365868, 367900, 369845, 365509, 367787, 356290, 348208, 351774, 349984, 344284, 357149, 336552, 332987, 372396, 366193, 372732, 393626, 398933, 387111, 386375, 402118, 401154, 411851, 394284, 404175, 404399, 391966, 394380, 404116, 418004, 410794, 408696, 428886, 411155, 413696, 423027, 437803, 453189, 470677, 463927, 457484, 452846, 461493, 454335, 480603, 486341, 459741, 450908, 440304, 432351, 429895, 403295, 417885, 427707, 429958, 445080, 406366, 444282, 430938, 416547, 409553, 402588, 361293, 392403, 389073, 392534, 412599, 447815, 463240, 485772, 486044, 510260, 500717, 487079, 483958, 505322, 508365, 513593, 512698, 511526, 525634, 443698, 489851, 475166, 502363, 553719, 608748, 628691, 605044, 593573, 593673, 579365, 571938, 593644, 619595, 621410, 597305, 597219, 586480, 600650, 627866, 638438, 615614, 639028, 698161, 740215, 725711, 722126, 716145, 671603, 688686, 724498, 708886, 699070, 694468, 695464, 674989, 682857, 659584, 669435, 715356, 684699, 675918, 663009, 583425, 673946, 675634, 682308, 687412, 655983, 623503, 603891, 603474, 592784, 595673, 684896, 682645, 647553, 640589, 642349, 623090, 619018, 577817, 584300, 580002, 568333, 533595, 543599, 529775, 474825, 614604, 623862, 583682, 595350, 634701, 634623, 639681, 652215, 622826, 617346, 615659, 590221, 628338, 639737, 640770, 593093, 593410, 587601, 598265, 610405, 615579, 634096, 604819, 623229, 623256, 610798, 616224, 624796, 631417, 614587, 621775, 610809, 600345, 608213, 626627, 630722, 646708, 648382, 660500, 691356, 684114, 687819, 696958, 731439, 690619, 652442, 612064, 587233, 579784, 600558, 580838, 587074, 560627, 544164, 543501, 547405, 545213, 534484, 533572, 526043, 530611, 512702, 547994, 532529, 514874, 496459, 498516, 486904, 484335, 467177, 472319, 474552, 385712, 386117, 493063, 475995, 476242, 496660, 560959, 555676, 509463, 511401, 514273, 500051, 509084, 520369, 470198, 551491, 560047, 553661, 537475, 538909, 567623, 581770, 574945, 579290, 595787, 507488, 623359, 609083, 587450, 569818, 563254, 576871, 559766, 557038, 568704, 563613, 569123, 583738, 586912, 577840, 581217, 599237, 594706, 610229, 601983, 609442, 600809, 619434, 636640, 623860, 606166, 577736, 586198, 577266, 595634, 580233, 553745, 546169, 496534, 483154, 531360, 541264, 553228, 419472, 496965, 548221, 558362, 535427, 535439, 529823, 534218, 543476, 547055, 516511, 513473, 524238, 525603, 484196, 535511, 541458, 563417, 503305, 462825, 503929, 491040, 479364, 483313, 486914, 490656, 497378, 479303, 483251, 495852, 503052, 519776, 542535, 556704, 526920, 525748, 498639, 510954, 517363, 518489, 518974, 502369, 506440, 515284, 509105, 527168, 545956, 550874, 514970, 502453, 498206, 487213, 506502, 519768, 516180, 506575, 500426, 492110, 490596, 493964, 507059, 531658, 536987, 532625, 527257, 520080, 528086, 549631, 545285, 492636, 472109, 488249, 479639, 488936, 499155, 486417, 462143, 454804, 445127, 449261, 450478, 459277, 456338, 434985, 440245, 443194, 434768, 442325, 461136, 454222, 440982, 440357, 423603, 432228, 433745, 454283, 463286, 400934, 444576, 449884, 438703, 428342, 426375, 430494, 418760, 446632, 399707, 343084, 384203, 436650, 423267, 389515, 387501, 388249, 379172, 378923, 385472, 395830, 393219, 387153, 393216, 392627, 383573, 379363, 372977, 367816, 356711, 344854, 343758, 327960, 300962, 265639, 292328, 280572, 276007, 287133, 309359, 321564, 333857, 350591, 366300, 376216, 390866, 396717, 395142, 353300, 172368, 123906, 102822, 93900, 90250, 86298, 82375, 75265, 74289, 73830, 73044, 74549, 76560, 72287, 67933, 67720, 69183, 67956, 70862, 73227, 70629, 71578, 72056, 74979, 111681, 83652, 83433, 78259, 67542, 66965, 63278, 62874, 63905, 65065, 63927, 59212, 59484, 58072, 57870, 60327, 63677, 62543, 56716, 56129, 56116, 56284, 58068, 58676, 57859, 53203, 52584, 53191, 52671, 54100, 53364, 58447, 52957, 51023, 51339, 48786, 49135, 50206, 50496, 47838, 48420, 45772, 48686, 48210, 50347, 49424, 45741, 46005, 46281, 45925, 49450, 51250, 50829, 46176, 48093, 50864, 48127, 48133, 50394, 49905, 49218, 47589, 44574, 43921, 44911, 46211, 46508, 43459, 42757, 41603, 41207, 42189, 47244, 45965, 43207, 43782, 42892, 41773, 43038, 44802, 42537, 39641, 39024, 38067, 38291, 38667, 43466, 40660, 37461, 36668, 36209, 35585, 36206, 36572, 35886, 33784, 34969, 35322, 38316, 36003, 36928, 34440, 32878, 33008, 32347, 32641, 32162, 32464, 32538, 30899, 31315, 31343, 32391, 32817, 35190, 35965, 35141, 35102, 35027, 38000, 38340, 38927, 38797, 38640, 38905, 38292, 38445, 39053, 35630, 35496, 37100, 36395, 37135, 36801, 36201, 34049, 34597, 37539, 37422, 37858, 37408, 37520, 35645, 36030, 36693, 36993, 37378, 37003, 37038, 33946, 32970, 34082, 34383, 33777, 33821, 33293, 31465, 32035, 34117, 33317, 34100, 34797, 33788, 32079, 32699, 34454, 34683, 37611, 39169, 39381, 37069, 36420, 38818, 38825, 37879, 36604, 36163, 35340, 34489, 36339, 37275, 36929, 35655, 36175, 33166, 32931, 31365, 31276, 30756, 30782, 30816, 32140, 30739, 29274, 29188, 29164, 29365, 29697, 30356, 29802, 27852, 28876, 28903, 28348, 30011, 31126, 30420, 28410, 28324, 29069, 29940, 28673, 27808, 26414, 25169, 25555, 25460, 25967, 26107, 26011, 25780, 24579, 24695, 24137, 23415, 24737, 25498, 25018, 23462, 23939, 23127, 23064, 23733, 24827, 24686, 23382, 23015, 23436, 28247, 32345, 33396, 33458, 32959, 32690, 31981, 31826, 32385, 33390, 32395, 30482, 30700, 31699, 32081, 32934, 33997, 32539, 30655, 31311, 30949, 31388];
// Data array for number of daily generated words
var data2 = [0, 6218, 5948, 6738, 7137, 10181, 8211, 6271, 6575, 6358, 6580, 6208, 6166, 5402, 2118, 4865, 5184, 8179, 4312, 2287, 6400, 5824, 5958, 4627, 4871, 7788, 4913, 13843, 5045, 9641, 6262, 12709, 9898, 5287, 4789, 18666, 10200, 7500, 8926, 6960, 4251, 4639, 5208, 4795, 6392, 4391, 6301, 4333, 6417, 4712, 4465, 4619, 6539, 4073, 10664, 4584, 5592, 8800, 6557, 3293, 10044, 6282, 3590, 5696, 6446, 5343, 3159, 3147, 9375, 3159, 3125, 6605, 5641, 5503, 5189, 6605, 4373, 6658, 6212, 5552, 5121, 4448, 4542, 5254, 5597, 5695, 6439, 6982, 3266, 6568, 6187, 6341, 6249, 6309, 6329, 6174, 6763, 6639, 6307, 6563, 6547, 6256, 6265, 6182, 6183, 6308, 6633, 9817, 10273, 10012, 9930, 9970, 10094, 9995, 9799, 9432, 9522, 9631, 9513, 9391, 12826, 9786, 9371, 9521, 9366, 9361, 9601, 9665, 9725, 9669, 9489, 9254, 9560, 9372, 9281, 9407, 6405, 6275, 6127, 6251, 6203, 6318, 6317, 6279, 6317, 9299, 6420, 6261, 6128, 6204, 12374, 9319, 9295, 9236, 9334, 9273, 9329, 9466, 9176, 9542, 9258, 9239, 9363, 9253, 9282, 9661, 9672, 9754, 9313, 9234, 9529, 9366, 9295, 9320, 9187, 9432, 9184, 6200, 12496, 9439, 9555, 9559, 9270, 9441, 9635, 9552, 9392, 9822, 9359, 9545, 9331, 9415, 9493, 9605, 9735, 9517, 9457, 9415, 9567, 9486, 9696, 12712, 12672, 9365, 9425, 9420, 9407, 9584, 9338, 9474, 9441, 9445, 9480, 9725, 6339, 12464, 9471, 9373, 9353, 9439, 9516, 9345, 9116, 9438, 9445, 9302, 9383, 9349, 9349, 9374, 9470, 9626, 9437, 9426, 9447, 9284, 9263, 9226, 9441, 9332, 9296, 10371, 11303, 10436, 9365, 6246, 12392, 9325, 9314, 9254, 9286, 9241, 9181, 9137, 9291, 9213, 9387, 9286, 9421, 9325, 6140, 12340, 11985, 9284, 10049, 9279, 9213, 9307, 9454, 9417, 9424, 9817, 15670, 9332, 9374, 9356, 9317, 9370, 9674, 9516, 9713, 9414, 9611, 9590, 9774, 9458, 9578, 19962, 9740, 9584, 9372, 9502, 9402, 9657, 9457, 9533, 9626, 9524, 9343, 6433, 12409, 9470, 9353, 9437, 9465, 9417, 9412, 9340, 9488, 9949, 9518, 9195, 9469, 9387, 9415, 9454, 9356, 9516, 9727, 9805, 9549, 9688, 9424, 9418, 9461, 9346, 9384, 9419, 9423, 9293, 9438, 9468, 9648, 9290, 9352, 6213, 12475, 9331, 9396, 9222, 9232, 9976, 9423, 9409, 9401, 9382, 9391, 9384, 9345, 12591, 9304, 9238, 9573, 9259, 9413, 9448, 6392, 12369, 9427, 9380, 9408, 10075, 10389, 10081, 10960, 12606, 12553, 12773, 12632, 12280, 12384, 12311, 12476, 6354, 15948, 12746, 12617, 12393, 12540, 12832, 12549, 12428, 12620, 12592, 6332, 15921, 12355, 12430, 12638, 12564, 12427, 12490, 12563, 12555, 12237, 12350, 12437, 12255, 12323, 12481, 12337, 12354, 12391, 12399, 12298, 12314, 12489, 12338, 12409, 12386, 12513, 12411, 12392, 12318, 12452, 12470, 12294, 6228, 6240, 9656, 15517, 12540, 0, 12486, 12359, 21631, 12467, 12322, 12441, 12601, 12528, 12452, 12474, 12484, 12416, 12395, 6365, 12361, 12401, 12445, 6299, 9322, 9354, 9157, 9432, 9229, 9282, 9373, 9252, 9295, 9496, 9317, 9277, 9286, 9327, 9294, 9224, 9344, 9350, 9445, 9360, 9322, 9302, 9276, 9464, 9338, 9239, 9904, 9336, 9346, 9350, 9222, 9431, 9355, 9501, 9340, 9343, 9263, 9403, 9326, 9329, 9335, 9426, 9378, 9400, 9476, 9298, 9376, 9353, 9696, 9389, 9319, 9480, 12542, 9414, 9419, 9299, 9281, 9323, 9362, 9220, 9347, 9271, 9279, 9261, 9438, 9341, 9223, 9372, 9400, 9333, 9294, 9249, 9519, 9239, 9390, 9260, 9268, 6227, 6151, 9348, 9186, 9390, 9689, 9504, 9344, 9284, 9508, 9213, 9288, 9205, 9180, 6327, 6197, 6159, 6125, 6167, 6217, 6202, 6193, 6144, 6162, 6139, 6194, 6220, 6214, 6225, 6271, 6171, 6198, 6171, 6572, 6213, 6274, 9327, 6224, 6276, 6175, 6130, 6208, 6141, 6360, 6324, 6196, 6190, 6258, 6570, 3216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 173, 0, 0, 6317, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1590, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
 
 
var yongsheng_word_pageviews = d3.select("#yongsheng_word_pageviews").append("svg:svg")
      .attr("width", w + m[1] + m[3])
      .attr("height", h + m[0] + m[2] + 30)
      .append("svg:g")
      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var xAxis = d3.svg.axis().scale(xlabel).tickSize(-h).tickSubdivide(true);

yongsheng_word_pageviews.append("svg:g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + h + ")")
      .call(xAxis);

yongsheng_word_pageviews.append("text")
	.attr("class", "bottomlabel")
	.attr("text-anchor", "end")
	.attr("y", h + 50)
	.attr("x", w - 220)
	.attr("dy", ".2em")
	.text("Selected Top Ranked Fantasy Novel: Yong Sheng (奇幻玄幻: 永生),");

yongsheng_word_pageviews.append("text")
	.attr("class", "bottomlabelauthor")
	.attr("text-anchor", "end")
	.attr("y", h + 70)
	.attr("x", w - 40)
	.attr("dy", ".2em")
	.text("Written by millionaire author: Zhong Wang (王钟), Pen name: Meng Ru Shen Ji (梦入神机).")

var yAxisLeft = d3.svg.axis().scale(y1).ticks(4).orient("left");

yongsheng_word_pageviews.append("svg:g")
      .attr("class", "y axis axisLeft")
      .attr("transform", "translate(-15,0)")
      .call(yAxisLeft);
			
yongsheng_word_pageviews.append("text")
	.attr("class", "scaleleft")
	.attr("text-anchor", "end")
	.attr("y", 1)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Pageviews");

var yAxisRight = d3.svg.axis().scale(y2).ticks(6).orient("right");

yongsheng_word_pageviews.append("svg:g")
	      .attr("class", "y axis axisRight")
	      .attr("transform", "translate(" + (w+15) + ",0)")
	      .call(yAxisRight);
	
yongsheng_word_pageviews.append("text")
	.attr("class", "scaleright")
	.attr("text-anchor", "end")
	.attr("y", w)
	.attr("dy", ".01em")
	.attr("transform", "rotate(-90)")
	.text("Number of Words (per day)");

yongsheng_word_pageviews.append("svg:path").attr("d", line1(data1)).attr("class", "data1");
yongsheng_word_pageviews.append("svg:path").attr("d", line2(data2)).attr("class", "data2");


$(function() {
	jQuery('div#shengwang_word_pageviews').show();
	jQuery('div#tongtianzhilu_word_pageviews').hide();
	jQuery('div#xianmobian_word_pageviews').hide();
	jQuery('div#yongsheng_word_pageviews').hide();

	$("#button4").click(function() {
		jQuery('div#shengwang_word_pageviews').show();
		jQuery('div#tongtianzhilu_word_pageviews').hide();
		jQuery('div#xianmobian_word_pageviews').hide();
		jQuery('div#yongsheng_word_pageviews').hide();
	});

	$("#button5").click(function() {
		jQuery('div#shengwang_word_pageviews').hide();
		jQuery('div#tongtianzhilu_word_pageviews').show();
		jQuery('div#xianmobian_word_pageviews').hide();
		jQuery('div#yongsheng_word_pageviews').hide();
	});

	$("#button6").click(function() {
		jQuery('div#shengwang_word_pageviews').hide();
		jQuery('div#tongtianzhilu_word_pageviews').hide();
		jQuery('div#xianmobian_word_pageviews').show();
		jQuery('div#yongsheng_word_pageviews').hide();
	});

	$("#button7").click(function() {
		jQuery('div#shengwang_word_pageviews').hide();
		jQuery('div#tongtianzhilu_word_pageviews').hide();
		jQuery('div#xianmobian_word_pageviews').hide();
		jQuery('div#yongsheng_word_pageviews').show();
	});
});
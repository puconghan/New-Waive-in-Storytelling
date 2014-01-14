$(function() {
	jQuery('div#shengwang_subscription_pageviews').show();
	jQuery('div#tongtianzhilu_subscription_pageviews').hide();
	jQuery('div#xianmobian_subscription_pageviews').hide();
	jQuery('div#yongsheng_subscription_pageviews').hide();

	$("#button8").click(function() {
		jQuery('div#shengwang_subscription_pageviews').show();
		jQuery('div#tongtianzhilu_subscription_pageviews').hide();
		jQuery('div#xianmobian_subscription_pageviews').hide();
		jQuery('div#yongsheng_subscription_pageviews').hide();
	});

	$("#button9").click(function() {
		jQuery('div#shengwang_subscription_pageviews').hide();
		jQuery('div#tongtianzhilu_subscription_pageviews').show();
		jQuery('div#xianmobian_subscription_pageviews').hide();
		jQuery('div#yongsheng_subscription_pageviews').hide();
	});

	$("#button10").click(function() {
		jQuery('div#shengwang_subscription_pageviews').hide();
		jQuery('div#tongtianzhilu_subscription_pageviews').hide();
		jQuery('div#xianmobian_subscription_pageviews').show();
		jQuery('div#yongsheng_subscription_pageviews').hide();
	});

	$("#button11").click(function() {
		jQuery('div#shengwang_subscription_pageviews').hide();
		jQuery('div#tongtianzhilu_subscription_pageviews').hide();
		jQuery('div#xianmobian_subscription_pageviews').hide();
		jQuery('div#yongsheng_subscription_pageviews').show();
	});
});
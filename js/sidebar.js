$(function() {
	$('#top-story').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar1').toggleClass('highlight');
	});

	$('#challenge').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar2').toggleClass('highlight');
	});

	$('#property-right').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar3').toggleClass('highlight');
	});

	$('#profitablity').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar4').toggleClass('highlight');
	});

	$('#change').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar5').toggleClass('highlight');
	});

	$('#user-behavior').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar6').toggleClass('highlight');
	});

	$('#web-content').waypoint(function(direction) {
		$('.sidebar li').removeClass('highlight');
		$('#sidebar7').toggleClass('highlight');
	});
});
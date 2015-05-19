jQuery(document).ready(function(){
	$('#slider').coinslider({
		width:1024,
		height:352
	});
	
	var _str_path = $.url().attr('path');
	$("#headerNavMenu li a").each(function(){
		var _str_each_path = $(this).attr("href");
		if(_str_each_path == _str_path) {
			$(this).css({"color": "white", "background-color": "#0088cc"});
		};
	});
});
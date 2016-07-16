
$( document ).ready(function() {
    // Table scripts to achieve responsiveness
	$('table').wrap('<div class="table-responsive"></div>');
	$('table').addClass('table table-bordered table-striped table-hover');

	// Centers blog images
	$('#blog p > img').addClass('img-responsive center-block');
	$('#blog_content').find('img').addClass('shadow');

	// Removes RPub headers
	// if ($document.getElementsByTagName('iframe')[0].contents().find("body").hasClass("show-toolbars")) {
	// 	$document.getElementsByTagName('iframe')[0].contents().find("body").removeClass("show-toolbars").addClass("hide-toolbars");
	// }
});



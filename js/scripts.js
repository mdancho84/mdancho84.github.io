
$( document ).ready(function() {
    // Table scripts to achieve responsiveness
	$('table').wrap('<div class="table-responsive"></div>');
	$('table').addClass('table table-bordered table-striped table-hover');

	// Centers blog images
	$('#blog p > img').addClass('img-responsive center-block');

});



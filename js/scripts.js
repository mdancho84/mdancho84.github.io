
$( document ).ready(function() {

// Table scripts to achieve responsiveness
	$('table').wrap('<div class="table-responsive"></div>');
	$('table').addClass('table table-bordered table-striped table-hover');

// Centers blog images
	$('#blog p > img').addClass('img-responsive center-block');
	$('#blog_content').find('img').addClass('shadow');

// Tooltip Hover Over
    $('[data-toggle="tooltip"]').tooltip();

// Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: 1000, //Set AutoPlay to 3 seconds
        center:true,
        margin:10,
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    //fix images
    $(".owl-carousel").each(function(index, el) {
        var containerHeight = $(el).height();
        $(el).find("img").each(function(index, img) {
          var w = $(img).prop('naturalWidth');
          var h = $(img).prop('naturalHeight');
          $(img).css({
            'width':  Math.round(containerHeight * w / h) + 'px',
            'height': '250px' //containerHeight + 'px'
          });
        }),
        $(el).owlCarousel({
          autoWidth: true
        });
    });


// Scroll Top Button

	//Show / Hide button
    var $topLinkBlock = $('#top-link-block');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {    //Check to see if the window is top if not then display button
            $topLinkBlock.affix({
                offset: {top: -20} //needed for the affix to work, must be negative otherwise fadeout does not work
            });
            TweenMax.to($topLinkBlock, 0.5, {
                left: "2.5%",
                x: 0,
                y: -20
            });
        } else {
            TweenMax.to($topLinkBlock, 2.0, {
                left: "-50%",
                x: 0,
                y: -20
            });
        }
    });

    //Scale on Hover
    $topLinkBlock.hover(
            function(){
                TweenMax.to($(this), 0.5, {scale: 1.1});
            },
            function(){
                TweenMax.to($(this), 0.5, {scale: 1.0});
            }
    );

});

// Add active based on path name
// https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
    $(function() {
        var pathname = location.pathname.split("/")[1]
        if (pathname != "") {
            $('nav a[href^="/' + pathname + '"]').parent().addClass('active');
        }
        if (pathname == "blog") {
            $('nav a[href^="/' + pathname + '/index"]').parent().addClass('active');
        }

    });


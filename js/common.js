$(function() {

	$('.slide').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(".slider").owlCarousel({
		items: 3,
		loop: true,
		responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1,
    },
    // breakpoint from 480 up
    480 : {
    	items: 1
    },
    // breakpoint from 768 up
    768 : {
    	items: 2
    },
    1200 : {
    	items: 3
    }
  },
  nav: true,
  navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

"user strict";
$(document).ready(function () {

/*-------- Header Start--------*/
var fixed_top = $("header");
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 200) {
		fixed_top.addClass("header--fixed animated fadeInDown");
	} else {
		fixed_top.removeClass("header--fixed animated fadeInDown");
	}
});

//close mobile menu after clicking nav-link
$(".nav-link").click(function () {
	$(".navbar-toggler").addClass("collapsed");
});
$(".nav-link").click(function () {
	$(".navbar-collapse").removeClass("show");
});
/*-------- Header End--------*/

/*-------- Testimonial Start--------*/
$(".testimonial-wrapper").owlCarousel({
	loop: true,
	smartSpeed: 600,
	margin:15,
	autoplayTimeout: 2000,
	autoplay:true,
	nav: false,
	dots: true,
	responsiveClass: true,
	navText: [
		'<i class="fas fa-arrow-left"></i>',
		'<i class="fas fa-arrow-right"></i>',
	],
	responsive: {
		0: {
			items: 1,
		},
		500: {
			items: 1,
		},
		767: {
			items: 2,
		},
		991: {
			items: 2,
		},
		1199: {
			items: 2,
		},
		1399: {
			items: 2,
		},
	},
});
/*-------- Testimonial End--------*/

/*-------- Popup Start--------*/
$(function() {
	$('.g-img').magnificPopup({
		type: 'image',
		gallery:{
		  enabled:true
		}
	  });
});
/*-------- Popup End--------*/
//contact form js
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
                // Set the message text.
                $(formMessages).text(response);
                // Clear the form.
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });

});




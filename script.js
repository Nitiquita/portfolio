$(document).ready(function () {
    let height = $(window).outerHeight();
    let width = $(window).outerWidth();
    if ($(window).outerWidth() >= 768) {
        $('#home').outerHeight(height);
        $('#home').outerWidth(width);
        $('#about').outerHeight(height);
        $('#about').outerWidth(width);
        $('#projects1').outerHeight(height);
        $('#projects1').outerWidth(width);
        $('#projects2').outerHeight(height);
        $('#projects2').outerWidth(width);
        $('#contact').outerHeight(height);
        $('#contact').outerWidth(width);
    }
    $('#welcome').typeIt({
        speed: 50,
        autoStart: false
    });

    /* Navigation Scroll */

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    if ($(window).outerWidth() < 767) {
        $('#home').outerHeight(height);
        $('#about div').removeClass('col span-1-of-4')
        $('#projects1 div').removeClass('col span-1-of-2')
        $('#projects1 div').removeClass('row')
        $('#projects1 div').removeClass('row')
        $('#projects2 div').removeClass('col span-1-of-2')
        $('#projects2 div').removeClass('row')
        $('#projects2 div').removeClass('row')
        $('#contact').outerHeight(height);
    }

    $('#mobile-nav').click(function() {
        $('#mobile-nav').css({
            'display': 'none'
        })
        $('#mobile-nav-close').css({
            'display': 'block'
        })
        $('nav ul li').css({
            'display': 'inline-block',
            'font-size': '22px',
            'margin-top': '10px'
        })
    })

    $('#mobile-nav-close').click(function() {
        $('#mobile-nav-close').css({
            'display': 'none'
        })
        $('#mobile-nav').css({
            'display': 'block'
        })
        $('nav ul li').css({
            'display': 'none'
        })
    })



})



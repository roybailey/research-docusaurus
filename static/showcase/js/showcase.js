var em = 14;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// loader
$(window)
    .load(function() { // makes sure the whole site is loaded
        $('#status')
            .fadeOut(); // will first fade out the loading animation
        $('#preloader')
            .delay(350)
            .fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body')
            .delay(350)
            .css({ 'overflow': 'visible' });
        w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        console.log(`window.width=${w} window.height=${h}`);
    })


$(window)
    .load(
        function() {
            var myCarousel = document.querySelector('#carouselShowcaseExample')
            var carousel = new bootstrap.Carousel(myCarousel)
        }
    );

/*
==========================================================================
CONTACT FORM JS
==========================================================================
*/

$(document)
    .ready(function() {

        // ------------------------------------------------------------
        // ANIMATIONS ON SCROLL ACTION
        // ------------------------------------------------------------
        var triggerDonuts = false;
        var triggerSkillset = false;
        var triggerWorkArea = false;

        $(document)
            .scroll(function() {

                // sensible offset from top to begin animations
                var topbar = $(window)
                    .scrollTop();
                var triggerPoint = (topbar + h - (em * 20));

                // donut charts
                var modDonuts = $('.donut-chart')
                    .offset();

                if (!triggerDonuts && modDonuts && modDonuts.top < triggerPoint) {
                    $('.donut-chart')
                        .easyPieChart({
                            easing: 'easeOutBounce',
                            size: 140, // 10x font-size as we use 10em for width and height
                            barColor: rgbPrimary,
                            trackColor: rgbSecondary,
                            onStep: function(from, to, percent) {
                                $(this.el)
                                    .find('.donut-percent')
                                    .text(Math.round(percent));
                            }
                        });
                    triggerDonuts = true;
                }

                // skillset charts

                var modSkillset = $('#skillset-charts')
                    .offset();

                if (!triggerSkillset && modSkillset && modSkillset.top < triggerPoint) {
                    $('.skillset-text')
                        .toggleClass('animated');
                    $('.skillset-text-left')
                        .toggleClass('bounceInLeft')
                        .toggleClass('animated');
                    $('.skillset-text-right')
                        .toggleClass('bounceInRight')
                        .toggleClass('animated');
                    $('.full')
                        .toggleClass('animated');
                    $('.empty')
                        .toggleClass('animated');
                    triggerSkillset = true;
                }

                // work area

                var modWorkArea = $('#work-area-title')
                    .offset();

                //console.log(`top=${topbar} work-area=${modWorkArea.top}`);

                if (!triggerWorkArea && modWorkArea && modWorkArea.top < triggerPoint) {
                    //console.log('Running WorkArea Animations');
                    $('#work-area-title')
                        .toggleClass('bounceInLeft')
                        .toggleClass('animated')
                        .css("opacity", "1");
                    $('#work-area-tabs')
                        .toggleClass('bounceInRight')
                        .toggleClass('animated')
                        .css("opacity", "1");
                    triggerWorkArea = true;
                }
            });

        // ------------------------------------------------------------
        // EMAIL FORM HANDLING
        // ------------------------------------------------------------

        $("#submit_btn")
            .click(function() {
                //get input field values
                var user_name = $('input[name=name]')
                    .val();
                var user_email = $('input[name=email]')
                    .val();
                var user_phone = $('input[name=phone]')
                    .val();
                var user_message = $('textarea[name=message]')
                    .val();

                //simple validation at client's end
                //we simply change border color to red if empty field using .css()
                var proceed = true;
                if (user_name == "") {
                    $('input[name=name]')
                        .css('border-color', 'red');
                    proceed = false;
                }
                if (user_email == "") {
                    $('input[name=email]')
                        .css('border-color', 'red');
                    proceed = false;
                }
                if (user_phone == "") {
                    $('input[name=phone]')
                        .css('border-color', 'red');
                    proceed = false;
                }
                if (user_message == "") {
                    $('textarea[name=message]')
                        .css('border-color', 'red');
                    proceed = false;
                }

                //everything looks good! proceed...
                if (proceed) {
                    //data to be sent to server
                    post_data = { 'userName': user_name, 'userEmail': user_email, 'userPhone': user_phone, 'userMessage': user_message };

                    //Ajax post data to server
                    $.post('contact.php', post_data, function(response) {

                        //load json data from server and output message
                        if (response.type == 'error') {
                            output = '<div class="error">' + response.text + '</div>';
                        } else {

                            output = '<div class="success">' + response.text + '</div>';

                            //reset values in all input fields
                            $('#contact_form input')
                                .val('');
                            $('#contact_form textarea')
                                .val('');
                        }

                        $("#result")
                            .hide()
                            .html(output)
                            .slideDown();
                    }, 'json');

                }
            });

        //reset previously set border colors and hide all message on .keyup()
        $("#contact_form input, #contact_form textarea")
            .keyup(function() {
                $("#contact_form input, #contact_form textarea")
                    .css('border-color', '');
                $("#result")
                    .slideUp();
            });

    });

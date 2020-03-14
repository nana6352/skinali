$(window).load(function(){
    $(".before-after").twentytwenty({
        before_label: 'Без скіналі',
        after_label: 'Зі скіналі'
    });
    $(".before-slider").slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });

    /*Select customization*/
    $('.select').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var val = $(this).attr('data-value');
        $('#select-type').val(val);
        $('.select__checked').text(val);
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    
    /*Show map only when scrolled to it*/
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top; // number of pixels to reviews section top
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if(windowTop > reviewsTop){
            $('#map').html('<iframe src="https://www.google.com/maps/d/embed?mid=1BfwunEVuSwkiu8Fm65OJquFZ6qN_cNeD" width="640" height="480"></iframe>');
            $(window).unbind('scroll');
        }
    });
});
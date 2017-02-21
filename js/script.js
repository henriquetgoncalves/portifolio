$(function () {    
    $('a.bar').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 500, 'linear');        
        //alert($(this).html());
        $('title').html($(this).html() + " - Henrique Gonçalves");

        // Outras Animações
        // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

    });
    $('a.aSobre').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 500, 'linear');

        $('title').html("Contato - Henrique Gonçalves");

        // Outras Animações
        // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce


    });
});


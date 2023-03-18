$(function ($) {
    $(window).on('load',function(){
        $(".splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
        $(".splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
      });

    $('.openbtn, .nav a').on('click', function () {
        if ($('.nav').is(':hidden')) {
        } else {
            $('.openbtn, .nav').toggleClass('show');
        }
    });

    $('.fadein').css('visibility', 'hidden');
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        if ($('.firstView').height() < $(this).scrollTop()) {
            $('.openbtn').addClass('change-color');
        } else {
            $('.openbtn').removeClass('change-color');
        }
        $('.fadein').each(function () {
            var objectPosition = $(this).offset().top;
            if (matchMedia('(max-width: 480px)').matches) {
                // スマホサイズ
                if (topWindow > objectPosition - windowHeight + 100) {
                    $(this).addClass("fadein-anime");
                }
            } else {
                if (topWindow > objectPosition - windowHeight + 200) {
                    $(this).addClass("fadein-anime");
                }
            }
        });
    });
});
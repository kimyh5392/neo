(function($){
    // page header 관련
    setTimeout(function(){
        $('.page-header').addClass('show');
    });
    
    // lnb 관련
    setTimeout(function(){
        $('.lnb-tab, .consult-form').addClass('show');
    }, 1000);

    // 타이핑 효과
    function typed() {
        TypeHangul.type('.typed', {
            intervalType: 120,
            humanize: .5,
        });
    }
    typed();
    
    // 영역별 효과
    $(window).on('scroll', function() {
        $('.effect').each(function(index, elem) {
            if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 2)) {
                $(elem).addClass('show');
            }
        });
    });

})(jQuery);
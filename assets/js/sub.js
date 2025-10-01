(function($){
    // page header 관련
    setTimeout(function(){
        $('.page-header').addClass('show');
    });
    
    // lnb 관련
    setTimeout(function(){
        $('.lnb-tab').addClass('show');
    }, 1000);

    // 타이핑 효과
    function typed() {
        TypeHangul.type('.typed', {
            intervalType: 120,
            humanize: .5,
        });
    }
    typed();

})(jQuery);
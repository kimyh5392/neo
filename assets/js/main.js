(function($){

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // process-list 
    let step = 1;
    const maxStep = 6;
    const $process = $(".process-list");
    let interval;
    let started = false; // 중복 실행 방지

    function changeStep(newStep = null) {
        if (newStep) step = newStep;

        $process.removeClass(function (index, className) {
            return (className.match(/type-\d+/g) || []).join(" ");
        });

        const newClass = "type-" + step;
        $process.addClass(newClass);

        $process.find("li").removeClass("active");
        $process.find('li[data-class="' + newClass + '"]').addClass("active");

        step++;
        if (step > maxStep) step = 1;
    }

    function startInterval() {
        if (interval) clearInterval(interval);
        interval = setInterval(changeStep, 2000);
    }

    $process.find("li > a").on("click", function() {
        clearInterval(interval);
        const clickedClass = $(this).parent().data("class");
        const clickedStep = parseInt(clickedClass.split("-")[1]);
        changeStep(clickedStep);
        startInterval();
    });

    // Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true; 
                changeStep();   // 최초 실행
                startInterval(); // 자동 순환 시작
            }
        });
    }, { threshold: 0.3 }); // 섹션이 30% 이상 보일 때 실행

    observer.observe(document.querySelector(".process-list"));
    
    // 영역별 효과
    $(window).on('scroll', function() {
        $('.effect').each(function(index, elem) {
            if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 2)) {
                $(elem).addClass('show');
            }
        });
    });

})(jQuery);

// jumbo-slider
var jumboSwiper = new Swiper(".jumbo-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// case-swiper
var caseSwiper1 = new Swiper(".case-slider-1", {
    slidesPerView: 1.6,
    spaceBetween: 26,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
var caseSwiper2 = new Swiper(".case-slider-2", {
    slidesPerView: 1.6,
    spaceBetween: 26,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
var caseSwiper3 = new Swiper(".case-slider-3", {
    slidesPerView: 1.6,
    spaceBetween: 26,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
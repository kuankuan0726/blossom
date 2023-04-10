$(window).ready(function () {
    let width = $(window).width();
    if (width <= 414) {
        $('.class2').css({ display: "none" });
        $('.class3').css({ display: "block" });
        $('.class3').html('親手綁一束花，最純粹也最實用的生活技能，<br>帶一束花出門，最單純的美好。')
    }
})
$('.burger').click(function () {
    
    if ($('.menu').css("display") === 'none') {
        $('.menu').css({ display: "block" })
        $('.burger i').removeClass()
        $('.burger i').addClass('fa-solid fa-xmark x')
        $('.burger').css({ backgroundColor: "#AC725C", color: "#FAF8F6" })
        $('body').css({'overflow-y':"hidden"})
    } else {
        $('.menu').css({ display: "none" })
        $('.burger i').removeClass()
        $('.burger i').addClass('fa-solid fa-bars line')
        $('.burger').css({ backgroundColor: "#FAF8F6", color: "#AC725C" })
        $('body').css({'overflow-y':"auto"})
    }
})

$(".goTop").click(function () {
    $("html,body").animate({ "scrollTop": "0" });
})


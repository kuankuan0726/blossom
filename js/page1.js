$(function () {
    $('.mainPage .button').click(function () {
        $(this).css({ backgroundColor: "#FAF8F6", color: "#AC725C" });
        setTimeout(function () {
            $("html,body").animate({ "scrollTop": "742" })
        }, 300)
        setTimeout(function () {
            $('.mainPage .button').css({ backgroundColor: "#AC725C", color: "#FAF8F6" })
        }, 1000)
    })
    $(".goTop").click(function () {
        $("html,body").animate({ "scrollTop": "0" });
    })

    $('.burger').click(function () {
        if ($('.menu').css("display") === 'none') {
            $('.menu').css({ display: "block" })
            $('.burger i').removeClass()
            $('.burger i').addClass('fa-solid fa-xmark x')
            $('.burger').css({ backgroundColor: "#AC725C", color: "#FAF8F6" })
        } else {
            $('.menu').css({ display: "none" })
            $('.burger i').removeClass()
            $('.burger i').addClass('fa-solid fa-bars line')
            $('.burger').css({ backgroundColor: "#FAF8F6", color: "#AC725C" })
        }
    })




    let i = 5
    let c = ["花藍&nbsp;•&nbsp;白色戀人", "花束&nbsp;•&nbsp;純潔之愛", "花束&nbsp;•&nbsp;春日暖陽", "花束&nbsp;•&nbsp;盛夏光年"]
    $('.page5_left .fa-chevron-left').css({ opacity: "0" })
    $('.ul3 p').css({ opacity: "0" })
    $('.ul3 .mainpic:nth-child(4) p').css({ opacity: "1" })
    $('.page5_left .fa-chevron-right').click(function () {
        $('.page5_left .fa-chevron-left').css({ opacity: "1" })
        if (i > 2) {
            i = i - 1
            $('.name').html(c[i - 2])
            $('.ul3 .mainpic:nth-child(' + i + ') p').css({ opacity: "0" })
            $('.ul3 .mainpic:nth-child(' + (i - 1) + ') p').css({ opacity: "1" })
            $('.ul3 .mainpic:nth-child(' + i + ')').animate(
                { "width": 0, "top": "87%", "left": "10%" },
                1000
            )
        }
        if (i === 2) {

            $('.page5_left .fa-chevron-right').css({ opacity: "0" })
        }

    });

    $('.page5_left .fa-chevron-left').click(function () {
        $('.page5_left .fa-chevron-right').css({ opacity: "1" })

        if (i < 5) {
            $('.ul3 .mainpic:nth-child(' + (i) + ') p').css({ opacity: "1" })
            $('.ul3 .mainpic:nth-child(' + (i - 1) + ') p').css({ opacity: "0" })
            $('.ul3 .mainpic:nth-child(' + i + ')').animate(
                { "width": "430px", "top": "0", "left": "0" },
                1000
            )

            i = i + 1
            $('.name').html(c[i - 2])
        }
        if (i === 5) {

            $('.page5_left .fa-chevron-left').css({ opacity: 0 })

        }

    });

    // 無限輪播
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })
})

$(function () {

    let a = ["花藝剪刀", "花藝工具組", "花藝手套"]
    let i = 0
    $('.left').css({ opacity: "0" })
    $('.right').click(function () {
        if (i < 2) {
            i += 1
            $('.name').html(a[i])
            $('.tool' + i).css({ opacity: "0" })
            $('.left').css({ opacity: "1" })

        }
        if (i === 2) {
            $('.right').css({ opacity: "0" })
        }
    })

    $('.left').click(function () {
        if (0 < i && i < 3) {
            i -= 1
            $('.name').html(a[i])
            $('.tool' + (i + 1)).css({ opacity: "1" })
        }
        if (i === 0) {
            $('.left').css({ opacity: "0" })
            $('.right').css({ opacity: "1" })
        }

    })

    // 精選花器內容微調
    $('.v1 ul li:last p').html('阿波羅神')
    $('.v2 ul li:last p').html('幾何紙花器')

})

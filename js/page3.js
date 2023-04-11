$(function () {
    $('.wedding-pic button').click(function () {
        $('.wedding-pic').toggleClass('on');
        if (
            $('.wedding-pic').hasClass('on')
        ) {
            $('.left img:nth-child(1)').attr('src', './image/wedding/o1.png');
            $('.left img:nth-child(2)').attr('src', './image/wedding/o2.png');
            $('.left img:nth-child(3)').attr('src', './image/wedding/o3.png');
            $('.left img:nth-child(4)').attr('src', './image/wedding/o4.png');
            $('.left img:nth-child(5)').attr('src', './image/wedding/o5.png');
            $('.left img:nth-child(6)').attr('src', './image/wedding/o6.png');
            $('.right img:nth-child(1)').attr('src', './image/wedding/o7.png');
            $('.right img:nth-child(2)').attr('src', './image/wedding/o8.png');
            $('.right img:nth-child(3)').attr('src', './image/wedding/o9.png');
            $('.right img:nth-child(4)').attr('src', './image/wedding/o10.png');
            $('.right img:nth-child(5)').attr('src', './image/wedding/o11.png');
            $('.right img:nth-child(6)').attr('src', './image/wedding/o12.png');
            $('.middle img').attr('src', './image/wedding/outdoor.png');
            $('.page h1').html("戶外婚禮");

        } else {
            $('.left img:nth-child(1)').attr('src', './image/wedding/i1.png');
            $('.left img:nth-child(2)').attr('src', './image/wedding/i2.png');
            $('.left img:nth-child(3)').attr('src', './image/wedding/i3.png');
            $('.left img:nth-child(4)').attr('src', './image/wedding/i4.png');
            $('.left img:nth-child(5)').attr('src', './image/wedding/i5.png');
            $('.left img:nth-child(6)').attr('src', './image/wedding/i6.png');
            $('.right img:nth-child(1)').attr('src', './image/wedding/i7.png');
            $('.right img:nth-child(2)').attr('src', './image/wedding/i8.png');
            $('.right img:nth-child(3)').attr('src', './image/wedding/i9.png');
            $('.right img:nth-child(4)').attr('src', './image/wedding/i10.png');
            $('.right img:nth-child(5)').attr('src', './image/wedding/i11.png');
            $('.right img:nth-child(6)').attr('src', './image/wedding/i12.png');
            $('.middle img').attr('src', './image/wedding/indoor.png');
            $('.page h1').html("室內婚禮");

        }



    })

})

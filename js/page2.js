$(window).ready(function () {
    let width = $(window).width();
    if (width <= 414) {
        $('.preserved-right .pic2 a').html('丨愛戀粉單朵玫瑰花束');
        $('.preserved-right .pic3 a').html('單朵永生花束丨');
        $('.preserved-right .pic4 a').html('丨寧靜灰單朵永生花束');
        $('.propose-pic .pic1 a').html('鮮花經典求婚玫瑰花 丨');
        $('.propose-pic .pic2 a').html('丨99朵玫瑰花束');
        $('.wedding-pic h1').html('請容我 用純粹的玫瑰<br>在生活中 一朵一朵地堆疊承諾<br> 請容我 用最專一的輪廓在時間裡<br>一次又一次的讓你相信');
    }
})
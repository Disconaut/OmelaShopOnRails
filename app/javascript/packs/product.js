import 'bootstrap';

$(document.body).addClass('product-page');

$('#itemCarousel').bind("slide.bs.carousel", function (e) {
    $('#itemThumbs > li').removeClass('active');
    $(`#itemThumbs > li:nth-child(${e.to + 1})`).addClass('active');
});
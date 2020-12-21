$(document).ready(function() {
    $('.card-img-top1').click(function() {
        $('.card-text1').show().css("text-align", "center");
        $('.card-text1 h6').css("font-weight", "bold");
        $('.card-img-top1').hide();
        $('.card-title1').hide();
    });
    $('.card-img-top2').click(function() {
        $('.card-text2').show().css("text-align", "center");
        $('.card-text2 h6').css("font-weight", "bold");
        $('.card-img-top2').hide();
        $('.card-title2').hide();
    });
    $('.card-img-top3').click(function() {
        $('.card-text3').show().css("text-align", "center");
        $('.card-text3 h6').css("font-weight", "bold");
        $('.card-img-top3').hide();
        $('.card-title3').hide();
    });
    $('.card-title1').click(function() {
        $('.card-text1').show();
        $('.card-img-top1').hide();
        $('.card-title1').hide();
    });
    $('.card-title2').click(function() {
        $('.card-text2').show();
        $('.card-img-top2').hide();
        $('.card-title2').hide();
    });
    $('.card-title3').click(function() {
        $('.card-text3').show();
        $('.card-img-top3').hide();
        $('.card-title3').hide();
    });
    $('.card-text1').click(function() {
        $(this).hide();
        $('.card-img-top1').show();
        $('.card-title1').show();
    });
    $('.card-text2').click(function() {
        $(this).hide();
        $('.card-img-top2').show();
        $('.card-title2').show()
    });
    $('.card-text3').click(function() {
        $(this).hide();
        $('.card-img-top3').show();
        $('.card-title3').show()
    });
});
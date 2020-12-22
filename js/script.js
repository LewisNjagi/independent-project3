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
    $('.card01').mouseenter(function() {
        $('.image-overlay1').css({ opacity: 1});
    });
    $('.card01').mouseleave(function() {
        $('.image-overlay1').css({opacity: 0});
    });
    $('.card2').mouseenter(function() {
        $('.image-overlay2').css({ opacity: 1});
    });
    $('.card2').mouseleave(function() {
        $('.image-overlay2').css({opacity: 0});
    });
    $('.card3').mouseenter(function() {
        $('.image-overlay3').css({ opacity: 1});
    });
    $('.card3').mouseleave(function() {
        $('.image-overlay3').css({opacity: 0});
    });
    $('.card4').mouseenter(function() {
        $('.image-overlay4').css({ opacity: 1});
    });
    $('.card4').mouseleave(function() {
        $('.image-overlay4').css({opacity: 0});
    });
    $('.card5').mouseenter(function() {
        $('.image-overlay5').css({ opacity: 1});
    });
    $('.card5').mouseleave(function() {
        $('.image-overlay5').css({opacity: 0});
    });
    $('.card6').mouseenter(function() {
        $('.image-overlay6').css({ opacity: 1});
    });
    $('.card6').mouseleave(function() {
        $('.image-overlay6').css({opacity: 0});
    });
    $('.card7').mouseenter(function() {
        $('.image-overlay7').css({ opacity: 1});
    });
    $('.card7').mouseleave(function() {
        $('.image-overlay7').css({opacity: 0});
    });
    $('.card8').mouseenter(function() {
        $('.image-overlay8').css({ opacity: 1});
    });
    $('.card8').mouseleave(function() {
        $('.image-overlay8').css({opacity: 0});
    });
});
$(document).ready(function() {
    $('.button').click(function() {
        var name = $('input.name2').val();
        var email = $('input.email').val();
        var message = $('input.message').val();
        if ($('.name2').val() && $('.email').val()) {
            alert(name + ', we have received your message. Thank you for reaching out to us.');
        } else {
            alert('Input field required');
        }
    });
});
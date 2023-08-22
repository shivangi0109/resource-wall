// Client facing scripts here

$(document).ready(function() {

  // toggles my resources and my favourites
  $('.button-left').on('click', function() {
    $('#my-resources').slideDown();
    $('#my-favourites').slideUp();
    $('.button-left').addClass("button-active");
    $('.button-right').removeClass("button-active");
  });

  $('.button-right').on('click', function() {
    $('#my-favourites').removeClass("hidden");
    $('#my-favourites').slideDown({
      start: function () {
        $(this).css({
          display: "flex"
        });
      }
    });

    $('#my-resources').slideUp();
    $('.button-right').addClass("button-active");
    $('.button-left').removeClass("button-active");
  });
})
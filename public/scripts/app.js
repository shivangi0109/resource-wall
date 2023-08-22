// Client facing scripts here

$(document).ready(function() {
  // toggles my resources
  $('.button-left').on('click', function() {
    $('#my-resources').slideDown();
    $('#my-favourites').slideUp();
    $('.button-left').addClass("button-active");
    $('.button-right').removeClass("button-active");
  });

  // toggles my favourites
  $('.button-right').on('click', function() {
    $('#my-favourites').slideDown({
      start: function () {
        $(this).removeClass("hidden");
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
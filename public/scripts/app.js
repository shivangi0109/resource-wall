// Client facing scripts here

$(document).ready(function() {
  var createdOn = $("#formattedDate").text(); // Get the timestamp from the paragraph

  // Use Moment.js to format the timestamp
  var formattedDate = moment(createdOn).startOf('hour').fromNow();

  // Update the content of the paragraph with the formatted date
  $("#formattedDate").text("Created: " + formattedDate);

  // Add click event to the heart button
  $("#heartButton").on('click', function(event) {
    event.preventDefault();
    $(this).addClass("clicked"); // Toggle the "clicked" class
  });
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
});

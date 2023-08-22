// Client facing scripts here

$(document).ready(function() {
  // Add click event to the heart button
  $("#heartButton").on('click', function(event) {
    event.preventDefault();
    $(this).addClass("clicked"); // Toggle the "clicked" class
  });
});

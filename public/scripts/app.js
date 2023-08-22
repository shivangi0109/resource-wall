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
});

// Client facing scripts here

$(document).ready(function() {
  const createdOn = $("#formattedDate").text(); // Get the timestamp from the paragraph

  // Use Moment.js to format the timestamp
  const formattedDate = moment(createdOn).fromNow();

  // Update the content of the paragraph with the formatted date
  $("#formattedDate").text(formattedDate);

  $(".comment-date").each(function () {
    const createdAt = $(this).data("created-at");
    const commentDate = moment(createdAt).fromNow();
    $(this).text("Created: " + commentDate);
  });

  // Add click event to the heart button
  $("#heartButton").on('click', function() {
    $(this).addClass("clicked"); // Toggle the "clicked" class
  });
});

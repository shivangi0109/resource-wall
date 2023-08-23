// Client facing scripts here

$(document).ready(function() {
  // Get the average rating from the data attribute
  const averageRating = parseFloat($('.average-rating').data('rating'));
  const starContainer = $('.star-container');

  // Clear any existing stars
  starContainer.empty();

  // Generate star icons and color them based on the average rating
  for (var i = 1; i <= 5; i++) {
    const starIcon = $('<i>').addClass('fas fa-star');
    if (i <= averageRating) {
      starIcon.addClass('active');
    }
    starContainer.append(starIcon);
  }
});

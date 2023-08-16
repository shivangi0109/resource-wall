// Client facing scripts here
$(() => {
  $('#fetch-resources').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/resources'
    })
    .done((response) => {
      const $resourcesList = $('#resources');
      $resourcesList.empty();

      for(const resource of response.resources) {
        $(`<li class="resource">`).text(resource.title).appendTo($resourcesList);
      }
    });
  });

  // const $form = $('#resourceForm'); // Get the form element

  // $('#resourceForm').on('submit', (event) => {
  //   event.preventDefault();

  //   console.log("clicked");
  //   // const url = $('#url').val();
  //   // const title = $('#title').val();
  //   // const description = $('#description').val();
  //   // const user_id = 1;

  //   // Your AJAX POST request goes here
  //   const formData = $form.serialize(); // Serialize the form data which turns a set of form data into a query string.
  //   console.log(formData);

  //   $.ajax({
  //     method: 'POST',
  //     url: '/resources',
  //     data: formData,
  //   })
  //   .done((response) => {
  //     console.log(response);
  //     alert('URL saved successfully');
  //     $('#resourceForm').reset();
  //   });
  // });
});

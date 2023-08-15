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
});

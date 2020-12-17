function displayResults(responseJson) {
  for (let i=0; i < responseJson.length; i++) {
    $('#results').append(`
        <p><a href="${responseJson[i].html_url}">
        ${responseJson[i].name}
        </a></p>
    `
    )};
}

function findRepos() {
  fetch('https://api.github.com/users/' + $('#username').val() + '/repos')
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
      displayResults(responseJson)
    }); 
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    findRepos();
  });
}

$(watchForm);
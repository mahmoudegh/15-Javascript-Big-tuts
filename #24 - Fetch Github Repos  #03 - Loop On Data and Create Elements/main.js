let theInput = document.querySelector('.get-repos input'),
    getButton = document.querySelector('.get-button'),
    reposData = document.querySelector('.show-data');

getButton.onclick = function () {
  getRepos();
};

// Get repos function
function getRepos() {

  if (theInput.value == '') {
    
    reposData.innerHTML = '<span>Please write githup username</span>';

  } else {
    
    fetch('https://api.github.com/users/ElzeroWebSchool/repos')

    .then((response) => response.json())

    .then((repositories) => {

      // Empty the container
      reposData.innerHTML = '';

      // Loop on repositories
      repositories.forEach(repo => {

        // Create the main div element
        let mainDiv = document.createElement('div');

        // Create repo name text
        let repoName = document.createTextNode(repo.name);

        // Append the text to the main div
        mainDiv.appendChild(repoName);

        // Create repo url anchor tag
        let theUrl = document.createElement('a');

        // Create repo url text
        let theUrlText = document.createTextNode('Visit')

        // Append the repo url text to the anchor tag
        theUrl.appendChild(theUrlText);

        // Add the href
        theUrl.href = `https://github.com/ElzeroWebSchool/${repo.name}`;

        // Set attribute blank
        theUrl.setAttribute('target', '_blank');

        // Append url anchor to main div
        mainDiv.appendChild(theUrl);

        // Append the main div to container
        reposData.appendChild(mainDiv);
      })
    });
  }
}
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
    
    fetch('https://api.githup.com/users/ElzeroWebSchool/repos')

    .then((response) => response.json())

    .then((repositories) => {

      console.log(repositories);
    });
  }
}
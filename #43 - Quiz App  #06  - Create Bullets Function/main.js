// Select elements
let countSpan = document.querySelector(".count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans");

function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText);
      let questionsCount = questionsObject.length;
      console.log(questionsCount);

      // Create Bullets & Set Question Count
      createBullets(questionsCount);
    }
  };

  myRequest.open("GET", "html-questions.json", true);
  myRequest.send();
}

getQuestions();

function createBullets(num) {
  countSpan.innerHTML = num;

  // Create Spans
  for (let i = 0; i < num; i++) {
    // Create Bullet
    let theBullet = document.createElement("span");

    // Check if its first span
    if (i === 0) {
      theBullet.className = "on";
    }

    // Append Bullets to the main bullets container
    bulletsSpanContainer.appendChild(theBullet);
  }
}

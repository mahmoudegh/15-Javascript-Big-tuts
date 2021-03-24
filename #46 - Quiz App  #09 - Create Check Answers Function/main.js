// Select elements
let countSpan = document.querySelector(".count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");

// Set Options
let currentIndex = 0;
let rightanswers = 0;

function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText);
      let qCount = questionsObject.length;

      // Create Bullets & Set Question Count
      createBullets(qCount);

      // Add Questions Data
      addQuestionsData(questionsObject[currentIndex], qCount);

      // Click on submit button
      submitButton.onclick = () => {
        // Get right answer
        let theRightAnswer = questionsObject[currentIndex].right_answer;

        // Increase index
        currentIndex++;

        // Check the answer
        checkAnswer(theRightAnswer, qCount);
      };
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

function addQuestionsData(obj, count) {
  // Create H2 Question Title
  let questionTitle = document.createElement("h2");

  // Create question text
  let questionText = document.createTextNode(obj["title"]);

  // Append question text to question title
  questionTitle.appendChild(questionText);

  // Append question to quiz area
  quizArea.appendChild(questionTitle);

  // Create the answers
  for (let i = 1; i <= 4; i++) {
    // Create the answers div
    let mainDiv = document.createElement("div");

    // Add class to mainDiv
    mainDiv.className = "answer";

    // Create radio input
    let radioInput = document.createElement("input");

    // Add type, name, id, data-Attribute
    radioInput.name = "question";
    radioInput.type = "radio";
    radioInput.id = `answer_${i}`;
    radioInput.dataset.answer = obj[`answer_${i}`];

    // Make first option checked
    if (i === 1) {
      radioInput.checked = true;
    }

    // Create the lable
    let theLabel = document.createElement("label");

    // Add for attr. to lable
    theLabel.htmlFor = `answer_${i}`;

    // Create lable text
    let theLabelText = document.createTextNode(obj[`answer_${i}`]);

    // Add the text to lable
    theLabel.appendChild(theLabelText);

    // Add input & lable to the main div
    mainDiv.appendChild(radioInput);
    mainDiv.appendChild(theLabel);

    // Add main div to ansewers area
    answersArea.appendChild(mainDiv);
  }
}

function checkAnswer(rAnswer, count) {
  let answers = document.getElementsByName("question");
  let theChoosenAnswer;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      theChoosenAnswer = answers[i].dataset.answer;
    }
  }
  console.log(`Right answer is: ${rAnswer}`);
  console.log(`choosen answer is: ${theChoosenAnswer}`);

  if (rAnswer === theChoosenAnswer) {
    rightanswers++;
    console.log("Good answer");
  }
}

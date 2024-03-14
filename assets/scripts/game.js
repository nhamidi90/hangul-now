/* jshint esversion: 8 */

document.addEventListener('DOMContentLoaded', function () {

  let finalWordsList = fetchData();
  if (!finalWordsList) {
    console.log("Sorry, the data cannot be retieved");
  } else {
  }
  document.getElementById("skip-question").addEventListener("click", skipQuestion);
  document.getElementById("start").addEventListener("click", next);
});

async function fetchData() {
  try {
    const response = await fetch('assets/scripts/json/game-data.json');
    if (!response.ok) {
      throw new Error('HTTP error! status: ${response.status}');
    }
    const data = await response.json();
    if (data.words) {
      finalWordsList = data.words;
      randomValueGenerator(finalWordsList);
    } else {
      throw new Error('Invalid data format');
    }

  } catch (error) {
    console.log(error);
  }
}

// Initial game data

let game = {
  questionNumber: 1,
  score: 0,
  totalNumberOfRounds: 10,
};

// Generate random letters and append to boxes

let randomIndex1;
let randomIndex2;
let randomIndex3;

const obj1 = document.getElementById('obj1');
const obj2 = document.getElementById('obj2');
const obj3 = document.getElementById('obj3');

const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');

/**
 * This will generate three random objects from the data, find the korean letters and append them to the draggable elements. 
 * The english equivelants are shuffled and appended to the drop elements.
 */
const randomValueGenerator = () => {
  randomIndex1 = Math.floor(Math.random() * finalWordsList.length);
  randomIndex2 = Math.floor(Math.random() * finalWordsList.length);
  randomIndex3 = Math.floor(Math.random() * finalWordsList.length);

  // Append letters to drag elements

  let korean1 = finalWordsList[randomIndex1].kor;
  obj1.innerHTML = korean1;
  obj1.setAttribute("value", korean1);

  let korean2 = finalWordsList[randomIndex2].kor;
  obj2.innerHTML = korean2;
  obj2.setAttribute("value", korean2);

  let korean3 = finalWordsList[randomIndex3].kor;
  obj3.innerHTML = korean3;
  obj3.setAttribute("value", korean3);

  // Shuffle english letters

  let unshuffled = [
    finalWordsList[randomIndex1].eng,
    finalWordsList[randomIndex2].eng,
    finalWordsList[randomIndex3].eng
  ];

  let shuffled = unshuffled
    .map(value => ({
      value,
      sort: Math.random()
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({
      value
    }) => value);

  // Append shuffled letters to drop elements

  point1.innerHTML = shuffled[0];
  point2.innerHTML = shuffled[1];
  point3.innerHTML = shuffled[2];
};

// Drag and drop functions

const draggable = document.querySelectorAll(".draggable");
const droppable = document.querySelectorAll(".droppable");

draggable.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppable.forEach(elem => {
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragEnter(event) {
  event.target.classList.add("drop-hover");
}

function dragLeave(event) {
  event.target.classList.remove("drop-hover");
}

function dragOver(event) {
  event.preventDefault();
}

/** 
 * If the correct letters are matched, the drag element data will be appended to the drop element. 
 * Otherwise it will return to its original place.
 * Styling is changed depending on the action
 * For each correct answer, score will be increased by 1
 */
function drop(event) {
  event.preventDefault();
  event.target.classList.remove("drop-hover");
  const dragData = event.dataTransfer.getData("text");
  const source = document.getElementById(dragData);
  let sourceValue = source.getAttribute("value");
  let targetValue = event.target.innerText;

  let matchedData = finalWordsList.find(obj => {
    return obj.kor === sourceValue && obj.eng === targetValue;
  });

  if (matchedData) {
    event.target.classList.add("dropped");
    let draggableElement = document.getElementById(dragData);
    draggableElement.classList.add("dragged", "dropped");
    draggableElement.setAttribute("draggable", "false");
    event.target.innerHTML = source.textContent;
    game.score++;
  }
}

/**
 * When next button is clicked
 * This will go to the next round of questions
 * If there are unsanswered questions, a modal will pop up
 * This will confirm whether the user wants to skip or not
 * The round number will increase by 1
 * styling is reset
 * If the user has reached the end of all questions, they will be directed to the results page
 */
function next() {

  if (document.querySelectorAll('.droppable.dropped').length !== 3) {
    $('#confirm').modal('show');
    return;
  }

  game.questionNumber++;
  document.getElementById('current-game').innerText = game.questionNumber;
  point1.classList.remove("dropped");
  point2.classList.remove("dropped");
  point3.classList.remove("dropped");

  if (game.questionNumber <= game.totalNumberOfRounds) {
    randomValueGenerator();
    obj1.classList.remove("dragged", "dropped");
    obj2.classList.remove("dragged", "dropped");
    obj3.classList.remove("dragged", "dropped");

    obj1.setAttribute("draggable", true);
    obj2.setAttribute("draggable", true);
    obj3.setAttribute("draggable", true);

  } else {
    document.getElementById('game-container').classList.add("nodisplay");
    document.getElementById('start').classList.add("nodisplay");
    document.getElementById('game').classList.add("nodisplay");
    document.getElementById('results').classList.remove("nodisplay");
    document.getElementById('score').innerHTML = game.score;
  }

}

/**
 * When skip question is clicked in modal
 * They will go to the next round of questions
 * The round number will increase by 1
 * Styling is reset
 * If the user has reached the end of all questions, they will be directed to the results page
 */
function skipQuestion() {
  game.questionNumber++;
  document.getElementById('current-game').innerText = game.questionNumber;
  point1.classList.remove("dropped");
  point2.classList.remove("dropped");
  point3.classList.remove("dropped");

  if (game.questionNumber <= game.totalNumberOfRounds) {
    randomValueGenerator();
    obj1.classList.remove("dragged", "dropped");
    obj2.classList.remove("dragged", "dropped");
    obj3.classList.remove("dragged", "dropped");

    obj1.setAttribute("draggable", true);
    obj2.setAttribute("draggable", true);
    obj3.setAttribute("draggable", true);

  } else {
    document.getElementById('game-container').classList.add("nodisplay");
    document.getElementById('start').classList.add("nodisplay");
    document.getElementById('game').classList.add("nodisplay");
    document.getElementById('results').classList.remove("nodisplay");
    document.getElementById('score').innerHTML = game.score;
  }

}
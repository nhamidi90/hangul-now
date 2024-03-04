const data = [{
    eng: 'a',
    kor: 'ㅏ'
  },
  {
    eng: 'ya',
    kor: 'ㅑ'
  },
  {
    eng: 'eo',
    kor: 'ㅓ'
  },
  {
    eng: 'yeo',
    kor: 'ㅕ'
  },
  {
    id: 5,
    eng: 'o',
    kor: 'ㅗ'
  },
  {
    eng: 'yo',
    kor: 'ㅛ'
  },
  {
    eng: 'u',
    kor: 'ㅜ'
  },
  {
    eng: 'yoo',
    kor: 'ㅠ'
  },
  {
    eng: 'eu',
    kor: 'ㅡ'
  },
  {

    eng: 'i',
    kor: 'ㅣ'
  },
  {
    eng: 'gk',
    kor: 'ㄱ'
  },
  {
    eng: 'n',
    kor: 'ㄴ'
  },
  {
    eng: 'dt',
    kor: 'ㄷ'
  },
  {
    eng: 'r/l',
    kor: 'ㄹ'
  },
  {
    eng: 'm',
    kor: 'ㅁ'
  },
  {
    eng: 'bp',
    kor: 'ㅂ'
  },
  {
    eng: 's',
    kor: 'ㅅ'
  },
  {
    eng: '-/ng',
    kor: 'ㅇ'
  },
  {
    eng: 'j',
    kor: 'ㅈ'
  },
  {
    eng: 'ch',
    kor: 'ㅊ'
  },
  {
    eng: 'k',
    kor: 'ㅋ'
  },
  {
    eng: 't',
    kor: 'ㅌ'
  },
  {
    eng: 'p',
    kor: 'ㅍ'
  },
  {
    id: 24,
    eng: 'h',
    kor: 'ㅎ'
  },
  {
    eng: 'kk',
    kor: 'ㄲ',
  },
  {
    eng: 'tt',
    kor: 'ㄸ',
  },
  {
    eng: 'pp',
    kor: 'ㅃ',
  },
  {
    eng: 'ss',
    kor: 'ㅆ',
  },
  {
    eng: 'jj',
    kor: 'ㅉ',
  },
  {
    eng: 'ae',
    kor: 'ㅐ',
  },
  {
    eng: 'yae',
    kor: 'ㅒ',
  },
  {
    eng: 'e',
    kor: 'ㅔ',
  },
  {
    eng: 'ye',
    kor: 'ㅖ',
  },
  {
    eng: 'wa',
    kor: 'ㅘ',
  },
  {
    eng: 'oe',
    kor: 'ㅚ',
  },
  {
    eng: 'wae',
    kor: 'ㅙ',
  },
  {
    eng: 'wo',
    kor: 'ㅝ',
  },
  {
    eng: 'we',
    kor: 'ㅞ',
  },
  {
    eng: 'wi',
    kor: 'ㅟ',
  },
  {
    eng: 'ui',
    kor: 'ㅢ',
  },
];

// Game
let game = {
  questionNumber: 1,
  score: 0,
  totalNumberOfRounds: 10,
};

//generate random letters and append to boxes

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
  randomIndex1 = Math.floor(Math.random() * data.length);
  randomIndex2 = Math.floor(Math.random() * data.length);
  randomIndex3 = Math.floor(Math.random() * data.length);

  let korean1 = data[randomIndex1].kor;
  obj1.innerHTML = korean1;
  obj1.setAttribute("value", korean1);

  let korean2 = data[randomIndex2].kor;
  obj2.innerHTML = korean2;
  obj2.setAttribute("value", korean2);

  let korean3 = data[randomIndex3].kor;
  obj3.innerHTML = korean3;
  obj3.setAttribute("value", korean3);

  //shuffle english letters
  let unshuffled = [
    data[randomIndex1].eng,
    data[randomIndex2].eng,
    data[randomIndex3].eng
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

  //append shuffled letters to boxes
  point1.innerHTML = shuffled[0];
  point2.innerHTML = shuffled[1];
  point3.innerHTML = shuffled[2];
};

randomValueGenerator();

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

  let matchedData = data.find(obj => {
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

// Next button

/**
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
 * If user skips question they will go to the next round of questions
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
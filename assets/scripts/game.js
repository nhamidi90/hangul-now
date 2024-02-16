const data = [
    {id: 1, eng: 'a', kor: 'ㅏ'},
    {id: 2, eng: 'ya', kor: 'ㅑ'},
    {id: 3, eng: 'eo', kor: 'ㅓ'},
    {id: 4, eng: 'yeo', kor: 'ㅕ'},
    {id: 5, eng: 'o', kor: 'ㅗ'},
    {id: 6, eng: 'yo', kor: 'ㅛ'},
    {id: 7, eng: 'u', kor: 'ㅜ'},
    {id: 8, eng: 'yoo', kor: 'ㅠ'},
    {id: 9, eng: 'eu', kor: 'ㅡ'},
    {id: 10, eng: 'i', kor: 'ㅣ'},
    {id: 11, eng: 'gk', kor: 'ㄱ'},
    {id: 12, eng: 'n', kor: 'ㄴ'},
    {id: 13, eng: 'dt', kor: 'ㄷ'},
    {id: 14, eng: 'r/l', kor: 'ㄹ'},
    {id: 15, eng: 'm', kor: 'ㅁ'},
    {id: 16, eng: 'bp', kor: 'ㅂ'},
    {id: 17, eng: 's', kor: 'ㅅ'},
    {id: 18, eng: '-/ng', kor: 'ㅇ'},
    {id: 19, eng: 'j', kor: 'ㅈ'},
    {id: 20, eng: 'ch', kor: 'ㅊ'},
    {id: 21, eng: 'k', kor: 'ㅋ'},
    {id: 22, eng: 't', kor: 'ㅌ'},
    {id: 23, eng: 'p', kor: 'ㅍ'},
    {id: 24, eng: 'h', kor: 'ㅎ'},
];

// window.onload = function() {

//   var box = document.getElementById('obj1');
//   var box2 = document.getElementById('obj1');
//   var box3 = document.getElementById('obj1');
  
//   box.addEventListener('touchmove', function(e) {

//     var touchLocation = e.targetTouches[0];
    
//     box.style.left = touchLocation.pageX + 'px';
//     box.style.top = touchLocation.pageY + 'px';
//   })

//   box.addEventListener('touchend', function(e) {

//     var x = parseInt(box.style.left);
//     var y = parseInt(box.style.top);
//   })

//   box2.addEventListener('touchmove', function(e) {

//     var touchLocation = e.targetTouches[0];
    
//     box2.style.left = touchLocation.pageX + 'px';
//     box2.style.top = touchLocation.pageY + 'px';
//   })

//   box2.addEventListener('touchend', function(e) {

//     var x = parseInt(box2.style.left);
//     var y = parseInt(box2.style.top);
//   })

//   box3.addEventListener('touchmove', function(e) {

//     var touchLocation = e.targetTouches[0];
    
//     box3.style.left = touchLocation.pageX + 'px';
//     box3.style.top = touchLocation.pageY + 'px';
//   })

//   box3.addEventListener('touchend', function(e) {

//     var x = parseInt(box3.style.left);
//     var y = parseInt(box3.style.top);
//   })
// }

  
// Game
let game = {
questionNumber: 1,
score: 0,
totalNumberOfRounds: 10,
}

//generate random letters and append to boxes

let randomIndex1;
let randomIndex2;
let randomIndex3;

let obj1 = document.getElementById('obj1');
let obj2 = document.getElementById('obj2');
let obj3 = document.getElementById('obj3');

let point1 = document.getElementById('point1')
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');

const randomValueGenerator = () => {
  randomIndex1 = Math.floor(Math.random() * data.length);
  randomIndex2 = Math.floor(Math.random() * data.length);
  randomIndex3 = Math.floor(Math.random() * data.length);

  obj1.innerHTML = data[randomIndex1].kor;
  obj2.innerHTML = data[randomIndex2].kor;
  obj3.innerHTML = data[randomIndex3].kor;

  //shuffle english letters
  let unshuffled = [
  data[randomIndex1].eng,
  data[randomIndex2].eng,
  data[randomIndex3].eng
  ];

  let shuffled = unshuffled
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

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
};

function dragEnter(event) {
  event.target.classList.add("drop-hover");
};

function dragLeave(event) {
  event.target.classList.remove("drop-hover");
};

function dragOver(event) {
  event.preventDefault();
};

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("drop-hover");
  const dragData = event.dataTransfer.getData("text");
  const source = document.getElementById(dragData)

  let letterToFind = data[randomIndex1].eng;
  let objectWithEng = data.find(obj => obj.eng === letterToFind);
  let korLetterToFind = data[randomIndex1].kor;
  let objectWithKor = data.find(obj => obj.kor === korLetterToFind);

  let letterToFind2 = data[randomIndex2].eng;
  let objectWithEng2 = data.find(obj => obj.eng === letterToFind2);
  let korLetterToFind2 = data[randomIndex2].kor;
  let objectWithKor2 = data.find(obj => obj.kor === korLetterToFind2);

  let letterToFind3 = data[randomIndex3].eng;
  let objectWithEng3 = data.find(obj => obj.eng === letterToFind3);
  let korLetterToFind3 = data[randomIndex3].kor;
  let objectWithKor3 = data.find(obj => obj.kor === korLetterToFind3);

  if (objectWithEng.id === objectWithKor.id || objectWithEng2.id === objectWithKor2.id || objectWithEng3 === objectWithKor3.id) {
    event.target.classList.add("dropped");
    event.target.style.border = 'solid 4px';
    event.target.style.fontSize = '60px';
    let draggableElement = document.getElementById(dragData);
    draggableElement.classList.add("dragged", "dropped");
    draggableElement.setAttribute("draggable", "false")
    event.target.innerHTML= source.textContent;
    game.score++;
  }
};

// Next button

function next() {
  game.questionNumber++;
  currentGame = document.getElementById('current-game').innerText = game.questionNumber;
  point1.classList.remove("dropped");
  point2.classList.remove("dropped");
  point3.classList.remove("dropped");
  // point1.style.removeAttribute('font-size');
  // point1.style.removeAttribute('border');
  
  // if (!(point1 || point2 || point3).includes(data[randomIndex1].kor || data[randomIndex3].kor || data[randomIndex1].kor)) {
    // $('#confirm').modal('show');
  //   console.log("You will not get any points for unanswered questions. Do you want to skip?");
  // };

  if (game.questionNumber <= game.totalNumberOfRounds) {
    randomValueGenerator();
    obj1.classList.remove("dragged", "dropped");
    obj2.classList.remove("dragged", "dropped");
    obj3.classList.remove("dragged", "dropped");
  
    obj1.setAttribute("draggable", true);
    obj2.setAttribute("draggable", true);
    obj3.setAttribute("draggable", true);
  
  } 
  else {
    gameContainer = document.getElementById('game-container').classList.add("nodisplay");
    document.getElementById('start').classList.add("nodisplay");
    document.getElementById('game').classList.add("nodisplay");
    document.getElementById('results').classList.remove("nodisplay");
    document.getElementById('score').innerHTML = game.score;
  };

};
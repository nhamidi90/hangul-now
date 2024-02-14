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

//generate random letters and append to boxes

let randomIndex1;
let randomIndex2;
let randomIndex3;

const randomValueGenerator = () => {
  randomIndex1 = Math.floor(Math.random() * data.length);
  randomIndex2 = Math.floor(Math.random() * data.length);
  randomIndex3 = Math.floor(Math.random() * data.length);

  document.getElementById('obj1').innerHTML = data[randomIndex1].kor;
  document.getElementById('obj2').innerHTML = data[randomIndex2].kor;
  document.getElementById('obj3').innerHTML = data[randomIndex3].kor;

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
  document.getElementById('point1').innerHTML = shuffled[0];
  document.getElementById('point2').innerHTML = shuffled[1];
  document.getElementById('point3').innerHTML = shuffled[2];
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

  let letterToFind = data[randomIndex1].eng;
  let objectWithEng = data.find(obj => obj.eng === letterToFind);
  let korLetterToFind = data[randomIndex1].kor;
  let objectWithKor = data.find(obj => obj.kor === korLetterToFind);
  if (objectWithEng.id === objectWithKor.id) {
    event.target.classList.add("dropped");
    const draggableElement = document.getElementById(dragData);
    draggableElement.classList.add("dragged", "dropped");
    draggableElement.setAttribute("draggable", "false")
    event.target.innerHTML= `${dragData}`;
  } else {
    console.log('English letter not found.');
  } 
};

// if (objectWithEng) {
//   console.log(objectWithEng.id);
// } else {
//   console.log('English letter not found.');
// }if (objectWithKor) {
//   console.log(objectWithKor.id);
// } else {
//   console.log('Korean letter not found.');
// }

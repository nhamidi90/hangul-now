let vowels = [
    {eng: 'a', kor: 'ㅏ', audio: 'assets/audio/a.mp3'},
    {eng: 'ya', kor: 'ㅑ', audio: 'assets/audio/ya.mp3'},
    {eng: 'eo', kor: 'ㅓ', audio: 'assets/audio/eo.mp3'},
    {eng: 'yeo', kor: 'ㅕ', audio: 'assets/audio/yeo.mp3'},
    {eng: 'o', kor: 'ㅗ', audio: 'assets/audio/o.mp3'},
    {eng: 'yo', kor: 'ㅛ', audio: 'assets/audio/yo.mp3'},
    {eng: 'u', kor: 'ㅜ', audio: 'assets/audio/u.mp3'},
    {eng: 'yoo', kor: 'ㅠ', audio: 'assets/audio/yu.mp3'},
    {eng: 'eu', kor: 'ㅡ', audio: 'assets/audio/eu.mp3'},
    {eng: 'i', kor: 'ㅣ', audio: 'assets/audio/i.mp3'},
];

let compoundVowels = [
    {eng: 'ae', kor: 'ㅐ', audio: 'assets/audio/ae.mp3'},
    {eng: 'yae', kor: 'ㅒ', audio: 'assets/audio/yae.mp3'},
    {eng: 'e', kor: 'ㅔ', audio: 'assets/audio/e.mp3'},
    {eng: 'ye', kor: 'ㅖ', audio: 'assets/audio/ye.mp3'},
    {eng: 'wa', kor: 'ㅘ', audio: 'assets/audio/wa.mp3'},
    {eng: 'oe', kor: 'ㅚ', audio: 'assets/audio/oe.mp3'},
    {eng: 'wae', kor: 'ㅙ', audio: 'assets/audio/wae.mp3'},
    {eng: 'wo', kor: 'ㅝ', audio: 'assets/audio/wo.mp3'},
    {eng: 'we', kor: 'ㅞ', audio: 'assets/audio/we.mp3'},
    {eng: 'wi', kor: 'ㅟ', audio: 'assets/audio/wi.mp3'},
    {eng: 'ui', kor: 'ㅢ', audio: 'assets/audio/ui.mp3'},
];

let consonants = [
    {eng: 'gk', kor: 'ㄱ', audio: 'assets/audio/gk.mp3'},
    {eng: 'n', kor: 'ㄴ', audio: 'assets/audio/n.mp3'},
    {eng: 'dt', kor: 'ㄷ', audio: 'assets/audio/dt.mp3'},
    {eng: 'r/l', kor: 'ㄹ', audio: 'assets/audio/r.mp3'},
    {eng: 'm', kor: 'ㅁ', audio: 'assets/audio/m.mp3'},
    {eng: 'bp', kor: 'ㅂ', audio: 'assets/audio/b.mp3'},
    {eng: 's', kor: 'ㅅ', audio: 'assets/audio/s.mp3'},
    {eng: '-/ng', kor: 'ㅇ', audio: 'assets/audio/ng.mp3'},
    {eng: 'j', kor: 'ㅈ', audio: 'assets/audio/j.mp3',},
    {eng: 'ch', kor: 'ㅊ', audio: 'assets/audio/ch.mp3'},
    {eng: 'k', kor: 'ㅋ', audio: 'assets/audio/k.mp3'},
    {eng: 't', kor: 'ㅌ', audio: 'assets/audio/t.mp3'},
    {eng: 'p', kor: 'ㅍ', audio: 'assets/audio/p.mp3'},
    {eng: 'h', kor: 'ㅎ', audio: 'assets/audio/h.mp3'},
];

let doubleConsonants = [
    {eng: 'kk', kor: 'ㄲ', audio: 'assets/audio/kk.mp3'},
    {eng: 'tt', kor: 'ㄸ', audio: 'assets/audio/tt.mp3'},
    {eng: 'pp', kor: 'ㅃ', audio: 'assets/audio/pp.mp3'},
    {eng: 'ss', kor: 'ㅆ', audio: 'assets/audio/ss.mp3'},
    {eng: 'jj', kor: 'ㅉ', audio: 'assets/audio/jj.mp3'},
];

//Add consonants to page


let korCons = consonants.map(consonant => consonant.kor);
let allCons = korCons.length;

let consContainer = document.getElementById("consonants-container");
let conOuterBox = document.getElementsByClassName("outer-box")
let conCardContainer = document.getElementsByClassName("card");

for (let i = 0; i < allCons; i++) {
    let conOuterBox = document.createElement('div');
    conOuterBox.classList.add("outer-box")
    consContainer.appendChild(conOuterBox);
    let card = document.createElement('div');
        card.classList.add("card")
        conOuterBox.appendChild(card);
        let cardfront = document.createElement('div');
        cardfront.innerHTML = korCons[i];
        cardfront.classList.add("card-front")
        conCardContainer[i].appendChild(cardfront);
};

let engCons = consonants.map(consonant => consonant.eng);
let allEngCons = engCons.length;

for (let i = 0; i < allEngCons; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engCons[i];
        cardBack.classList.add("card-back");
        conCardContainer[i].appendChild(cardBack);
};

// Consonants audio

let consonantsAudio = consonants.map(consonant => consonant.audio);
let conAudio = consonantsAudio.length;

for (let i = 0; i < conAudio; i++) {
    let play = new Image();
    play.src = 'assets/images/audio.png';
    play.classList.add("audio");
    conOuterBox[i].appendChild(play);

function playConsonant() {
    let audio = new Audio (consonantsAudio[i]);
    audio.play()
}
play.addEventListener('click', playConsonant);
};

// Double consonants header

let consHeader = document.createElement('h2');
consHeader.innerHTML = "Double Consonants"
consContainer.appendChild(consHeader);

// Add double consonants to page

let doubCons = doubleConsonants.map(doubleCon => doubleCon.kor);
let allDoubCons = doubCons.length;

let dcContainer = document.getElementById("dc-container");
let conOuterBox2 = document.getElementsByClassName("outer-box2")
let dcCardCont = document.getElementsByClassName("card2");

for (let i = 0; i < allDoubCons; i++) {
    let conOuterBox2 = document.createElement('div');
        conOuterBox2.classList.add("outer-box2")
        dcContainer.appendChild(conOuterBox2);
    let card2 = document.createElement('div');
        card2.classList.add("card2");
        conOuterBox2.appendChild(card2);
    let cardFront = document.createElement('div');
        cardFront.innerHTML = doubCons[i];
        cardFront.classList.add("card-front");
        dcCardCont[i].appendChild(cardFront);
};

let engDoubCons = doubleConsonants.map(engDoubCon => engDoubCon.eng);
let allEngDoubCons = engDoubCons.length;

for (let i = 0; i < allEngDoubCons; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engDoubCons[i];
        cardBack.classList.add("card-back");
        dcCardCont[i].appendChild(cardBack);
};

// Double consonants audio

let doubConAudio = doubleConsonants.map(doubCon => doubCon.audio);
let dcAudio = doubConAudio.length;

for (let i = 0; i < dcAudio; i++) {
    let play = new Image();
    play.src = 'assets/images/audio.png';
    play.classList.add("audio");
    conOuterBox2[i].appendChild(play);

function playdoubCon() {
    let audio = new Audio (doubConAudio[i]);
    audio.play()
}
play.addEventListener('click', playdoubCon);
};

// Add vowels to page

let korVowels = vowels.map(vowel => vowel.kor);
let allVowels = korVowels.length;

let vowelsContainer = document.getElementById("vowels-container");
let cardContainer = document.getElementsByClassName("card");
let outerBox = document.getElementsByClassName("outer-box")

for (let i = 0; i < allVowels; i++) {
    let outerBox = document.createElement('div');
        outerBox.classList.add("outer-box")
        vowelsContainer.appendChild(outerBox);
    let card = document.createElement('div');
        card.classList.add("card")
        outerBox.appendChild(card);
    let cardfront = document.createElement('div');
        cardfront.innerHTML = korVowels[i];
        cardfront.classList.add("card-front")
        cardContainer[i].appendChild(cardfront);
};

let engVowels = vowels.map(vowel => vowel.eng);
let allEngVowels = engVowels.length;

for (let i = 0; i < allEngVowels; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engVowels[i];
        cardBack.classList.add("card-back");
        cardContainer[i].appendChild(cardBack);
};

// Vowels header

let vowelsHeader = document.createElement('h2');
vowelsHeader.innerHTML = "Compound Vowels"
vowelsContainer.appendChild(vowelsHeader);

// vowels audio

let vowelsAudio = vowels.map(vowel => vowel.audio);
let vowelAudio = vowelsAudio.length;

for (let i = 0; i < vowelAudio; i++) {
    let play = new Image();
    play.src = 'assets/images/audio.png';
    play.classList.add("audio");
    outerBox[i].appendChild(play);

function playVowel() {
    let audio = new Audio (vowelsAudio[i]);
    audio.play()
}
play.addEventListener('click', playVowel);
};

//Add compound vowels to page

let korCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.kor);
let allCompoundVowels = korCompoundVowels.length;

let cvContainer = document.getElementById("cv-container");
let outerBox2 = document.getElementsByClassName("outer-box2")
let compoundCard = document.getElementsByClassName("card2");

for (let i = 0; i < allCompoundVowels; i++) {
    let outerBox2 = document.createElement('div');
        outerBox2.classList.add("outer-box2")
        cvContainer.appendChild(outerBox2);
    let card2 = document.createElement('div');
        card2.classList.add("card2")
        outerBox2.appendChild(card2);
    let cardFront = document.createElement('div');
        cardFront.innerHTML = korCompoundVowels[i];
        cardFront.classList.add("card-front")
        compoundCard[i].appendChild(cardFront);
};

let engCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.eng);
let allEngCompVowels = engCompoundVowels.length;

for (let i = 0; i < allEngCompVowels; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engCompoundVowels[i];
        cardBack.classList.add("card-back");
        compoundCard[i].appendChild(cardBack);
};


// Compound vowels audio

let CVAudio = compoundVowels.map(compoundVowel => compoundVowel.audio);
let CVowelsAudio = CVAudio.length;

for (let i = 0; i < CVowelsAudio; i++) {
    let play = new Image();
    play.src = 'assets/images/audio.png';
    play.classList.add("audio");
    outerBox2[i].appendChild(play);

function playCV() {
    let audio = new Audio (CVAudio[i]);
    audio.play()
}
play.addEventListener('click', playCV);
};

//button function

let conButton = document.getElementById('consonants-button');
conButton.addEventListener('click', conClick) ; 

 function conClick() {
    vowelsContainer.classList.add("nodisplay");
    cvContainer.classList.add("nodisplay");
    consContainer.classList.remove("nodisplay");
    dcContainer.classList.remove("nodisplay");
};

let vowelButton = document.getElementById('vowels-button');
vowelButton.addEventListener('click', vowelClick) ; 

 function vowelClick() {
    vowelsContainer.classList.remove("nodisplay");
    cvContainer.classList.remove("nodisplay");
    consContainer.classList.add("nodisplay");
    dcContainer.classList.add("nodisplay");
};


//flipcard function

   let card = document.getElementsByClassName('card');
      for (let i = 0 ; i < card.length; i++)  {
      card[i].addEventListener('click' , flip) ; 
   };

   let card2 = document.getElementsByClassName('card2');
   for (let i = 0 ; i < card2.length; i++)  {
   card2[i].addEventListener('click' , flip) ; 
};

function flip(event) {
     this.classList.toggle("flipcard");
   };

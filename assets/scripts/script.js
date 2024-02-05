let vowels = [
    {eng: 'a', kor: 'ㅏ', audio: 'assets/audio/a.mp3'},
    {eng: 'ya', kor: 'ㅑ', audio: 'assets/audio/ya.mp3'},
    {eng: 'eo', kor: 'ㅓ', audio: 'assets/audio/eo.mp3'},
    {eng: 'yeo', kor: 'ㅕ', audio: 'assets/audio/yeo.mp3'},
    {eng: 'o', kor: 'ㅗ', audio: 'assets/audio/o.mp3'},
    {eng: 'yo', kor: 'ㅛ', audio: 'assets/audio/yo.mp3'},
    {eng: 'u', kor: 'ㅜ', audio: 'assets/audio/yu.mp3'},
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
    {eng: 'r/l', kor: 'ㄹ', audio: 'assets/audio/r.mp3', notes: "At the beginning of a word it makes an 'r' sound but at the end of a word it makes an 'l' sound"},
    {eng: 'm', kor: 'ㅁ', audio: 'assets/audio/m.mp3'},
    {eng: 'bp', kor: 'ㅂ', audio: 'assets/audio/b.mp3'},
    {eng: 's', kor: 'ㅅ', audio: 'assets/audio/s.mp3'},
    {eng: '-/ng', kor: 'ㅇ', audio: 'assets/audio/ng.mp3', notes: "At the beginning of a syllable this letter is silent but at the end of a syllable it makes an 'ng' sound"},
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

//consonants


let korCons = consonants.map(consonant => consonant.kor);
let allCons = korCons.length;

let consContainer = document.getElementById("consonants-container");

for (let i = 0; i < allCons; i++) {
    let card = document.createElement('div');
        card.innerHTML = korCons[i];
        card.classList.add("card")
        consContainer.appendChild(card);
};

let engCons = consonants.map(consonant => consonant.eng);
let allEngCons = engCons.length;

let consBackContainer = document.getElementById("consonants-back-container");
for (let i = 0; i < allEngCons; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engCons[i];
        cardBack.classList.add("card-back");
        consBackContainer.appendChild(cardBack);
};

let consHeader = document.createElement('h2');
consHeader.innerHTML = "Double Consonants"
consContainer.appendChild(consHeader);

//double consonants

let doubCons = doubleConsonants.map(doubleCon => doubleCon.kor);
let allDoubCons = doubCons.length;

let dcContainer = document.getElementById("dc-container");

for (let i = 0; i < allDoubCons; i++) {
    let card = document.createElement('div');
        card.innerHTML = doubCons[i];
        card.classList.add("card")
        dcContainer.appendChild(card);
};

let engDoubCons = doubleConsonants.map(engDoubCon => engDoubCon.eng);
let allEngDoubCons = engDoubCons.length;

let dcBackContainer = document.getElementById("dc-back-container");
for (let i = 0; i < allEngDoubCons; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engDoubCons[i];
        cardBack.classList.add("card-back");
        dcBackContainer.appendChild(cardBack);
};
// Vowels

let korVowels = vowels.map(vowel => vowel.kor);
let allVowels = korVowels.length;

let vowelsContainer = document.getElementById("vowels-container");

for (let i = 0; i < allVowels; i++) {
    let card = document.createElement('div');
        card.innerHTML = korVowels[i];
        card.classList.add("card")
        vowelsContainer.appendChild(card);

};

let engVowels = vowels.map(vowel => vowel.eng);
let allEngVowels = engVowels.length;

let vowelsBackContainer = document.getElementById("vowels-back-container");
for (let i = 0; i < allEngVowels; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engVowels[i];
        cardBack.classList.add("card-back");
        vowelsBackContainer.appendChild(cardBack);
};

// function flip(event) {
//      this.classList.toggle("hidden");
//    };

//    function unflip(event) {
//      this.classList.toggle("hidden");
// };

   
//    let card = document.getElementsByClassName('card');
//       for (let i = 0 ; i < card.length; i++)  {
//       card[i].addEventListener('click' , flip) ; 
//    };
   
//    let cardBack = document.getElementsByClassName('card-back');
//       for (let i = 0 ; i < card.length; i++)  {
//       cardBack[i].addEventListener('click' , unflip) ; 
//    };

let vowelsHeader = document.createElement('h2');
vowelsHeader.innerHTML = "Compound Vowels"
vowelsContainer.appendChild(vowelsHeader);

//compound vowels
let korCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.kor);
let allCompoundVowels = korCompoundVowels.length;

let engCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.eng);
let allEngCompVowels = engCompoundVowels.length;

let cvContainer = document.getElementById("cv-container");
for (let i = 0; i < allCompoundVowels; i++) {
    let card = document.createElement('div');
        card.innerHTML = korCompoundVowels[i];
        card.classList.add("card")
        cvContainer.appendChild(card);
};
let cvBackContainer = document.getElementById("cv-back-container");
for (let i = 0; i < allEngCompVowels; i++) {
    let cardBack = document.createElement('div');
        cardBack.innerHTML = engCompoundVowels[i];
        cardBack.classList.add("card-back");
        cvBackContainer.appendChild(cardBack);
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
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


let consonantsContainer = document.getElementById("consonants-container");

let korVowels = vowels.map(vowel => vowel.kor);
let allVowels = korVowels.length;

let vowelsContainer = document.getElementById("vowels-container");
for (let i = 0; i < allVowels; i++) {
    let newCard = document.createElement('div');
        newCard.innerHTML = korVowels[i];
        newCard.classList.add("card")
        vowelsContainer.appendChild(newCard);
};

let vowelsHeader = document.createElement('h2');
vowelsHeader.innerHTML = "Compound Vowels"
vowelsContainer.appendChild(vowelsHeader);

let korCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.kor);
let allCompoundVowels = korCompoundVowels.length;
for (let i = 0; i < allCompoundVowels; i++) {
    let newCard = document.createElement('div');
        newCard.innerHTML = korCompoundVowels[i];
        newCard.classList.add("card")
        vowelsContainer.appendChild(newCard);
};
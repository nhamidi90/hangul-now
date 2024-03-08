/**
 * Wait for DOM to load
 */

document.addEventListener('DOMContentLoaded', function () {

    let lettersData = fetchData();
    if (!lettersData) {
        console.log("Oh No");
    }
});


/**
 * Fetch json data
 */

async function fetchData() {
    try {
        const response = await fetch('assets/scripts/json/flashcard-data.json');
        console.log(response);
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}');
        }
        const data = await response.json();
        if (data.letters) {
            lettersData = data.letters;
            generateCards(lettersData);
        } else {
            throw new Error('Invalid data format');
        }

    } catch (error) {
        console.log(error);
    }
}

//Add consonants to page

function generateCards() {
    let consonants = lettersData.filter(letter => letter.type === "consonants");
    let korCons = consonants.map(consonant => consonant.kor);
    let allCons = korCons.length;

    let consContainer = document.getElementById("consonants-container");
    let conOuterBox = document.getElementsByClassName("outer-box");
    let conCardContainer = document.getElementsByClassName("card");

    for (let i = 0; i < allCons; i++) {
        let conOuterBox = document.createElement('div');
        conOuterBox.classList.add("outer-box");
        consContainer.appendChild(conOuterBox);
        let card = document.createElement('div');
        card.classList.add("card");
        conOuterBox.appendChild(card);
        let cardfront = document.createElement('div');
        cardfront.innerHTML = korCons[i];
        cardfront.classList.add("card-front");
        conCardContainer[i].appendChild(cardfront);
    }

    let engCons = consonants.map(consonant => consonant.eng);
    let allEngCons = engCons.length;

    for (let i = 0; i < allEngCons; i++) {
        let cardBack = document.createElement('div');
        cardBack.innerHTML = engCons[i];
        cardBack.classList.add("card-back");
        conCardContainer[i].appendChild(cardBack);
    }

    /**
     * Consonants audio
     * This creates a button for all consonants and appends it under each card
     * When you click it, it will play audio
     */

    let consonantsAudio = consonants.map(consonant => consonant.audio);
    let conAudio = consonantsAudio.length;

    function playConsonant(audioToPlay) {
        const audio = new Audio(audioToPlay);
        audio.play();
    }

    for (let i = 0; i < conAudio; i++) {
        const play = new Image();
        play.src = 'assets/images/audio.svg';
        play.classList.add("audio");
        conOuterBox[i].appendChild(play);
        play.addEventListener('click', function () {
            playConsonant(consonantsAudio[i]);
        });
    }

    // Double consonants header

    let consHeader = document.createElement('h2');
    consHeader.innerHTML = "Double Consonants";
    consContainer.appendChild(consHeader);

    // Add double consonants to page

    let doubleConsonants = lettersData.filter(letter => letter.type === "doubleConsonants");
    let doubCons = doubleConsonants.map(doubleCon => doubleCon.kor);
    let allDoubCons = doubCons.length;

    let dcContainer = document.getElementById("dc-container");
    let conOuterBox2 = document.getElementsByClassName("outer-box2");
    let dcCardCont = document.getElementsByClassName("card2");

    for (let i = 0; i < allDoubCons; i++) {
        let conOuterBox2 = document.createElement('div');
        conOuterBox2.classList.add("outer-box2");
        dcContainer.appendChild(conOuterBox2);
        let card2 = document.createElement('div');
        card2.classList.add("card2");
        conOuterBox2.appendChild(card2);
        let cardFront = document.createElement('div');
        cardFront.innerHTML = doubCons[i];
        cardFront.classList.add("card-front");
        dcCardCont[i].appendChild(cardFront);
    }

    let engDoubCons = doubleConsonants.map(engDoubCon => engDoubCon.eng);
    let allEngDoubCons = engDoubCons.length;

    for (let i = 0; i < allEngDoubCons; i++) {
        let cardBack = document.createElement('div');
        cardBack.innerHTML = engDoubCons[i];
        cardBack.classList.add("card-back");
        dcCardCont[i].appendChild(cardBack);
    }

    /**
     * Double consonants audio
     * This creates a button for all double consonants and appends it under each card
     * When you click it, it will play audio
     */

    let doubConAudio = doubleConsonants.map(doubCon => doubCon.audio);
    let dcAudio = doubConAudio.length;

    function playDoubCon(audioToPlay) {
        const audio = new Audio(audioToPlay);
        audio.play();
    }

    for (let i = 0; i < dcAudio; i++) {
        const play = new Image();
        play.src = 'assets/images/audio.svg';
        play.classList.add("audio");
        conOuterBox2[i].appendChild(play);
        play.addEventListener('click', function () {
            playDoubCon(doubConAudio[i]);
        });
    }

    // Add vowels to page

    let vowels = lettersData.filter(letter => letter.type === "vowels");
    let korVowels = vowels.map(vowel => vowel.kor);
    let allVowels = korVowels.length;

    let vowelsContainer = document.getElementById("vowels-container");
    let cardContainer = document.getElementsByClassName("card");
    let outerBox = document.getElementsByClassName("outer-box");

    for (let i = 0; i < allVowels; i++) {
        let outerBox = document.createElement('div');
        outerBox.classList.add("outer-box");
        vowelsContainer.appendChild(outerBox);
        let card = document.createElement('div');
        card.classList.add("card");
        outerBox.appendChild(card);
        let cardfront = document.createElement('div');
        cardfront.innerHTML = korVowels[i];
        cardfront.classList.add("card-front");
        cardContainer[i].appendChild(cardfront);
    }

    let engVowels = vowels.map(vowel => vowel.eng);
    let allEngVowels = engVowels.length;

    for (let i = 0; i < allEngVowels; i++) {
        let cardBack = document.createElement('div');
        cardBack.innerHTML = engVowels[i];
        cardBack.classList.add("card-back");
        cardContainer[i].appendChild(cardBack);
    }

    // Vowels header

    let vowelsHeader = document.createElement('h2');
    vowelsHeader.innerHTML = "Compound Vowels";
    vowelsContainer.appendChild(vowelsHeader);

    /**
     * Vowels audio
     * This creates a button for all vowels and appends it under each card
     * When you click it, it will play audio
     */

    let vowelsAudio = vowels.map(vowel => vowel.audio);
    let vowelAudio = vowelsAudio.length;

    function playVowels(audioToPlay) {
        const audio = new Audio(audioToPlay);
        audio.play();
    }

    for (let i = 0; i < vowelAudio; i++) {
        const play = new Image();
        play.src = 'assets/images/audio.svg';
        play.classList.add("audio");
        outerBox[i].appendChild(play);
        play.addEventListener('click', function () {
            playVowels(vowelsAudio[i]);
        });
    }

    //Add compound vowels to page

    let compoundVowels = lettersData.filter(letter => letter.type === "compoundVowels");
    let korCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.kor);
    let allCompoundVowels = korCompoundVowels.length;

    let cvContainer = document.getElementById("cv-container");
    let outerBox2 = document.getElementsByClassName("outer-box2");
    let compoundCard = document.getElementsByClassName("card2");

    for (let i = 0; i < allCompoundVowels; i++) {
        let outerBox2 = document.createElement('div');
        outerBox2.classList.add("outer-box2");
        cvContainer.appendChild(outerBox2);
        let card2 = document.createElement('div');
        card2.classList.add("card2");
        outerBox2.appendChild(card2);
        let cardFront = document.createElement('div');
        cardFront.innerHTML = korCompoundVowels[i];
        cardFront.classList.add("card-front");
        compoundCard[i].appendChild(cardFront);
    }

    let engCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.eng);
    let allEngCompVowels = engCompoundVowels.length;

    for (let i = 0; i < allEngCompVowels; i++) {
        let cardBack = document.createElement('div');
        cardBack.innerHTML = engCompoundVowels[i];
        cardBack.classList.add("card-back");
        compoundCard[i].appendChild(cardBack);
    }

    /**
     * Compound vowels audio
     * This creates a button for all consonants and appends it under each card
     * When you click it, it will play audio
     */

    let CVAudio = compoundVowels.map(compoundVowel => compoundVowel.audio);
    let CVowelsAudio = CVAudio.length;

    function playCV(audioToPlay) {
        const audio = new Audio(audioToPlay);
        audio.play();
    }

    for (let i = 0; i < CVowelsAudio; i++) {
        const play = new Image();
        play.src = 'assets/images/audio.svg';
        play.classList.add("audio");
        outerBox2[i].appendChild(play);
        play.addEventListener('click', function () {
            playCV(CVAudio[i]);
        });
    }

    //button functions

    let conButton = document.getElementById('consonants-button');
    conButton.addEventListener('click', conClick);

    /**
     * This will hide the vowels container and show consonants container
     */

    function conClick() {
        vowelsContainer.classList.add("nodisplay");
        cvContainer.classList.add("nodisplay");
        consContainer.classList.remove("nodisplay");
        dcContainer.classList.remove("nodisplay");
    }

    let vowelButton = document.getElementById('vowels-button');
    vowelButton.addEventListener('click', vowelClick);

    /**
     * This will hide the consonants container and show vowels container
     */

    function vowelClick() {
        vowelsContainer.classList.remove("nodisplay");
        cvContainer.classList.remove("nodisplay");
        consContainer.classList.add("nodisplay");
        dcContainer.classList.add("nodisplay");
    }

    /**
     * flipcard function
     * This adds event listener to each flashcard
     * When clicked, it will toggle between english and korean
     */

    let card = document.getElementsByClassName('card');
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', flip);
    }

    let card2 = document.getElementsByClassName('card2');
    for (let i = 0; i < card2.length; i++) {
        card2[i].addEventListener('click', flip);
    }

    function flip() {
        this.classList.toggle("flipcard");

        setTimeout(() => {
            this.parentNode.addEventListener("click", flipBack, {once : true});
        }, 1000)
    }

    function flipBack() {
        this.firstElementChild.classList.toggle('flipcard')
    }
}
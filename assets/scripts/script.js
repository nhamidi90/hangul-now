/* jshint esversion: 8 */

/**
 * Wait for DOM to load
 */
document.addEventListener('DOMContentLoaded', function () {

    let lettersData = fetchData();
    if (!lettersData) {
        console.log("Sorry, the data is unavailable");
    }
});


/**
 * Fetch json data
 */
async function fetchData() {
    try {
        const response = await fetch('assets/scripts/json/flashcard-data.json');
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

/**
 * Consonants audio
 * When you click it, it will play audio for consonants
 */
function playConsonant(audioToPlay) {
    const audio = new Audio(audioToPlay);
    audio.play();
}

/**
 * Double consonants audio
 * When you click it, it will play audio for double consonants
 */
function playDoubCon(audioToPlay) {
    const audio = new Audio(audioToPlay);
    audio.play();
}

/**
 * Vowels audio
 * When you click it, it will play audio for vowels
 */
function playVowels(audioToPlay) {
    const audio = new Audio(audioToPlay);
    audio.play();
}

/**
 * Compound vowels audio
 * When you click it, it will play audio for compound vowels
 */
function playCV(audioToPlay) {
    const audio = new Audio(audioToPlay);
    audio.play();
}

/**
 * flip function
 * When clicked, it will flip to the english side
 * A timed event listener is added to the parent container
 */
function flip() {
    this.classList.toggle("flipcard");
     setTimeout(() => {
        this.parentNode.addEventListener("click", flipBack, {once : true});
    }, 1000);
}

/**
 * flip back function
 * When clicked, it will flip back to the korean side
 */
function flipBack() {
    this.firstElementChild.classList.toggle('flipcard');
}

/**
 * This will display the data onto the page
 */
function generateCards() {
    
    // Add consonants to page
    
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

    // Create consonants audio button and append to each consonant flashcard

    let consonantsAudio = consonants.map(consonant => consonant.audio);
    let conAudio = consonantsAudio.length;

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

    let conOuterBox2 = document.getElementsByClassName("outer-box2");
    let dcCardCont = document.getElementsByClassName("card2");

    for (let i = 0; i < allDoubCons; i++) {
        let conOuterBox2 = document.createElement('div');
        conOuterBox2.classList.add("outer-box2");
        consContainer.appendChild(conOuterBox2);
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

    // Create double consonants audio button and append to each double consonant flashcard

    let doubConAudio = doubleConsonants.map(doubCon => doubCon.audio);
    let dcAudio = doubConAudio.length;

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

    // Create vowels header

    let vowelsHeader = document.createElement('h2');
    vowelsHeader.innerHTML = "Compound Vowels";
    vowelsContainer.appendChild(vowelsHeader);

    // Create vowels audio button and append to each vowel flashcard

    let vowelsAudio = vowels.map(vowel => vowel.audio);
    let vowelAudio = vowelsAudio.length;

    for (let i = 0; i < vowelAudio; i++) {
        const play = new Image();
        play.src = 'assets/images/audio.svg';
        play.classList.add("audio");
        outerBox[i].appendChild(play);
        play.addEventListener('click', function () {
            playVowels(vowelsAudio[i]);
        });
    }

    // Add compound vowels to page

    let compoundVowels = lettersData.filter(letter => letter.type === "compoundVowels");
    let korCompoundVowels = compoundVowels.map(compoundVowel => compoundVowel.kor);
    let allCompoundVowels = korCompoundVowels.length;

    let outerBox2 = document.getElementsByClassName("outer-box2");
    let compoundCard = document.getElementsByClassName("card2");

    for (let i = 0; i < allCompoundVowels; i++) {
        let outerBox2 = document.createElement('div');
        outerBox2.classList.add("outer-box2");
        vowelsContainer.appendChild(outerBox2);
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

     //Create compound vowels audio button and append to each compound vowel flashcard

    let CVAudio = compoundVowels.map(compoundVowel => compoundVowel.audio);
    let CVowelsAudio = CVAudio.length;

    for (let i = 0; i < CVowelsAudio; i++) {
        const play = new Image();
        play.src = 'assets/images/audio.svg';
        play.classList.add("audio");
        outerBox2[i].appendChild(play);
        play.addEventListener('click', function () {
            playCV(CVAudio[i]);
        });
    }

    // Button functions

    let conButton = document.getElementById('consonants-button');
    conButton.addEventListener('click', conClick);

    /**
     * This will hide the vowels container and show consonants container
     */
    function conClick() {
        vowelsContainer.classList.add("nodisplay");
        consContainer.classList.remove("nodisplay");
    }

    let vowelButton = document.getElementById('vowels-button');
    vowelButton.addEventListener('click', vowelClick);

    /**
     * This will hide the consonants container and show vowels container
     */
    function vowelClick() {
        vowelsContainer.classList.remove("nodisplay");
        consContainer.classList.add("nodisplay");
    }

    // Attach event listeners to flashcards

    let card = document.getElementsByClassName('card');
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', flip);
    }

    let card2 = document.getElementsByClassName('card2');
    for (let i = 0; i < card2.length; i++) {
        card2[i].addEventListener('click', flip);
    }

}
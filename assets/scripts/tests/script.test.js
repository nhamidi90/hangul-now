/**
 * @jest-environment jsdom
 */

const  { flip } = require("../script");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("letters.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("expect headers to exist", () => {
        expect(document.getElementsByTagName("h2").length).toBe(2);
    });
    test("expect vowels container to exist", () => {
        expect(document.getElementById("vowels-container").length).toBe(1);
    });
    test("expect consonants button to exist", () => {
        expect(document.getElementById("consonants-button").length).toBe(1);
    });

})

describe("button works correctly", () => {
    test("expect consonants button to hide vowels container", () => {
        let vowelsContainer = document.getElementById("vowels-container");
        document.getElementById("consonants-button").click();
        expect(vowelsContainer.classList.contains("nodisplay")).toBe(true);
    });
    test("expect vowels button to hide consonants container", () => {
        let consContainer = document.getElementById("consonants-container");
        document.getElementById("vowels-button").click();
        expect(consContainer.classList.contains("nodisplay")).toBe(true);
    });
})

describe("objects include correct values", () => {
    test('object assignment', () => {
        const vowels = {"kor": "ㅏ"};
        vowels["eng"] = "a";
        expect(vowels).toEqual({"kor": "ㅏ", "eng": "a"});     
    });
    test('object assignment', () => {
        const consonants = {"kor": "ㄱ"};
        consonants["eng"] = "gk";
        expect(consonants).toEqual({"kor": "ㄱ", "eng": "gk"});     
    });
})

describe("flip function works", () => {
    test("expect card to flip when click", () => {
        let card = document.getElementsByClassName('card');
        flip();
        expect(card.classList.toggle("flipcard")).toBe(true);
    });
})

/**
 * @jest-environment jsdom
 */

// const flashcard = require("../script");
const  { conClick } = require("../script");

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
    test("expect cards to exist", () => {
        expect(document.getElementsByClassName("card").length).toBe(24);
    });
})

describe("button works correctly", () => {
    test("expect consonants button to hide vowels container", () => {
        document.getElementById("consonants-button");
        let vowelsContainer = document.getElementById("vowels-container");
        conClick();
        expect(vowelsContainer.classList.contains("nodisplay"));
    });
})

describe("objects include correct values", () => {
    test('object assignment', () => {
        const vowels = {"kor": "ㅏ"};
        vowels["eng"] = "a";
        expect(vowels).toEqual({"kor": "ㅏ", "eng": "a"});
        
  });
})
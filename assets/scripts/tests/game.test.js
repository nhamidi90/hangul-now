/**
 * @jest-environment jsdom
 */

const { game, dragEnter, drop, next } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("game.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Game data", () => {
    test("game score exists", () => {
        expect("score" in game).toBe(true);
    });
    test("total number of rounds exists", () => {
        expect("totalNumberOfRounds" in game).toBe(true);
    });
    test("question number exists", () => {
        expect("questionNumber" in game).toBe(true);
    });
})

describe("DOM tests", () => {
    test("expect draggable div to contain korean letter", () => {
        let obj1 = document.getElementById('obj1');
        randomValueGenerator();
        expect(obj1.innerHTML).toBe(korean1);
    });
    test("expect droppable divs to contain english letter", () => {
        randomValueGenerator();
        expect(document.getElementById('point1').innerHTML).toBe(shuffled[0]);
    });
})

describe("drag and drop functions", () => {
    test("dragEnter has class of drop-hover", () => {
        dragEnter();
        expect(target.classList.contains("drop-hover")).toBe(true);
    });
    test("dragEnter has class of drop-hover", () => {
        drop();
        let draggableElement = document.getElementById(dragData);
        expect(draggableElement.classList.contains("dragged")).toBe(true);
    });
    test("gamescore increases by 1 after being dropped", () => {
        game.score = 0;
        drop();
        expect(game.score).toBe(1);
    });
})

describe("Next button works", () => {
    beforeEach(() => {
        document.querySelectorAll('.droppable.dropped').length == 3;
        game.questionNumber = 1;
        next();
      });
    test("question number increases by 1", () => {
        expect(game.questionNumber).toBe(2);
    });
    test("question number changes", () => {
        expect(document.getElementById('current-game').innerText).toEqual(2);
    });
    test("obj1 has draggable attribute", () => {
        document.getElementById('obj1').setAttribute("draggable", true);
        expect(document.getElementById('obj1').classList.contains("draggable")).toBe(true);
    });
})

describe("results page", () => {
    test("results page is hidden", () => {
        expect(document.getElementById('results').classList.contains("nodisplay")).toBe(true);
    });
})
/**
 * @jest-environment jsdom
 */

const flashcard = require("../script");

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
})


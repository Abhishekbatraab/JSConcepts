let getAboutUsLink = require("./index");

test("return about-us for english language", ()=>{
    expect(getAboutUsLink("en-UK")).toBe("/about-us");
})
const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("./lib/svg.js");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "text",
      message: "What text do you want on the logo?",
    },
    {
      type: "input",
      name: "textColor",
      message: "What is the color of the text?",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What is the color for the shape?",
    },
  ])
  .then((answers) => {
    let shape;
    if (answers.shape === "Circle") {
      shape = new Circle();
    } else if (answers.shape === "Triangle") {
      shape = new Triangle();
    } else {
      shape = new Square();
    }

    shape.setColor(answers.shapeColor);
    const svg = new SVG();
    svg.setText(answers.text, answers.textColor);
    svg.setShape(shape);

    fs.writeFile("logo.svg", svg.render(), (err) =>
      err ? console.log(err) : console.log("Successfully created Logo!")
    );
  });

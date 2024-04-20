Unit 10 Challenge – Logo Maker

#Description:

Work on this project was implemented at the request of the client, whose user story stated the following: “AS a freelance web developer I WANT to generate a simple logo for my projects SO THAT I don't have to pay a graphic designer.”

The user would also like to have the following:
A command-line application that accepts user input.
WHEN I am prompted for text, THEN I can enter up to three characters.
WHEN I am prompted for the text color, THEN I can enter a color keyword (OR a hexadecimal number).
WHEN I am prompted for a shape, THEN I am presented with a list of shapes to choose from: circle, triangle, and square.
WHEN I am prompted for the shape's color, THEN I can enter a color keyword (OR a hexadecimal number).
WHEN I have entered input for all the prompts, THEN an SVG file is created named `logo.svg`, AND the output text "Generated logo.svg" is printed in the command line.
WHEN I open the `logo.svg` file in a browser, THEN I am shown a 300x200 pixel image that matches the criteria I entered.
Because this application won’t be deployed, a link to a walkthrough video that demonstrates its functionality and passes all of the tests should be provided. Additionally, a link to the video should be provided in the README.

Screencastify Link:
https://drive.google.com/file/d/14PLF1rMruRH1bWuq6qK8rtwGqbUlcm-b/view

Github Repo Link:
https://github.com/vicduar/SVGlogoMaker10.git

##Installation:
The project was created using VS Code editor. It was then uploaded to a Github repository. Since the project was not deployed to a website, Screencastify was used to create an instructional video as to how the script is run in the terminal.

##Usage:
Open the terminal. Ensure that Jest has been installed or use “npm i jest -D”.  The next step is to run the program by the following command “npm test”. Once run, the results of the test should appear as 3 passed (see full code expected in the “Testing” section of the README.”

##Contributions:

References

Github (2024). A free webservice for storing and deploying websites. Multiple pages retrieved and utilized from www.github.com April 12-19, 2024.

MDN (April 12-14, 2024). Mozilla resources for developers. Multiple pages retrieved from https://developer.mozilla.org/en-US/ .

Meyers, M. (2024, April 12-19). Two, one hour tutoring sessions. Www.zoom.us . Denver University Bootcamp.

NPM (2024, April 12-14). Node.js website. Retrieved from https://www.npmjs.com/package/inquirer .

Screencastify (April 19, 2024). Installed extension for Google Chrome browser, utilized in creating a video tutorial. Retrieved from https://app.screencastify.com/signin?returnUrl=%2Fextension-auth%2Fhandover .

W3Schools (2024, April 12-14). The world’s largest web developer site. Multiple pages retrieved from www.w3schools.com April 12-14, 2024.

##License

This project is licensed under the MIT license.


##Testing

To install the test library “Jest,” the command "npm i jest -D" must be entered into the terminal. Once Jest has been successfully installed the command “npm test” will initiate the program and should result in the following lines of code:

PASS  lib/shapes.test.js
  √ should create a blue triangle (4 ms)
  √ red circle (1 ms)
  √ orange square

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.995 s, estimated 2 s
Ran all test suites.


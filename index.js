// TODO: Include packages needed for this application
var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");
const { title } = require("process");
var readme = require("./utils/generateMarkdown.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},{
    type: "input",
    name: "Description",
    message: "What is the description of your project?"
},{
    type: "input",
    name: "Installation",
    message: "How do you install the project?"
},{
    type: "input",
    name: "Usage",
    message: "What is the usage?"
},{
    type: "input",
    name: "Contributing",
    message: "What are you contributing to the project?"
},{
    type: "input",
    name: "Tests",
    message: "What are you testing?"
},{
    type: "list",
    name: "license",
    message: "What is your license?",
    choices:["1","2","3","4"]
},{
    type: "input",
    name: "github",
    message: "What is your github username?"
},{
    type: "input",
    name: "email",
    message: "What is your email?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //return fs.writeFile(fileName, JSON.stringify(data));
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function answers(data){
        console.log(data)
        writeToFile("README.md", readme({ ...data }));
    })
}

// Function call to initialize app
init();

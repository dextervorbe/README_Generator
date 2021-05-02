// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'discription',
            message: 'Please write a short discription',
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3', 'None'], 
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'userinfo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) { 

// }

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => {
        console.log('Making ReadMe');
        fs.writeFileSync("ReadMe.md", generator(answers));
    })
};

// Function call to initialize app
init();

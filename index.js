// TODO: Including packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Creating a init function to initialize app
function init() {

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project that you are creating this readme file for?"
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe your project installation instructions."
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe your project usage information."
        },
        {
            type: "input",
            name: "contribution",
            message: "Please describe your project contribution guidelines."
        },
        {
            type: "input",
            name: "tests",
            message: "Please describe your project test instructions."
        },
        {
            type: 'list',
            message: 'What license you want to choose for my application?',
            name: 'license',
            choices: ['MIT', 'Apache', 'ISC', 'BSD', 'None'],
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        },
    ])
        .then((data) => {
            fs.writeFile('README.md', generateMarkdown(data), (err) => {
                err ? console.log(err) : console.log('success!')
            })
        })

}

// calling init function to initialize app
init();


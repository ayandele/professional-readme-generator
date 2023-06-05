// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:'
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'ISC', 'None']
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
    console.error('An error occurred while writing the README file:', err);
    } else {
    console.log('README.md file generated successfully!');
    }
});
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
});
}

// Function call to initialize app
init();

// TODO: Create a function to generate the README content
function generateMarkdown(data) {
return `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please feel free to reach out through GitHub or email:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

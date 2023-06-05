// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  // Example questions, add more as needed
{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
},
  // Add more questions for other sections (installation, usage, license, contributing, tests, GitHub username, email, etc.)
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
    // Generate README content based on the user's answers
    const readmeContent = generateReadme(answers);

    // Write the generated content to README.md
    writeToFile('README.md', readmeContent);
});
}

// Function call to initialize app
init();

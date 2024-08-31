const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

inquirer
  .prompt([
    {
        type:"input",
        name: "Title",
        message:"What is your project title"

    },
  
    {
        type:"input",
        name: "Description",
        message:"Provide a description about your project"

    },

    {
        type:"input",
        name: "Installation",
        message:"What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."

    },

    {
        type:"input",
        name: "Usage",
        message:"How can your project be used? Provide instructions and examples for use. Include screenshots as needed. "

    },

    {
        type:"input",
        name: "Contributing",
        message:"Would you like other developers to contibute? Include guidlines for how to do so."

    },

    {
        type:"input",
        name: "Tests",
        message:"Have you written test for your application? Provide examples on how to run them here."

    },

    {
        type:"list",
        name: "License",
        message:"",
        choices: ['MIT','Apache', 'GNU AGPLv3', 'GNU GPLv3']

    },

    

  ])
  .then((answers) => {
    console.log(answers)

    let readMe = `
    # Title
    ${answers.Title}

    ## Contents
    * Description
    * Installation
    * Usage
    * Contributing
    * Tests
    * License
    
    ## Description
    ${answers.Description}
    ## Installation
     ${answers.Installation}
    ## Usage
    ${answers.Usage}
    ## Contributing
    ${answers.Contributing}
    ## Tests
    ${answers.Tests}
    ## License
    ${answers.License}`;
 
 fs.writeFile("READ.md", readMe, function(err){
    if(err){
        console.log(err)
    }else {
        console.log("Successfully created file!")
    }
 })
});



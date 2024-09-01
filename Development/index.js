const inquirer = require('inquirer');
const fs = require('fs');
// const {default: Choices } = require('inquirer/lib/objects/choices');

inquirer
  .prompt([
    {
        type:"input",
        name: "Title",
        message:"What is your project title"

    },
  

    {
        type:"input",
        name: "Descrition",
        message:"Explain your project using the following questions as a guide. - What was your motivation? Why did you build this project? What problem does it solve? What did you learn?"

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
        message:"Have you written a test for your application? Provide examples on how to run them here."

    },

    {
        type:"list",
        name: "License",
        message:"The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. Please choose an appropriate License. If you need help choosing a license, refer to this link: https://choosealicense.com/.",
        choices: ['MIT License','Apache License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0','Boost Software License 1.0', 'The Unlicense']

    },

    {
        type:"input",
        name: "GitUser",
        message:"What is your GitHub user name?"

    },


    {
        type:"input",
        name: "Git",
        message:"What is the link to your GitHub profile?"

    },

    {
        type:"input",
        name: "Email",
        message:"What is your email address?"

    },

   

  ])



   
    
//   })
  .then((answers) => {
    console.log(answers)

  
// Adding select License badge
    let badge = ''

    if (answers.License === 'MIT License'){
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }   
    if (answers.License === 'Apache License 2.0'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    if (answers.License === 'GNU AGPLv3'){
        badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    }
    if (answers.License === 'GNU GPLv3'){
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    if (answers.License === 'Mozilla Public License 2.0'){
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }
    if (answers.License === 'Boost Software License 1.0'){
        badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    }
    if (answers.License === 'The Unlicense'){
        badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    }

   
// readme layout
let readMe = `
# ${badge}

# ${answers.Title}

## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
    
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
${answers.License}
## Questions
Thank you for taking time to review  my project. If you have any further questions please contact me at ${answers.Email}. <br />
Would you like to see my other projects? My GitHub username is ${answers.GitUser}. Check out my profile [here](${answers.Git}).`;

fs.writeFile("README.md", readMe, function(err){
    if(err){
        console.log(err)
    }else {
        console.log("Successfully created file!")
    }
 });

// if (answers.License === 'MIT License'){
//  fs.appendFileSync('README.md', '\n\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', (err) => {
//        if (err) {
//            console.error('err');
//          } else {
//             console.log('Successfully appended to file!');
//         }

//     })
//    };
 
 
});



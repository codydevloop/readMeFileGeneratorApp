var inquirer = require("inquirer");
var axios = require('axios')
var fs = require('fs');
// const readMeObj = {}; //optional idea of storing all returned date into obj

// NPM inquirer

inquirer.prompt([
  {
    type: "input",
    name: "gitHubUserName",
    message: "\n***WELCOME***\n (#1)I'm goint to guide you through this.!\n-To get started, please provdie your GitHub username?\n"

  },
  {
    type: "input",
    name: "projectTitle",
    message: "(#2) Please provide a Title for your project/repo.\n"
  },
  {
    type: "input",
    name: "projectDescription",
    message: "(#3) Tell me about this awesome new project/repo of yours.\n-What does it do?\n-What was your motivation?\n"
  },
  {
    type: "input",
    name: "keyConcepts",
    message: "(#4) What key concepts did you apply in this project.\n"
  },
  {
    type: "input",
    name: "installation",
    message: "(#5) How do I install your application?\n-Are there any 3rd Party dependencies?\n"
  },
  {
    type: "input",
    name: "usage",
    message: "(#6) How do I use your application?\n-How do I get it to run?\n"
  },
  {
    type: "list",
    message: "(#7) What lisensing information needs to be included?\n",
    name: "license",
    choices: [
      "MIT",
      "GNU GPLv3",
      "The Unlicense",
      "None"
      //add your own
    ]
  },
  {
    type: "input",
    name: "contributions",
    message: "(#8) Did anyone else contribute to this project?\n-Did you use anyone else's code?\n"
  },
  {
    type: "input",
    name: "tests",
    message: "(#9) Have you developed any tests for this application.\n-How do you run them?\n"
  },
  {
    type: "input",
    name: "featurerequest",
    message: "(#10) Do you have any future ideas for this project?\n"
  },
  {
    type: "input",
    name: "challenges",
    message: "(#11) What challenges did you have creating this application?\n"
  }

]).then(function (userResponses) {
  // userResponses.tableOfContents;  // handy value for testing
  

//  NPM AXIOS

  const queryUrl = `https://api.github.com/users/${userResponses.gitHubUserName}`;
  axios.get(queryUrl)  

    .then(function (gitHubProfile) {

      fs.writeFile("youAreWelcome.md", createReadMe(userResponses,gitHubProfile) , function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

    });
});

// Write file contents
let createReadMe = function(userResponses,gitHubProfile){
   return(`![Image last commit badge]( https://img.shields.io/github/last-commit/codydevloop/readMeFileGeneratorApp)

   [codydevloop](${userResponses.gitHubUserName})
   # Project: ${userResponses.projectTitle} 

   **Key Concepts**
   ${userResponses.keyConcepts}
   
  ${userResponses.projectDescription}

   ## Table of Contents
   * [Installation](#installation)
  
   * [Usage](#usage)
   
   * [License](#license)

   * [Contribution/Credits](#Contributions/Credits)
  
   * [Testing](#testing)
 
   * [Feature Requests](#Feature-Requests)
   
   * [Challenges](#challenges)
  
   * [Questions](#questions)

## Installation
${userResponses.installation}
## Usage
${userResponses.usage}
## License
${userResponses.license}
## Contribution/Credits
${userResponses.contributions}
## Testing
${userResponses.tests}
## Feature-Requests
${userResponses.installation}
## Challenges
${userResponses.challenges}
## Questions/Contact_Me
You can reache me codydevloop@gmail.com
[codydevloop](${userResponses.gitHubUserName})
## Portfolio
${gitHubProfile.data.blog}

![Image GitHub user](${gitHubProfile.data.avatar_url})

  `
  );
};

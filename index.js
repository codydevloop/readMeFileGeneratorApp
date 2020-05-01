//FINISHED PRODUCT APP THAT GENERATES README FILE
//TAKING USER INPUT
//npm inquirer
//object deconstruction
//store in object or class (this)


// The README will be populated with the following:

// * At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests

var inquirer = require("inquirer");
var fs = require('fs');
var axios = require('axios')
const readMeObj = {};

inquirer.prompt([
  {
    type: "input",
    name: "gitHubUserName",
    message: "***WELCOME***\n (#1)Lets build you a nice looking functional readme for this project!\n-To get started, please provdie your GitHub username?\n"

  },
  {
    type: "input",
    name: "projectTitle",
    message: "(#2) Please provide a Title for your project.\n"
  },
  {
    type: "input",
    name: "projectDescription",
    message: "(#3) Tell me about this awesome new project of yours.\n-What does it do?\n-What was your motivation?\n"
  },
  {
    type: "input",
    name: "installation",
    message: "(#4) How do I install your application?\n-Are there any 3rd Party dependencies?\n"
  },
  {
    type: "input",
    name: "usage",
    message: "(#5) How do I use your application?\n-How do I get it to run?\n"
  },
  {
    type: "list",
    message: "(#6) What lisensing information needs to be included?\n",
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
    message: "(#7) Did anyone else contribute to this project?\n-Did you use anyone else's code?\n"
  },
  {
    type: "input",
    name: "tests",
    message: "(#8) Have you developed any tests for this application.\n-How do you run them?\n"
  },
  {
    type: "input",
    name: "featurerequest",
    message: "(#9) Do you have any future ideas for this project?\n"
  },
  {
    type: "input",
    name: "challenges",
    message: "(#10) What challenges did you have creating this application?\n"
  }

]).then(function (userResponses) {

  readMeObj.gitHubUserName = userResponses.gitHubUserName;
  readMeObj.projectTitle = userResponses.projectTitle;
  readMeObj.projectDescription = userResponses.projectDescription;
  readMeObj.tableOfContents = userResponses.tableOfContents;  // handy value for testing
  

  // ****Go get axios Datat from #33
  // const queryUrl = `https://api.github.com/users/${data.gitHubUserName}/repos?per_page=100`;

  const queryUrl = `https://api.github.com/users/${userResponses.gitHubUserName}`;
  axios.get(queryUrl)  

    .then(function (gitHubProfile) {
      // console.log(gitHubProfile.data);
      // console.log(userResponses);

      //  REFERENCES**for the Questions/Contact me section
      // console.log(gitHubProfile.data.avatar_url);
      // console.log(gitHubProfile.data.email);
      // console.log(gitHubProfile.data.location);
      // console.log(gitHubProfile.data.blog);

      // createReadMe(userResponses,gitHubProfile);
      fs.writeFile("readme.md", createReadMe(userResponses,gitHubProfile) , function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });

    });
});

let createReadMe = function(userResponses,gitHubProfile){
   return(`![Image last commit badge]( https://img.shields.io/github/last-commit/codydevloop/readMeFileGeneratorApp)

   # Project: ${userResponses.projectTitle} 
   
   created by: [${userResponses.gitHubUserName}]
   ## Description of: ${userResponses.projectTitle}
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
[GitHubuser](${userResponses.gitHubUserName})
## Portfolio
${gitHubProfile.data.blog}

![Image GitHub user](${gitHubProfile.data.avatar_url})

  `
  );
};

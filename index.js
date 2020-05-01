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
    message: "Lets build you a nice looking functional readme for this project!\nTo get started, please provdie your GitHub username"

  },
  {
    type: "input",
    name: "projectTitle",
    message: "Please provide a Title for your project"
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Tell me about this awesome new project of yours.\n What does it do? What was your motivation?"
  },
  {
    type: "input",
    name: "installation",
    message: "How do I install your application? Are there any 3rd Party dependencies?"
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use your application? How do I get it to run?"
  },
  {
    type: "list",
    message: "What lisensing information needs to be included",
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
    message: "Did anyone else contribute to this project? Did you use anyone else's code?"
  },
  {
    type: "input",
    name: "tests",
    message: "Have you developed any tests for this application.  How do you run them?"
  },
  {
    type: "input",
    name: "featurerequest",
    message: "Do you have any future ideas for this project?"
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
   return(`# ${userResponses.projectTitle} created by ${userResponses.gitHubUserName}
   ## Description of ${userResponses.projectTitle}
   ## Table of Contents
   * [Installation](#installation)
   ${userResponses.installation}
   * [Usage](#usage)
   ${userResponses.usage}

   * [License](#license)
   ${userResponses.licens}
   * [Contribution/Credits](#Contributions/Credits)
   ${userResponses.contributions}
   * [Testing](#testing)
   ${userResponses.tests}
   * [FeatureRequests](#Feature Requests)
   ${userResponses.installation}
   * [Challenges](#challenges)
   ${userResponses.challenges}
   * [Questions](#questions)

## Installation
## Usage
## License
## Contribution/Credits
## Testing
## Feature Requests
## Challenges
## Questions/Contact_Me
You can reache me codydevloop@gmail.com
${userResponses.gitHubUserName} 
##Portfolio
${gitHubProfile.data.blog}
[GitHub](http://github.com) 
   
  `
  );
};

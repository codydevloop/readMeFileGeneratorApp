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

inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "describe", 
    message: "Breifly describe what your project does?"
  },
  {
    type: "confirm",
    name: "trueFalse",
    message: "Do you want to create a Table of contents?"
    // condition
  },
  {
    type: "checkbox",
    message: "What sections should be included in your Table of contents",
    name: "tableOfContents",
    choices: [
      "Installation", 
      "Usage", 
      "Licenses", 
      "Contributing",
      "Tests"
      //add your own
    ]
  }

]).then(function(data) {

  console.log(data);

  // var filename = data.projectName.toLowerCase().split(' ').join('') + ".json";

  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

  //   if (err) {
  //     return console.log(err);
  //   }

  //   console.log("Success!");

  // });
});
//npm axios

// * Questions
//   * User GitHub profile picture
//   * User GitHub email
//   *badge


//write object/Class use projectname convention 
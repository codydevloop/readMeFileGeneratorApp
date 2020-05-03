if (readMeObj.tableOfContents.length <= 0) {

    // console.log("TOC is empty");

    //write header
    //write footer
    
  }else{
    readMeObj.tableOfContents.forEach(function(question){

      switch(question) {
        case "Dev_Environment":
          let stopProduction =questionInstallation();
          break;
        case "Licenses":
          questionLicenses();
          break;
        default:
          console.log("Its all broken!!");
      };
    });
  }


  let writeFooter = function(){

    return (
      `
      ## License
    
      ## Contributions
             
      ## Questions
    Contact [${readMeObj.gitHubUserName}](https://github.com/${readMeObj.gitHubUserName})
      
      `
      
    )

  };

  function questionLicenses(){
    inquirer.prompt([
      {
        type: "input",
        name: "Licenses",
        message: "Please provide any licensing information for this application"
      }
    ]).then(function (licenseResponse){
      readMeObj.license = licenseResponse;
    });
  };

  function questionInstallation(){
    inquirer.prompt([
      {
        type: "input",
        name: "installation",
        message: "Please provide some installation instructions"
      }

    ]).then(function(installationResponse){
      readMeObj.installationResponse = installationResponse;
    });
  };


  let writeTOC = function(){
    return (
      `##TOC
      ## Table
      * [License](#license)
      * [Installation](#installation)
      * [Testing](#testing)
      * [Need To Know](#needtoknow)
      * [Contributions](#contributions)
      * [Questions](#questions)
   
      ## Installation
      To install necessary dependencies run the following command:
      
      ## Testing
      To run tests, run the following command:
     
      ## Need to Know
      `
    )

  };
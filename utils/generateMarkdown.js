// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(data) {
  if (data.license === "None"){
    return ""
  } else {
    return `[![Generic badge](https://img.shields.io/badge/<License>-<${data.license}>-<COLOR>.svg)](https://shields.io/)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title:      
  ${renderLicense(data)}

  ${data.title}

  ## Table of Contents
  ---------------------
  * [Description](##Description)
  * [Installation](##Installation)
  
   ## Description: ${data.description}
   
   ## Installation:  ${data.installation}
   
   ## Usage:  ${data.usage}
   
   ## Contribution:  ${data.contribution}
   
   ## Tests:  ${data.tests}

   ## Questions:   [${data.username}](https://github.com/${data.username})

   I can be reached by the following email address: ${data.email} 
  
  `;

}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if(data.license == data.choices[0])
  // 
  if(license === "None") {
    return "";
  }
  else if(license === "MIT") {
   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license === "APACHE 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license === "GPL 3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  else
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  // return `[![License: ${license}](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "None"){
    return "";
  } 
  return "- [License](#License)"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return "";
  }
  return `# License
  This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.discription}

  # Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)

  # Installation
  to install necessary dependencies, run the following command:
  ${data.install}

  # Usage
  ${data.userinfo}

  ${renderLicenseSection(data.license)}

  # Contribution
  ${data.contributing}

  # Test
  To run tests, run the following command:
  ${data.test}

  # Questions
  If you have any questions about the repo, open an issue or contact me directly at <a href="mailto:${data.email}">${data.email}</a>. You can find more of my work at [${data.username}](https://github.com/${data.username}).

`;
}

module.exports = generateMarkdown;

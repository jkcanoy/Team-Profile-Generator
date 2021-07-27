const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

function start() {
  generateHTML();
  addMember();
}

addMember = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team member's name",
        name: "name",
      },
      {
        type: "list",
        message: "What is the team member's role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is the team member's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member's email?",
        name: "name",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleOther = "";
      if (role === "Manager") {
        roleOther = "office phone number";
      } else if (role === "Engineer") {
        roleOther = "GitHub username";
      } else {
        roleOther = "school name";
      }
    });
};

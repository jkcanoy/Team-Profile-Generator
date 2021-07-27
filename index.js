const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const { functionExpression } = require("@babel/types");

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
      inquirer
        .prompt([
          {
            type: "input",
            message: `What is the team member's ${roleOther}`,
            name: "roleOther",
          },
          {
            type: "list",
            message: "Would you like to add another team member?",
            name: "addMore",
            choices: ["Yes", "No"],
          },
        ])
        .then(function ({ roleOther, addMore }) {
          let newMember;
          if (role === "Manager") {
            newMember = new Manager(name, id, email, officeNumber);
          } else if (role === "Engineer") {
            newMember = new Engineer(name, id, email, github);
          } else {
            newMember = new Intern(name, id, email, school);
          }
          employees.push(newMember);
          addhtml(newMember).then(function () {
            if (addMore === "Yes") {
              addMember;
            } else {
              finishHTML();
            }
          });
        });
    });
};

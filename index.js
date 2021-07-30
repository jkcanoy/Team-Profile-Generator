const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

// Start application
function start() {
  generateHTML();
  addMember();
}

// Add member through Inquirer prompts
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
        name: "email",
      },
    ])
    // Information exclusive to role
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
          // Add another member
          {
            type: "list",
            message: "Would you like to add another team member?",
            name: "addMore",
            choices: ["Yes", "No"],
          },
        ])
        // Create instance of manager, engineer, or intern
        .then(function ({ roleOther, addMore }) {
          let newMember;
          if (role === "Manager") {
            newMember = new Manager(name, id, email, roleOther);
          } else if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleOther);
          } else {
            newMember = new Intern(name, id, email, roleOther);
          }
          employees.push(newMember);
          addHTML(newMember).then(function () {
            if (addMore === "Yes") {
              addMember();
            } else {
              finishHTML();
            }
          });
        });
    });
};

// Generate beginning of HTML file
generateHTML = () => {
  let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <title>Team Profile Generator</title>
  </head>
  <body class="bg-secondary">
    <header class="container-fluid p-0 mb-5 header">
      <div class="d-flex justify-content-center text-white bg-dark">
        <h1>
        <i class="bi bi-people"></i> Team Profile <i class="bi bi-people"></i>
        </h1>
      </div>
    </header>
    <section class="container">
      <div class="row">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">`;
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("GENERATING HTML");
};

// Add HTML for new Member
addHTML = (member) => {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();
    const role = member.getRole();

    let data = "";
    // Manager HTML
    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      data = `<div class="col d-flex justify-content-center mb-3">
      <div class="card" style="width: 18rem">
        <div class="card-body text-info bg-dark">
          <h5 class="card-title">${name}<br><br><i class="bi bi-cup-fill"></i> ${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong><i class="bi bi-person-badge"></i> ID:</strong> ${id}</li>
          <li class="list-group-item"><strong><i class="bi bi-envelope"></i> Email:</strong> ${email}</li>
          <li class="list-group-item"><strong><i class="bi bi-telephone"></i> Office Number:</strong> ${officeNumber}</li>
        </ul>
      </div>
    </div>`;
      // Engineer HTML
    } else if (role === "Engineer") {
      const github = member.getGithub();
      data = `<div class="col d-flex justify-content-center mb-3">
      <div class="card" style="width: 18rem">
        <div class="card-body text-info bg-dark">
        <h5 class="card-title">${name}<br><br><i class="bi bi-sunglasses"></i> ${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong><i class="bi bi-person-badge"></i> ID:</strong> ${id}</li>
        <li class="list-group-item"><strong><i class="bi bi-envelope"></i> Email:</strong> ${email}</li>
          <li class="list-group-item"><strong><i class="bi bi-github"></i> GitHub:</strong> ${github}</li>
        </ul>
      </div>
    </div>`;
    } else {
      const school = member.getSchool();
      data = `<div class="col d-flex justify-content-center mb-3">
      <div class="card" style="width: 18rem">
        <div class="card-body text-info bg-dark">
        <h5 class="card-title">${name}<br><br><i class="bi bi-eyeglasses"></i> ${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong><i class="bi bi-person-badge"></i> ID:</strong> ${id}</li>
        <li class="list-group-item"><strong><i class="bi bi-envelope"></i> Email:</strong> ${email}</li>
          <li class="list-group-item"><strong><i class="bi bi-pencil"></i> School:</strong> ${school}</li>
        </ul>
      </div>
    </div>`;
    }
    // Intern HTML
    console.log("ADDING TEAM MEMBER");
    fs.appendFile("./dist/index.html", data, function (err) {
      if (err) {
        return reject(err);
      } else {
        return resolve();
      }
    });
  });
};

// Add end of HTML file
finishHTML = () => {
  let html = `</div>
    </div>
  </section>
</body>
</html>`;
  fs.appendFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("HTML COMPLETED");
};

// Call start application function
start();

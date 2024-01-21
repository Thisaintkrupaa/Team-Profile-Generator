const Manager = require("./starter/lib/Manager.js");
const Engineer = require("./starter/lib/Engineer.js");
const Intern = require("./starter/lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./starter/src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the teams managers name: ",
  },

  {
    type: "input",
    name: "id",
    message: "Enter the managers Employee ID: ",
  },

  {
    type: "input",
    name: "email",
    message: "Enter the managers Email address: ",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "Enter the managers office number: ",
  },

  {
    type: "list",
    name: "addMembers",
    message: " Add a new Member ",
    choices: ["Engineer", "Intern", "Manager", "Quit"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the Engineer's name: ",
  },

  {
    type: "input",
    name: "id",
    message: "Enter the engineers id: ",
  },

  {
    type: "input",
    name: "email",
    message: "Enter the engineers email address: ",
  },

  {
    type: "input",
    name: "github",
    message: "Enter the engineers github Username: ",
  },

  {
    type: "list",
    name: "addMembers",
    message: " Add a new Member ",
    choices: ["Engineer", "Intern", "Manager", "Quit"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the interns name: ",
  },

  {
    type: "input",
    name: "id",
    message: "Enter the interns id: ",
  },

  {
    type: "input",
    name: "email",
    message: "Enter the interns Email address: ",
  },

  {
    type: "input",
    name: "school",
    message: "Enter the name of the interns school: ",
  },

  {
    type: "list",
    name: "addMembers",
    message: " Add a new Member ",
    choices: ["Engineer", "Intern", "Manager", "Quit"],
  },
];

//function to initialize the application

const init = async () => {
  let response = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    response.name,
    response.id,
    response.email,
    response.officeNumber
  );
  team.push(manager);

  while (response.addMembers != "Quit") {
    if (response.addMembers == "Engineer") {
      response = await inquirer.prompt(engineerQuestions);
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );

      team.push(engineer);
    } else if (response.addMembers == "Intern") {
      response = await inquirer.prompt(internQuestions);
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );

      team.push(intern);
    }
  }
};

init().then(() => {
  console.log("The team has been succesfully created ", team);
  fs.writeFile("team.html", render(team), (err) =>
    err ? console.error(err) : console.log("HTML file is created!")
  );
});


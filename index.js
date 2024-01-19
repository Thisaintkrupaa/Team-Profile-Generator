const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { default: Choice } = require("inquirer/lib/objects/choice.js");
const Engineer = require("./lib/Engineer");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teams = [];

const managerQuestions = [ 
    
    {

    type: 'input',
    name: 'name',
    message:"Enter the teams managers name: ",

},

{
  type: 'input',
    name: 'id',
    message: "Enter the managers Employee ID: ",

},

{

    type: 'input',
    name: 'email',
    message: "Enter the managers Email address: ",

},

{

    type: 'input',
    name: 'office number',
    message: "Enter the managers office number: ",

},


];



const engineerQuestions = [ {

    type:'input',
    name: 'name',
    message: "Enter the Engineer's name: ",


},

{

    type:'input',
    name: 'id',
    message: "Enter the engineers id: ",


},

{

    type:'input',
    name: 'email',
    message: "Enter the engineers email address: ",


},

{

    type:'input',
    name: 'github',
    message: "Enter the engineers github Username: ",

},


];

const internQuestions = [ {

        type:'input',
        name: 'name',
        message: "Enter the interns name: ",
    
    
    },
    
    {

        type:'input',
        name: 'id',
        message: "Enter the interns id: ",
    
    
    },

    {

        type:'input',
        name: 'email',
        message: "Enter the interns Email address: ",
    
    
    },

    {

        type:'input',
        name: 'school',
        message: "Enter the name of the interns school: ",
    
    },

]
//function to initialize the application

const init = async () => {
    let response = await inquirer.Prompt(managerQuestions)
    const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber,
        );
team.push (manager)

while (response.addmember != "i dont want to add anymore members") {
    if (response.addMember = 'Engineer') {
        response = await inquirer.prompt(engineerQuestions)
        const Engineer = new Engineer(

            response.name,
            response.id,
            response.email,
           response.github,
        );

        team.push (Engineer)

     } else if (response.addMember == 'Intern') {

        response = await inquirer.prompt(InternQuestions)
        const Intern = new Intern(
             response.name,
             response.id,
             response.email,
            response.school
        );

        team.push(Intern)
    }
    
    }
}

// call the render function to generate html 

const html = render(teams);

// Write Html file
console.log('The tean has been succesfully created ', teams);
fs.writeFile('team.html', render(teams), (err) => err ? console.error (err) : console.log ('HTML file is created!'));

//run the appplication

init();

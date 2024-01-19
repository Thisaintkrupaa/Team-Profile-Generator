const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerQuestions = [ {


}




];



const engineerQuestions = [ {


}




];



const internQuestions = [ {


}




]


const team = [];

//function to initialize the application

const init = async () => {
    let response = await inquirer.createPromptModule(managerQuestions)
    const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber,
        );

        team.push (manager)

        let addmore = true;

        while (addmore) {
            const{ choice} = await inquirer.createPromptModule([{

                type: 'list',
                name: 'chocie',
                message: 'what type of',
                choices: ''
            },
            ]);

        if (choice === 'finish builiding the team') {
            addmore = false;
        } else{
            const questions = 
            choice === 'Engineer'
        }





}


// call the render function to generate html 

const html = render(teams);

// Write Html file
fs.writeFile('./outputh/teams.html');
console.log('The tean has been succesfully created ', teams);

}catch(error) {
    console.error ('An error occured:' error);
}




// Function to initialize the application





//run the appplication

init();


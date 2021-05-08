const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('./db/connection');


const start = () => {
  inquirer.prompt({
    name: "initialChoice",
    type: "list",
    message: "Would you like to do?",
    choices: ["Add a department",
      "Add a role",
      "Add an employee",
      "View a department",
      "View a role",
      "View an employee",
      "Update employee's role"],
  }).then((answer) => {
    switch (answer.initialChoice) {
      case "Add a department":
        console.log("Add a department");
        //addDepartment();  
        break;
      case "Add a role":
        //addRole();
        break;
      case "Add an employee":
        //addEmployee();
        break;
      case "View a department":
        //viewDepartment();
        break;
      case "View a role":
        //viewRole();
        break;
      case "View an employee":
        //viewEmployee();
        break;
      case "Update employee's role":
        //updateEmpRole();
        break;

    }

  });
};



// start();


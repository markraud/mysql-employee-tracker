const mysql = require('mysql');
const { prompt } = require('inquirer');
const connection = require('./db/connection');
const cTable = require('console.table');




const start = () => {
  prompt({
    name: "initialChoice",
    type: "list",
    message: "Would you like to do?",
    choices:
      ["Add a department",
        "Add a role",
        "Add an employee",
        "View a department",
        "View a role",
        "View an employee",
        "Update employee's role"],
  }).then((answer) => {
    switch (answer.initialChoice) {
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "View a department":
        viewDepartment();
        break;
      case "View a role":
        viewRole();
        break;
      case "View an employee":
        viewEmployee();
        break;
      case "Update employee's role":
        updateEmpRole();
        break;

    }

  });
};


const addDepartment = () => {
  console.log('inside addDepartment function');
  prompt({
    name: 'departmentName',
    type: 'input',
    message: 'Please enter new department name.'
  })
    .then((answer) => {
      console.log(answer);
      // let query = 
      // `INSERT INTO department SET ?', `
      // connection.query()
    })
}

const addRole = () => {
  console.log('inside addRole function');
}

const addEmployee = () => {
  console.log('inside addEmployee function');
}

const viewDepartment = () => {
  console.log('inside viewDepartment function');
}

const viewRole = () => {
  console.log('inside viewRole function');
}

const viewEmployee = () => {
  console.log('inside viewEmployee function');
}

const updateEmpRole = () => {
  console.log('inside updateEmpRole function');
}


start();


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
  console.log('Inserting a new department...\n');
  prompt({
    name: 'departmentName',
    type: 'input',
    message: 'Please enter new department name.'
  })
    .then((answer) => {
      console.log(answer);
      const query = connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.departmentName,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${answer} department inserted!\n`);
        })
    }
    )
};



// use this as an example for addDepartment insert above
// const createProduct = () => {
//   console.log('Inserting a new product...\n');
//   const query = connection.query(
//     'INSERT INTO products SET ?',
//     {
//       flavor: 'Rocky Road',
//       price: 3.0,
//       quantity: 50,
//     },
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} product inserted!\n`);
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

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


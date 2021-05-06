const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'root',
  database: 'empTracker_DB',
});

const start = () => {
  inquirer.prompt({
    name:"initialChoice",
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
    console.log(answer);
    switch (answer.)

  });
};



// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  start();
});
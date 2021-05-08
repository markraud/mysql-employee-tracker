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
      // console.log(answer);
      const query = connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.departmentName,
        },
        (err, res) => {
          if (err) throw err;
        }
        //you might want to put a displayDepartment here
      )
      console.log(`${answer.departmentName} department inserted!\n`);
      start();
    })
};

const addRole = () => {
  console.log('Inserting a new role...\n');
  prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Please enter new role name.'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Please enter a salary for the role'
    },
    {
      name: 'deptId',
      type: 'input',
      message: 'Please enter a department ID'
    },
  ])
    .then((answer) => {
      console.log(answer);
      const query = connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.deptId
        },
        (err, res) => {
          if (err) throw err;
        }
      )
      console.log(`${answer.roleName} role inserted!\n`);
      start();
    })
}

const addEmployee = () => {
  console.log('Inserting a new employee...\n');
  prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'Please enter new employee\'s first name.'
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'Please enter new employee\'s last name.'
    },
    {
      name: 'role',
      type: 'list',
      message: 'Please select new employee\'s role ID.',
      choices: [
        'Salesman',
        'Sales Assistant',
        'Software Engineer',
        'Electrical Engineer',
        'Accountant',
        'Collection Agent',
        'Lawyer',
        'Paralegal'
      ]
    },

  ])
    .then((answer) => {
      console.log(answer.role);
      // find role_id based on role name - switch case
      let roleId;
      switch (answer.role) {
        case 'Salesman':
          roleId = 1;
          break;
        case 'Sales Assistant':
          roleId = 2;
          break;
        case 'Software Engineer':
          roleId = 3;
          break;
        case 'Electrical Engineer':
          roleId = 4;
          break;
        case 'Accountant':
          roleId = 5;
          break;
        case 'Collection Agent':
          roleId = 6;
          break;
        case 'Lawyer':
          roleId = 7;
          break;
        default:
          roleId = 8;
          break;
      }
      const query = connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: roleId
        },
        (err, res) => {
          if (err) throw err;
        }
      )
      console.log(`${answer.roleName} employee inserted!\n`);
      start();
    })
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


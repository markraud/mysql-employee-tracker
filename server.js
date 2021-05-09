const mysql = require('mysql');
const { prompt } = require('inquirer');
const connection = require('./db/connection');
const cTable = require('console.table');
const { end } = require('./db/connection');




const start = () => {
  prompt({
    name: "initialChoice",
    type: "list",
    message: "Would you like to do?",
    choices:
      ["Add a department",
        "Add a role",
        "Add an employee",
        "View a list of all departments",
        "View a list of all roles",
        "View a list of all employees",
        "Update employee's role",
        "I'm done...Quit."],
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
      case "View a list of all departments":
        viewDepartments();
        break;
      case "View a list of all roles":
        viewRoles();
        break;
      case "View a list of all employees":
        viewEmployees();
        break;
      case "Update employee's role":
        updateEmpRole();
        break;
      default:
        exit();
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
      name: 'dept',
      type: 'list',
      message: 'Please select the department',
      choices: [
        'Sales',
        'Engineering',
        'Finanace',
        'Legal'
      ]
    },
  ])
    .then((answer) => {
      console.log(answer);
      let deptId = '';
      switch (answer.dept) {
        case 'Sales':
          deptId = 1;
          break;
        case 'Engineering':
          deptId = 2;
          break;
        case 'Finance':
          deptId = 3;
          break;
        default:
          deptId = 4;
          break;
      }
      const query = connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.title,
          salary: answer.salary,
          department_id: deptId
        },
        (err, res) => {
          if (err) throw err;
        }
      )
      console.log(`${answer.title} role inserted!\n`);
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
      let roleId = '';
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
      console.log(`${answer.first_name} ${answer.last_name} inserted!\n`);
      start();
    })
}

const viewDepartments = () => {
  console.log(`Viewing all departments\n`);
  // let query = 'SELECT department.id, department.name FROM department LEFT JOIN role on role.department_id = department.id '
  // query += 'LEFT JOIN employee on employee.role_id = role.id GROUP BY department.id, department.name ORDER BY department.id'
  connection.query('SELECT * FROM department order by id', (err, res) => {
    console.table(res);
    start();
  })
}

const viewRoles = () => {
  console.log(`Viewing all roles\n`);
  connection.query(`SELECT id, title, salary FROM role ORDER BY id`, (err, res) => {
    console.table(res);
    start();
  })
}

const viewEmployees = () => {
  console.log(`Viewing all employees\n`);
  let query = `SELECT employee.id, employee.first_name,  employee.last_name, role.title, `
  query += `department.name, role.salary FROM employee, department, role `
  query += `WHERE department.id = role.department_id AND role.id = employee.role_id ORDER BY employee.id`
  connection.query(query, (err, res) => {
    console.table(res);
    start();
  })
}

const updateEmpRole = () => {
  console.log('Updating an employee\'s role');
  let update = `UPDATE employee SET role_id = ? WHERE role.id = ?`
  connection.query(update, (err, res) => {
    // [ro]

  })


}

const exit = () => {
  process.exit();
}


start();


use empTracker_DB;

INSERT INTO department
  (name)
VALUES
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");

INSERT INTO role
  (title, salary, department_id)
VALUES
  ("Salesman", 70000.01, 1),
  ("Sales Assistant", 62000.66, 1),
  ("Software Engineer", 85000.65, 2),
  ("Electrical Engineer", 75000.78, 2),
  ("Accountant", 65000.45, 3),
  ("Collection Agent", 55000.40, 3),
  ("Lawyer", 95000.20, 4),
  ("Paralegal", 58000.33, 4);

INSERT INTO employee
  (first_name, last_name, role_id)
VALUES
  ("John", "Doe", 1),
  ("Mike", "Chan", 2),
  ("Ashley", "Rodriguez", 3),
  ("Kevin", "Tupik", 4),
  ("Malia", "Brown", 5),
  ("Sarah", "Lourd", 6),
  ("Tom", "Allen", 7),
  ("Christian", "Eckenrode", 8);

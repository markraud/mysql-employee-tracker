use empTracker_DB;

INSERT INTO department
  (name)

VALUES
  ("sales"),
  ("engineering"),
  ('finance'),
  ("legal");

INSERT INTO role
  (title, salary, department_id)

VALUES
  ("Salesman", 50000, 1),
  ("Sales Manager", 60000, 1),
  ("Software Engineer", 60000, 2),
  ("Electrical Engineer", 60000, 2),
  ("Accountant", 60000, 3,
  ("Collection Manager", 60000, 3),
  ("Lawyer", 60000, 4),
  ("Paralegal", 60000, 4);

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

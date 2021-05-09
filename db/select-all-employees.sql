USE emptracker_db;
SELECT employee.id, employee.first_name,  employee.last_name, role.title, 
department.name, role.salary FROM employee, department, role 
WHERE department.id = role.department_id AND role.id = employee.role_id ORDER BY employee.id
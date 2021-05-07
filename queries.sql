SELECT first_name, last_name, name, title, salary 
	FROM employee, department, role
    WHERE department_name = 'engineering';
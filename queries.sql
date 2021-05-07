// 
SELECT employee(id), first_name, last_name, department_name, title, salary 
	FROM employee, department, role
    WHERE department_name = 'Engineering';
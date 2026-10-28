# Write your MySQL query statement below
SELECT eUNI.unique_id , e.name 
FROM Employees as e
LEFT JOIN EmployeeUNI as eUNI ON e.id = eUNI.id 
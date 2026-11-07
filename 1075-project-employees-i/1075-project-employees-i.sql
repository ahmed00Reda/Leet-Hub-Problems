# Write your MySQL query statement below
SELECT p.project_id , Round(AVG(experience_years),2) as average_years
FROM Project p 
left Join Employee e ON  p.employee_id  = e.employee_id 
group BY p.project_id

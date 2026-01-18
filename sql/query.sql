/* =========================================================
   BASIC TABLE CREATION
   ========================================================= */

-- Parent Table
CREATE TABLE unidev16 (
    university_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    uni_name       VARCHAR(256),
    uni_address    TEXT,
    uni_dob        DATE,
    uni_active     BOOLEAN,
    uni_date       TIMESTAMP,
    salary         INT
);

-- Child Table
CREATE TABLE studentdec16 (
    student_id     INT PRIMARY KEY,
    student_name   VARCHAR(256),
    university_id  INT,
    student_active BOOLEAN,
    student_dob    DATE,

    CONSTRAINT fk_university
        FOREIGN KEY (university_id)
        REFERENCES unidev16 (university_id)
        ON DELETE CASCADE
);


/* =========================================================
   CTAS - CREATE TABLE AS SELECT
   ========================================================= */

CREATE TABLE unidec16_copy AS
SELECT
    university_id,
    uni_name,
    uni_address,
    uni_active
FROM unidev16
WHERE uni_active = TRUE;


/* =========================================================
   TEMPORARY TABLE
   ========================================================= */

CREATE TEMPORARY TABLE temp_uni (
    tempuni_id INT PRIMARY KEY,
    salary     DECIMAL(10,2)
);


/* =========================================================
   CTE - COMMON TABLE EXPRESSION
   ========================================================= */

WITH student_highsalary AS (
    SELECT
        student_id,
        student_name
    FROM studentdec16
    WHERE salary > 50000
)
SELECT * FROM student_highsalary;

-- NOTE:
-- CTE exists only for this query execution


/* =========================================================
   INDEXES
   ========================================================= */

-- Normal Index
CREATE INDEX salary_index
ON unidev16 (salary);

-- Unique Index
CREATE UNIQUE INDEX university_id_index
ON unidev16 (university_id);


/* =========================================================
   QUERY PLAN ANALYSIS
   ========================================================= */

EXPLAIN
SELECT *
FROM unidev16
WHERE salary > 50000;

EXPLAIN ANALYZE
SELECT *
FROM unidev16
WHERE salary > 50000;

EXPLAIN (FORMAT JSON)
SELECT *
FROM unidev16
WHERE salary > 50000;


/* =========================================================
   PARTITIONING
   ========================================================= */

-------------------------
-- RANGE PARTITION
-------------------------

-- Parent Table
CREATE TABLE customer (
    customer_id   INT,
    customer_name VARCHAR(256),
    order_date    DATE,
    PRIMARY KEY (order_date, customer_id)
)
PARTITION BY RANGE (order_date);

-- Partitions
CREATE TABLE customer_before_2020
PARTITION OF customer
FOR VALUES FROM ('1900-01-01') TO ('2020-01-01');

CREATE TABLE customer_before_2021
PARTITION OF customer
FOR VALUES FROM ('2020-01-01') TO ('2021-01-01');

-- Sample Queries
SELECT * FROM customer;
SELECT * FROM customer_before_2020;


-------------------------
-- LIST PARTITION
-------------------------

CREATE TABLE ordersdec26 (
    order_id    INT PRIMARY KEY,
    order_name  VARCHAR(256),
    country     VARCHAR(256)
)
PARTITION BY LIST (country);

CREATE TABLE orders_india
PARTITION OF ordersdec26
FOR VALUES IN ('India');

CREATE TABLE orders_usa
PARTITION OF ordersdec26
FOR VALUES IN ('USA');


-------------------------
-- HASH PARTITION
-------------------------

CREATE TABLE userdec27 (
    user_id       INT PRIMARY KEY,
    user_name     VARCHAR(256),
    card_details  INT
)
PARTITION BY HASH (card_details);

CREATE TABLE user_hash_0
PARTITION OF userdec27
FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE user_hash_1
PARTITION OF userdec27
FOR VALUES WITH (MODULUS 4, REMAINDER 1);


---------------------------------------------

-- Constraints

-- primary key
-- foreign key
-- unique
-- not null
-- null
-- check - age int check(age >=18)
-- default active
-- composite key - PRIMARY KEY (order_id, product_id)
-- auto increment

-----------------------------------------------------------------------------------------

--Data Types 

--int
--bigint
--decimal,numeric
--text
--timestamp
--boolean
--date
--varchar

---------------------------------------------------------------------------------------------------

--Data manipulation language

--rename table name 
Alter table unidev16 rename to unidev17;

--new column
alter table unidev17 add column uni_native text;

--rename column
alter table unidev17 rename column uni_native to uni_native_address;

--drop column
alter table unidev17 drop column uni_native_address;

---------------------------------------------------------------------------------------

--Data query languages

select * from unidev17;

select uni_name from unidev17;

select uni_name as uniname from unidev17;

select * from unidev17 order by salary;

select * from unidev17 order by salary desc;

select * from unidev17 order by salary limit 1;

select * from unidev17 order by salary offset 1 limit 1;

select * from unidev17 where salary between 2000 and 5000;

select * from unidev17 where salary = '5000';

select * from unidev17 where name like 'R%';

select * from unidev17 where department = 'it' AND salary > 50000;

select distinct email from unidev17;

select count(distinct email) from unidev17;

select name from unidev17 where university_id not in(1,2,3);

select * from uni_dev17 where salary Is Null;

select * from uni_dev17 where salary Is not Null;

-------------------------------------------------------

--Aggregation

--max
--sum
--count
--min
--avg

select sum(salary) as total_salary from unidev17;

------------------------------------------------------------

--String handling

--length
--lower
--upper
--concat
--trim
--reverse

select concat(name,email) as name_email from unidev17;

-----------------------------------------------------------------

--Window Functions

--Aggregate - avg,count,min,max,sum
--Ranking - rounumber,rank,denserank,percentrank,ntile
--Value - lag,lead,first,last,nthvalue

select 
uniname,
uniaddress,
avg(salary) over (partition by department) as total_avg
from uni_dec17;

SELECT
  name,
  department,
  salary,
  ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank_no
FROM employees;

-----------------------------------------------------------------------------------

--data control languages

--grant,revoke

-------------------------------------------------------------------------------------

--groupby

select department,max(salary)as max_amount from uni_dec17 group by department;

--having - having after getting groupby result - filter groups  


select department, max(salary) as max_amount from uni_dec17 group by department HAVING MAX(salary) > 10;

----------------------------------------------------------------------------------------------------------

SELECT department FROM employees_2023
UNION
SELECT department FROM employees_2024;


SELECT department FROM employees_2023
UNION ALL
SELECT department FROM employees_2024;

----------------------------------------------------------------------------------------------
--View - its was secure and reusable - its store virtual query and not query result
--Without a view, we repeat complex queries. With a view, we store the query once and reuse it like a table.

create View active_universities as
select uni_name,uni_address from unidev17;

select * from active_universities;

------------------------------------------------------------------------------------------------------
-- coalesce - check first not null value

select name,
coalesce(phone,email,'not available') as contact
from employees;

---------------------------------------------------------------------------------------------------

--case check

SELECT name, salary,
       CASE
         WHEN salary > 5000 THEN 'High'
         WHEN salary < 5000 THEN 'Low'
         ELSE 'Unknown'
       END AS salaryinfo
FROM university;

-------------------------------------------------------------------------------------------------------------

--sub queries -- A subquery is a query inside another query. it return data of outer query

select emp_name from employees where department in (select department_name from department where budget > 5000000 );

------------------------------------------------------------------------------------------------------------------

--Join,innerjoin - merge two tables with matching values
--join and inner join are same

SELECT e.name, d.dept_name
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id;

--self join - join with own table

select e.name AS employee, m.name AS Manager
from employees e
inner join employees m
on m.manager_id = e.empid;

--left join - return all rows from left table but only matching rows from right table otherwise null

SELECT e.name
FROM employees e
LEFT JOIN departments d
ON e.dept_id = d.dept_id
WHERE d.dept_id IS NULL;

--right join - return all rows from right table

SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d
ON e.dept_id = d.dept_id;


--cross join

--CROSS JOIN returns every possible combination of rows from both tables.
--cutomer 4
--product 3
--4 * 3 = 12

SELECT e.name, d.dept_name
FROM employees e
CROSS JOIN departments d;


--where - use where to filter results after joining

--join multiple table

SELECT 
  e.name,
  d.dept_name,
  s.salary
FROM employees e
INNER JOIN departments d
  ON e.dept_id = d.dept_id
INNER JOIN salaries s
  ON e.emp_id = s.emp_id;
  
FROM
JOIN
ON
JOIN
ON
SELECT



--Inserts


Insert into unidev_17 (id,name,city) values
(3, 'charile', 'thanjavur'),
(4, 'john', 'chennai');

insert into customer select * from employees where salary > 1000; -- columns must be same

--update

update unidev_17 set customer_name = 'raja' where customer_id = 1;

UPDATE unidev_17
SET city = CASE id
    WHEN 3 THEN 'madurai'
    WHEN 4 THEN 'chennai'
    WHEN 5 THEN 'trichy'
    ELSE city
END
WHERE id IN (3, 4, 5);

const query = `
  UPDATE employees
  SET salary = salary * 1.10
  WHERE department = $1
`;

await pool.query(query, ["IT"]);



--delete records

delete from uni_dev17 where customerid = 1;

-- truncate

truncate table university;

--drop table

drop table university;
drop table if exists university;

--remove duplicates

select distinct * from university;

--find duplicates

SELECT name, COUNT(*) AS count
FROM unidev_17
GROUP BY name
HAVING COUNT(*) > 1;


--second largest

select distinct salary from employees order by desc limit 1 offset 1;

SELECT MAX(salary) AS second_largest
FROM unidev_17
WHERE salary < (SELECT MAX(salary) FROM unidev_17);


--employee manager

select e.name AS employee, m.name AS Manager
from employees e
inner join employees m
on m.manager_id = e.empid;


-- transaction

BEGIN;  -- start transaction

-- your SQL statements
UPDATE unidev_17 SET city = 'madurai' WHERE id = 3;
INSERT INTO unidev_17 (id, name, city) VALUES (5, 'Ramesh', 'coimbatore');

-- decide whether to save or undo
ROLLBACK;  -- undo all changes
COMMIT; -- save all changes



 




insert into employee (ID, FIRST_NAME, LAST_NAME, MGR_ID, DESIGNATION, DEPARTMENT, IMG, EMAIL, ADDRESS)
values(1001,'Satya', 'Paidi', null, 'SM', 'IT', null,"psnethre@gmail.com","Gachibowli"),
(1002,'Manish', 'Sharma', 1001, 'SE', 'IT', null,"manishsharmaps2@gmail.com", "21 Downing Street"),
(1003, 'Bruce', 'Wayne', 1001, 'SSE', 'IT', null,"batman@gotham.com", "Governors building, Gotham"),
(1004,'Clark', 'Kent', 1001, 'HR', 'HR', null,"manishsharmaps2@gmail.com", "Somewhere in US");

insert into login_detail (ID, EMP_ID, USERNAME, PASSWORD, ROLE)
values(1,1001,'sp','sp','MANAGER'),
(2,1002,'ms','ms','EMPLOYEE'),
(3,1003,'bw','bw','EMPLOYEE'),
(4,1004,'ck','ck','EMPLOYEE');

insert into request (ID, EMP_ID, REQUEST_DESCRIPTION, STATUS,COMMENT)
values(1, 1001, 'Need a PS Vita.', 'OPEN','NA'),
(2, 1002, 'Need iPhone X', 'OPEN','NA'),
(3, 1003, 'Need Oppo', 'OPEN','NA');






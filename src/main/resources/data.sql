insert into employee (ID, FIRST_NAME, LAST_NAME, MGR_ID, DESIGNATION, DEPARTMENT, IMG)
values(1001,'Satya', 'Paidi', null, 'SM', 'IT', null),
(1002,'Manish', 'Sharma', 1001, 'SE', 'IT', null),
(1003, 'Bruce', 'Wayne', 1001, 'SSE', 'IT', null),
(1004, 'Clark', 'Klent', null, 'M', 'HR', null);

insert into login_detail (ID, EMP_ID, USERNAME, PASSWORD, ROLE)
values(1,1001,'sp','sp',1),
(2,1002,'ms','ms',0),
(3,1003,'bw','bw',0),
(4,1004,'ck','ck',1);

insert into request (ID, EMP_ID, REQUEST_DESCRIPTION, STATUS,COMMENT)
values(1, 1001, 'Need a PS Vita.', 'OPEN','NA'),
(2, 1002, 'Need iPhone X', 'OPEN','NA'),
(3, 1003, 'Need Oppo', 'OPEN','NA');






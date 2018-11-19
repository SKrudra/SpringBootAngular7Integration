insert into employee (ID, FIRST_NAME, LAST_NAME, MGR_ID, DESIGNATION, DEPARTMENT, IMG, EMAIL, ADDRESS)
values(1001,'Sand', 'Ku', null, 'SSE', 'IT', null,"r@tech.com","Gach"),
(1002,'Man', 'Sha', 1001, 'SE', 'IT', null,"a@tech.com", "Gachi"),
(1003, 'Satya', 'Pa', 1001, 'SE', 'IT', null,"i@tech.com", "Gachi");

insert into login_detail (ID, EMP_ID, USERNAME, PASSWORD, ROLE)
values(1,1001,'sk','sk','MANAGER'),
(2,1002,'ms','ms','EMPLOYEE'),
(3,1003,'sp','sp','EMPLOYEE');

/*insert into request (ID, EMP_ID, REQUEST_DESCRIPTION, STATUS,COMMENT, START_DTM, TENTATIVE_END_DTM)
values(1, 1001, 'Need a PS Vita.', 'OPEN','NA', NOW(), NOW()),
(2, 1002, 'Need iPhone X', 'OPEN','NA', NOW(), NOW()),
(3, 1003, 'Need Oppo', 'OPEN','NA',  NOW(), NOW());
*/

insert into reason (ID, DESCRIPTION)
values(1, 'Not able to work up to the true potential'),
(2, 'Not satisfied with the technical growth'),
(3, 'Not satisfied with the economical growth'),
(4, 'Unable to maintain work life balance'),
(5, 'Hostile work environment');





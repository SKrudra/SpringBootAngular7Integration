export const requestStatusMap: Map<string, string> = new Map<string, string>();
requestStatusMap.set('OPEN', 'OPEN');
requestStatusMap.set('PENDING', 'PENDING');
requestStatusMap.set('APPROVED', 'APPROVED');
requestStatusMap.set('REJECTED', 'REJECTED');
requestStatusMap.set('INACTIVATED', 'INACTIVATED');

export const loginDetailRoleMap: Map<string, string> = new Map<string, string>();
loginDetailRoleMap.set('EMPLOYEE', 'EMPLOYEE');
loginDetailRoleMap.set('MANAGER', 'MANAGER');

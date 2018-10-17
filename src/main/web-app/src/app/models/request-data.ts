import {Employee} from './employee';
export class RequestData {

  id: number;
  employee: Employee;
  description: string;
  status: string;
  comment: string;
  startDtm: Date;
  tentativeEndDtm: Date;
}

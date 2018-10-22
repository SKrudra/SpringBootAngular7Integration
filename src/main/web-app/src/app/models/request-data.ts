import { Employee } from './employee';
import { Reason } from './reason'

export class RequestData {

  id: number;
  employee: Employee;
  description: string;
  status: string;
  comment: string;
  startDtm: Date;
  tentativeEndDtm: Date;
  reasons: Reason[];
}

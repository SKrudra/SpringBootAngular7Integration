import {RequestData} from './request-data';
import {LoginDetail} from './login-detail';
export class Employee{
   id:number;
   firstName:string;
   lastName:string;
   mgrId:number;
   designation:string;
   department:string;
   img:Blob;
   loginDetail:LoginDetail;
   request:RequestData[];
}
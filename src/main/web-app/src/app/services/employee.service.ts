import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private requestEmployeeUrl = '/api/emp/';
   private requestEmployeeManagerUrl = '/api/empMgr/';

  constructor(private http: HttpClient) { }

  getEmployee(empId: number): Observable<Employee> {
    return this.http.get<Employee>(this.requestEmployeeUrl + `${empId}` );
  }

  getEmployeeManager(empId: number): Observable<Employee> {
    return this.http.get<Employee>(this.requestEmployeeManagerUrl + `${empId}` );
  }
  
}

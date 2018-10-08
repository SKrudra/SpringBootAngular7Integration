import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import{RequestData} from '../models/request-data';
import{Employee} from '../models/employee';
import { requestStatusMap } from '../constants';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RequestService{
  
  private requestsUrl = '/api/requests/';
  private empRequestUrl = '/api/emp/requests/';
  private requestUrl = '/api/request/';
  constructor(private http: HttpClient) { }

  getRequests(empId:number):Observable<RequestData[]>{
    return this.http.get<RequestData[]>(this.requestsUrl+`${empId}`)
    .pipe(
      tap(result=>console.log("inside getRequests"+result)),
      catchError(this.handleError('getRequest', []))
    );
  }

  addRequest(empId:number,requestDescription :string):Observable<RequestData>{
    let request = new RequestData();
    let employee = new Employee();
    employee.id=empId;
    request.employee=employee;
    request.requestDescription = requestDescription;
    request.requestStatus='OPEN';
    request.comment="NA";
    console.log(request);
    console.log("before post");
    return this.http.post<RequestData>(this.requestUrl,request).
    pipe(
      tap(result=>console.log("inside addRequest"+result)),
      catchError(this.handleError('getRequest', request))
    );
    
  }

  getRequestsForEmployee(empId:number):Observable<RequestData>{
    return this.http.get<RequestData>(this.empRequestUrl+`${empId}`)
    .pipe(
      tap(result=>console.log("inside getRequestsForEmployee"+result)),
      catchError(this.handleError('getRequestsForEmployee',new RequestData()))
    );
  }



  updateRequest(updateRequest:RequestData):Observable<RequestData>{
    let request = new RequestData();
    request = updateRequest;
    // request.id=reqId;
    // request.requestStatus=reqStatus;
    // if(reqComment!=null)
    //   request.requestDescription = reqComment;
    return this.http.put<RequestData>(this.requestUrl,request)
    .pipe(
      tap(result=>console.log("inside updateRequest"+result)),
      catchError(this.handleError('updateRequest', request))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}

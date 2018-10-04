import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import{RequestData} from '../models/request-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RequestService{
  
  private requestsUrl = 'api/requests/';
  private requestUrl = 'api/request/';
  constructor(private http: HttpClient) { }

  getRequests(empId:number):Observable<RequestData[]>{
    return this.http.get<RequestData[]>(this.requestsUrl+`${empId}`)
    .pipe(
      tap(result=>console.log("inside service"+result)),
      catchError(this.handleError('getRequest', []))
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

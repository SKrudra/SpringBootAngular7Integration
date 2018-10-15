import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDetail } from './models/login-detail';
import { Observable,of} from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import {SecurityContext} from './security-context';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = "/api/signin";
  constructor(private http: HttpClient) { }

  authenticate(loginDetail:LoginDetail):Observable<SecurityContext>{
    return this.http.post<SecurityContext>(this.loginUrl,loginDetail,httpOptions).pipe(
      tap(sc=>console.log(sc)),
      catchError(this.handleError('authenticate', null))
    );
  }

  isLoggedIn():Boolean{
    return !!localStorage.getItem('SRM_USER');
  }

  getToken():string{
    return localStorage.getItem('SRM_USER');
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

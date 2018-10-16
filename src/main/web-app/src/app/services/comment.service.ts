import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentUrl = '/api/request/comment/';

  constructor(private http: HttpClient) { }

  addComment(requestId: number, content: string, role: string): Observable<Comment> {
    const comment = new Comment();
    comment.requestId = requestId;
    comment.content = content;
    comment.role = role;
    return this.http.post<Comment>(this.commentUrl, comment);
  }

  getCommentsForRequest(requestId: number): Observable<Comment[]> {
    return this.http.get<Comment[]> (this.commentUrl + `${requestId}`)
    .pipe(
      catchError(this.handleError('getCommentsForRequest', []))
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

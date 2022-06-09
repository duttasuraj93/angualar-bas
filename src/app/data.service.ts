import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get('https://jsonplaceholder.typicode.com/users', httpOptions)
    .pipe(catchError((error) => {
      console.log(error)
      return throwError(() => new Error('error here'))
    }))
  }
}

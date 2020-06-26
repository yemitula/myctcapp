import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
 
  myMethod() {
    return console.log("Hello, what's up!");
  }

  getBooks() {
    return this.http.get('https://super-crud.herokuapp.com/books');
  }
}

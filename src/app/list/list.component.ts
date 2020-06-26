import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: any[] = [];

  constructor(
    private _http: HttpService
  ) { }

  ngOnInit(): void {
    this._http.myMethod();

    // get list of books from api
    this._http.getBooks().subscribe((data: any) => {
      console.log('data from books api', data);
      this.books = data.books; //the books array that is inside the data object
    });
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../model/Book.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  book: Book;
  books: Observable<Book[]>;

  constructor(private http: Http) {}

  //generate random id 
  randomID() { 
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }

  // get data and set array of books
  getBooks() {
    //get data with http
    this.books =this.http.get('../../assets/data.json').pipe(map(
      (response: Response) => {
        let data = response.json();
        
        //give id to books
        data.forEach(book => {
          book.id = this.randomID();
        });  
        //console.log(data)     //work!!
        return data
      }
    ))
    
    return this.books
        
  }

  editBook(book: Book) {
    //check if sure to delete
    //get new data
    //edit book by id
    //return to homepage
  }

}

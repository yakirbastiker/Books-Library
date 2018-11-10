import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Book } from '../../model/Book.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[]; //list of books
  @Output() editBookToParent: EventEmitter<Book> = new EventEmitter<Book>();//send data to edit component through app component(parent component) before make change
  isload: boolean = true; // for spinner

  constructor(
    private flashMessage: FlashMessagesService,
    private dataService: DataService
  ) { }




  ngOnInit() {
    setTimeout(() => {
      //get data from service
      this.dataService.getBooks().subscribe(book => {
        this.books = book;
      });
      this.isload = false; //remove spinner
    }, 2000);
  }

  onEdit(book: Book) {
    this.editBookToParent.emit(book);
  }

  onDelete(book: Book) {

    //alert if sure to delete
    if (confirm(`are you sure ???`)) {
      //delete book by id 
      let index = this.books.map(item => { return item.id }).indexOf(book.id);
      this.books.splice(index, 1);
    }

  }

  //call from the perant component
  addBook(book: Book) {

    //generate id
    book.id = this.dataService.randomID();
    //remove all special characters
    book.title = this.dataService.changeTitle(book.title).trim();



    //check existing title
    let titleArray: string[] = this.books.map(item => {
      return this.dataService.changeTitle(item.title).trim()
    });
    let hasBookTitle:boolean =   titleArray.some(i=> i== book.title);    
    
    if (hasBookTitle || undefined) {
      //show error message 
      this.flashMessage.show('title allready exist, please choose another title', {
        cssClass: 'alert alert-error', timeout: 3000
      });
    } else {
      //add new book
      this.books.push(book);


      //show success message move to home component
      this.flashMessage.show('New Book added', {
        cssClass: 'alert alert-success', timeout: 3000
      });
    }
  }
}

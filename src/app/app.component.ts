import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from './model/Book.model';
import { HomeComponent } from './components/home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showAddNewBookPopup: boolean = false; //show popup add new book component
  showEditPopup: boolean =false; //show popup edit component
  edit: Book;
  @ViewChild(HomeComponent) home; // to call add book from home component
  constructor() {

  }

  ngOnInit() {
    
  }

  showPopup(){
    this.showAddNewBookPopup = true;
    
  }

  closeNewBookPopup() {
    this.showAddNewBookPopup = false;
  }

  closeEditPopup() {
    this.showEditPopup =false;
  }

  addNewBook(book: Book){

    this.home.addBook(book);   
  }

  editBookFromParent(book: Book) {
    this.edit = book;
    //show popup
    this.showEditPopup = true;
  }

  editBook(book: Book) {
    
    this.showEditPopup = false;
  }
}

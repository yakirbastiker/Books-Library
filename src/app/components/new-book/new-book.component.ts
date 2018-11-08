import { Component, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Book } from '../../model/Book.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  @Output()  closeClicked: EventEmitter<boolean> = new EventEmitter<boolean>();//close popup

  @Output()  newBookToParent: EventEmitter<Book> = new EventEmitter<Book>(); //save data of new book

  @ViewChild('addNewBook') form: any;// get data from form
  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  clickOnClose() {
    this.closeClicked.emit(true);
  }


  onSubmit({value, valid}: {value: Book, valid: boolean}) {
    
    if(!valid){
      //show error message
      this.flashMessage.show('please fill the form correctly',{
        cssClass:'alert alert-error', timeout: 3000
      });
    }else{
      //send data to save new book
      this.newBookToParent.emit(value);

      // close popup
      this.clickOnClose();
    }    
  }


}

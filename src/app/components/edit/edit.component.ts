import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Book } from '../../model/Book.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() editBook: Book;// the book that edit
  @Output()  closeEditClicked: EventEmitter<boolean> = new EventEmitter<boolean>();//close popup
  @Output()  editBookToParent: EventEmitter<Book> = new EventEmitter<Book>();


  constructor(private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }  

  clickOnClose() {
    this.closeEditClicked.emit(true);
  }

  onSubmit({value, valid}: {value: Book, valid: boolean}) {
    
    if(!valid){
      //show error message
      this.flashMessage.show('please fill the form correctly',{
        cssClass:'alert alert-error', timeout: 3000
      });
    }else{

      //console.log(value)
      //send data to save new book
      this.editBookToParent.emit(value);
      // close popup
      this.clickOnClose();
  }
}
}

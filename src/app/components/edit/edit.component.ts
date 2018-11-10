import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Book } from '../../model/Book.model';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() editBook: Book;// the book that edit
  @Output()  closeEditClicked: EventEmitter<boolean> = new EventEmitter<boolean>();//close popup
  @Output()  editBookToParent: EventEmitter<Book> = new EventEmitter<Book>();//book after edit


  constructor(
    private flashMessage: FlashMessagesService,
    private dataService: DataService
  ) { }

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

      //remove all special characters
      console.log(value.title);
      value.title = this.dataService.changeTitle(value.title);
      console.log(value.title);
      //send data to save edit book
      this.editBookToParent.emit(value);
      // close popup
      this.clickOnClose();
  }
}
}

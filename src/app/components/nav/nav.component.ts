import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output()  btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>(); //for show add new book

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    
    this.btnClicked.emit(true);
  }

}

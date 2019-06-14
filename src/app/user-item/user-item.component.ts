import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  export class UserItemComponent implements OnInit {
    public users=[
    {name: 'Aruzhan'},
     ];
    @Output() userSelected: EventEmitter<any> = new EventEmitter();
    constructor() { }

  ngOnInit() {
  }
  selectUser(){
    this.userSelected.emit();
}

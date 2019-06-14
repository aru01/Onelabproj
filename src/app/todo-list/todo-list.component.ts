import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo:string;
  todos:any;
  todoObj:any;
  constructor() { }

  ngOnInit(): void{
    this.newTodo = '';
    this.todos = [];
  }

  onButtontClick(event){
    console.log(event);
  }
  addTodo(event){
    console.log(event);
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
      this.todos.push(this.todoObj);
      this.newTodo = "";
    
  }
  deleteTodo(index){}
}

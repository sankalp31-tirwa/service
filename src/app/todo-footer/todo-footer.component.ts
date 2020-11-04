import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {


  constructor( private todoService : TodoService ) { }

  
 todoList : string[] = [];
  

  ngOnInit(): void {
    this.todoList = this.todoService.todoList;
  }

}

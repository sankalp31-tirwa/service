import { Component,  OnInit  } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {



  constructor(private todoService : TodoService ) { }

  todoList : any;
  deleteItem : any;

  ngOnInit(): void {
    this.todoList = this.todoService.todoList;
    this.deleteItem = this.todoService.deleteItem;
  }

  

}

import { Component, OnInit} from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor( private todoService : TodoService ) { }

  item : string;
  handleInput : any;
  handleClick : any;
  todoList : string[] =[];

  ngOnInit(): void {
    this.item = this.todoService.item;
    this.handleInput = this.todoService.handleInput;
    this.todoList = this.todoService.todoList;
    this.handleClick = this.todoService.handleClick;


  }

}

import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  todoInfo: TodoItem;

  constructor() { 
    this.todoInfo = new TodoItem();
    this.todoInfo.id = 1;
    this.todoInfo.content = 'Play game LOL';
  }
}

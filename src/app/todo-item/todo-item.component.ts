import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  todoInfo: TodoItem = {
    id: 1,
    content: 'Play game LOL',
    todoDate: new Date(2018, 8, 29)
  };

  constructor() { }

  ngOnInit() {
  }

  todoDateChange(date: Date) {
    if(date != null)
      this.todoInfo.todoDate = date;
  }
}

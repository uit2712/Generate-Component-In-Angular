import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { TODO_LIST } from './mock-todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[] = TODO_LIST;

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  todos = [
    { label: 'Bring Milk', done: false, priority: 3 },
    { label: 'Pay Mobile Bill', done: true, priority: 2 },
    { label: 'Clean House', done: false, priority: 2 },
    { label: 'Feed Cat', done: true, priority: 1 },
  ];

  newTodo?: { label: string; done: boolean; priority: number };

  addTodo(newTodoLabel: string) {
    this.newTodo = { label: newTodoLabel, done: false, priority: 2 };
    this.todos.push(this.newTodo);
  }
}

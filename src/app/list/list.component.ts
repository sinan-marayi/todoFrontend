import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private api: ApiService) {
    this.getAllTodos();
  }

  todos: any = [];
  alltodos: any = [];
  filter: any = 'all';

  getAllTodos() {
    this.api.getAllTodos().subscribe((data) => {
      this.alltodos = data.data;
      this.todos = this.alltodos
    });
  }

  deleteTodo(id: any) {
    const result = confirm('Are you sure you want to delete this todo?');
    if (!result) {
      return;
    }
    this.api.deleteTodo({ id: id }).subscribe((data) => {
      this.getAllTodos();
    });
  }

  updateStatus(id: any, status: any) {
    this.filter= 'all'
    const data = {
      id: id,
      status: status === 'pending' ? 'completed' : 'pending',
    };
    this.api.updateStatus(data).subscribe((data) => {
      this.getAllTodos();
    });
  }

  filterTodos() {
    this.todos = this.alltodos.filter((todo: any) => {
      if (this.filter === 'all') {
        return true;
      } else if (this.filter === 'pending') {
        return todo.status === 'pending';
      } else {
        return todo.status === 'completed';
      }
    })
  }
}

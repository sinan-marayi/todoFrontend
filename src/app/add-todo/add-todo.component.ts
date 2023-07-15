import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  constructor(private api:ApiService, private router:Router) { }
  name: any = '';

  addTodo() {
    const data = {
      name: this.name,
      status: 'pending'
    }
    this.api.addNew(data).subscribe((data)=>{
      this.name = '';
      this.router.navigate(['/'])
    })
  }
}

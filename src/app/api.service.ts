import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { 

  // get all todos
  }
  getAllTodos(){
    return this.http.get<any>("http://localhost:5000/todo/getTodos");
  }

  // delete a todo
  deleteTodo(id:any){
    return this.http.post<any>("http://localhost:5000/todo/deleteTodo",id);
  }

  // update todo status
  updateStatus(data:any){
    return this.http.put<any>("http://localhost:5000/todo/updateTodo",data);
  }

  // add new todo
  addNew(data:any){
    return this.http.post<any>("http://localhost:5000/todo/addTodo",data);
  }
}

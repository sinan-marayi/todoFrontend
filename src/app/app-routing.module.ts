import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  {path:"", component:ListComponent},
  {path:"addTodo", component:AddTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

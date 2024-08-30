import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoAppComponent } from './components/to-do-app/to-do-app.component';

const routes: Routes = [
  { path: 'to-do', component: ToDoAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

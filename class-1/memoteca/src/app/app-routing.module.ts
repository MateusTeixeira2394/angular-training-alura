import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/thought/form/form.component';
import { ListComponent } from './components/thought/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'thoughts/list',
    pathMatch: 'full'
  },
  {
    path: 'thoughts/list',
    component: ListComponent
  },
  {
    path: 'thoughts/form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { FormEditComponent } from './components/thought/form-edit/form-edit.component';
import { ExclusionComponent } from './components/thought/exclusion/exclusion.component';
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
  },
  {
    path: 'thoughts/delete/:id',
    component: ExclusionComponent
  },
  {
    path: 'thoughts/edit/:id',
    component: FormEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

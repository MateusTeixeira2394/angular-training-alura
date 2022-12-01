import { ROUTE_THOUGHT_FORM, ROUTE_THOUGHT_DELETE, ROUTE_THOUGHT_EDIT } from '../constants/tought/routes.constants';
import { FormEditComponent } from './components/thought/form-edit/form-edit.component';
import { ExclusionComponent } from './components/thought/exclusion/exclusion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/thought/form/form.component';
import { ListComponent } from './components/thought/list/list.component';
import { ROUTE_THOUGHT_LIST } from '../constants/tought/routes.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_THOUGHT_LIST,
    pathMatch: 'full'
  },
  {
    path: ROUTE_THOUGHT_LIST,
    component: ListComponent
  },
  {
    path: ROUTE_THOUGHT_FORM,
    component: FormComponent
  },
  {
    path: ROUTE_THOUGHT_DELETE,
    component: ExclusionComponent
  },
  {
    path: ROUTE_THOUGHT_EDIT,
    component: FormEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

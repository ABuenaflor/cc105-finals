import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { AuthComponent } from './auth/auth.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'datatable',component:DatatableComponent},
  {path:'data-edit',component:DataEditComponent},
  {path:'header',component:HeaderComponent},
  {path:'data-edit/:index',component:DataEditComponent},
  {path: 'auth', component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

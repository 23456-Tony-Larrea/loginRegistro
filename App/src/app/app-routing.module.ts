import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}   from "./login/login.component";
import {RegistrarComponent} from "./registrar/registrar.component";
import {OlvidoComponent} from './olvido/olvido.component'
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:"registro",component:RegistrarComponent},
  {path:"olvidoC",component:OlvidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

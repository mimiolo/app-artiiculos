import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CargarArticulosComponent } from './componentes/cargar-articulos/cargar-articulos.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'registro',component:RegistroComponent},
 {path:'articulo',component:CargarArticulosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
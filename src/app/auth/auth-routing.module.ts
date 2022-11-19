import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes=[

{
  path:'',
  children:[
  {  path:'Login',
    component:LoginComponent
  },
  {
    path:'Registro',
    component:RegistroComponent
  },
  {
    path:'**',
    redirectTo:'Login'
  }
  ]
}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }

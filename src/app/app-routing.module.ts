import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes=[
  {
path:'',
loadChildren:() => import('./auth/auth.module').then(m =>m.AuthModule)
  },

  {
    path:'404',
    component:ErrorPageComponent

  },
  {
    path:'**',
    component:ErrorPageComponent
  }
]


@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

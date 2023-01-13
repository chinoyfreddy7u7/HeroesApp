import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';



const rutas: Routes=[
  {
    path:'',
    component:HeroesHomeComponent,
    children:[
{
  path:'listado',
  component:ListadoComponent
},
{
  path:'agregar',
  component:AgregarComponent
},
{
  path:'buscar',
  component:BuscarComponent
},
{
  path:'editar/:id',
  component:AgregarComponent
},

{
  path:':id',
  component:HeroeComponent
},
{
  path:'**',
  redirectTo:'listado'
}

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
  
})
export class HeroesRoutingModule { }

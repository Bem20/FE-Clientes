import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { VerClientesComponent } from './components/ver-clientes/ver-clientes.component';
import { PaisComponent } from './components/pais/pais.component';

const routes: Routes = [
  {path:'', redirectTo:'ListaClientes', pathMatch:'full'},
  {path: 'ListaClientes', component: ListadoClientesComponent},
  {path: 'AgregarEditar', component: AgregarEditarComponent},
  {path: 'ListaPaises', component: PaisComponent},
  {path: 'VerCliente/:id', component: VerClientesComponent},
  {path: 'EditarCliente/:id', component: AgregarEditarComponent},
  {path:'**', redirectTo:'ListaClientes', pathMatch:'full'} //Siempre tiene que estar ultimo en la lista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

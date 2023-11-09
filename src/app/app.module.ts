import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { SharedModule } from './shared/shared.module';

//Componentes
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';
import { VerClientesComponent } from './components/ver-clientes/ver-clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisComponent } from './components/pais/pais.component';
import { SplitStringPipe } from 'src/app/shared/split-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComponent,
    ListadoClientesComponent,
    VerClientesComponent,
    PaisComponent,
    SplitStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

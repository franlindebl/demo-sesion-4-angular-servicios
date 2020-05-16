import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BotonesContadorComponent } from './components/botones-contador/botones-contador.component';
import { PantallaContadorComponent } from './components/pantalla-contador/pantalla-contador.component';
import { ContadorService } from './services/contador/contador.service';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  // Declaración de componentes creados por este modulo
  declarations: [
    AppComponent,
    BotonesContadorComponent,
    PantallaContadorComponent,
    UserListComponent
  ],
  // Importaciones de otros módulos
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  // Declaración de servicios (angular services)
  providers: [
    ContadorService,
  ],
  // Componente inicial de la app
  bootstrap: [AppComponent]
})
export class AppModule { }

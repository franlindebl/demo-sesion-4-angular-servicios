import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotonesContadorComponent } from './components/botones-contador/botones-contador.component';
import { PantallaContadorComponent } from './components/pantalla-contador/pantalla-contador.component';
import { ContadorService } from './services/contador/contador.service';

@NgModule({
  declarations: [
    AppComponent,
    BotonesContadorComponent,
    PantallaContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ContadorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

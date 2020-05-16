import { Component, OnInit } from '@angular/core';
import {
  ContadorService,
  CountersData,
} from 'src/app/services/contador/contador.service';

@Component({
  selector: 'app-pantalla-contador',
  templateUrl: './pantalla-contador.component.html',
  styleUrls: ['./pantalla-contador.component.scss']
})
export class PantallaContadorComponent implements OnInit {
  public currentCountValue: CountersData = null;

  constructor(public contadorService: ContadorService) {
    this.currentCountValue = this.contadorService.countersInfo;

    // Cada 3 segundos recupero el valor del service
    // GUARRADA: NO HACER xD
    // setInterval(() => {
    //   this.currentCountValue = this.contadorService.currentCounter;
    // }, 3000);
  }

  ngOnInit(): void {
  }

}

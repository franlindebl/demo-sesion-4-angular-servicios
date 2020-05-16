import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador/contador.service';

@Component({
  selector: 'app-botones-contador',
  templateUrl: './botones-contador.component.html',
  styleUrls: ['./botones-contador.component.scss']
})
export class BotonesContadorComponent implements OnInit {

  constructor(public contadorService: ContadorService) { }

  ngOnInit(): void {
  }

  public addNumberToCounterGeneral(count: number){
    this.contadorService.addToCounterGeneral(count);
  }

  public addNumberToCounterStudents(count: number){
    this.contadorService.addToCounterStudents(count);
  }

  public addNumberToCounterTeachers(count: number){
    this.contadorService.addToCounterTeachers(count);
  }
}

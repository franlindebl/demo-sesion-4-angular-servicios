import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  // Valor actual de los contadores
  public countersInfo: CountersData = {
    general: 99,
    students: 0,
    teachers: 0
  };

  constructor() {
  }

  // Función para añadir al contador general
  public addToCounterGeneral(count: number) {
    this.countersInfo.general = this.countersInfo.general + count;
  }

  // Función para añadir al contador teachers
  public addToCounterTeachers(count: number) {
    this.countersInfo.teachers = this.countersInfo.teachers + count;
  }

  // Función para añadir al contador students
  public addToCounterStudents(count: number) {
    this.countersInfo.students = this.countersInfo.students + count;
  }


  // Función para añadir a un contador genérico
  public addToCounterGeneric(count: number, counterName: string) {
    this.countersInfo[counterName] = this.countersInfo[counterName] + count;
    // this.countersInfo.general <-- LO MISMO --> this.countersInfo['general']
  }
}

export interface CountersData {
  general: number;
  students: number;
  teachers: number;
}

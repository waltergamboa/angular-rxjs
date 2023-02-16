import { BehaviorSubject, Observable } from 'rxjs';

import { Alumno } from '../models/alumnos.model';
import { Injectable } from '@angular/core';
import {faker} from "@faker-js/faker/locale/es";

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos$!: BehaviorSubject<Alumno[]>;
  private alumnos: Alumno[] = [];

  constructor() {
    this.agregarAlumnos(3);
    this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
   }

  agregarAlumnos(cantidad: number): void {
    for (let index = 0; index < cantidad; index++) {
    const alumno = this.generarAlumno();
    this.alumnos.push(alumno)
    this.alumnos$?.next(this.alumnos)
    }
  }

  obtenerAlumnos(): Alumno[] {
    return this.alumnos;
  }

  obtenerAlumnosPromise(): Promise<Alumno[]>{
    return new Promise((resolve, reject) => {
      if(this.alumnos.length > 0 ){
        resolve(this.alumnos);
      } else {
        reject([]);
      }
    })
  }

  obtenerAlumnosObservable(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  generarAlumno(): Alumno {
    let nombre: string = faker.name.firstName("male");
    let apellido: string = faker.name.lastName("male");

    let alumno = new Alumno(
      nombre,
      apellido,
      faker.address.streetAddress(true),
      faker.internet.email(nombre, apellido),
      faker.phone.number(),
      faker.phone.number()
    )

    return alumno;
  }

}


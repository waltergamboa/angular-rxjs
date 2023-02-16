import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, of } from 'rxjs';

import { Alumno } from '../../models/alumnos.model';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit, OnDestroy {
  alumnos!: Alumno[];
  alumnosFiltrado!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  filtro: string = '';

  suscripcion!: Subscription;
  constructor(private alumnoService: AlumnoService){

  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  
  ngOnInit(): void {
   this.alumnos = this.alumnoService.obtenerAlumnos();
     
     this.suscripcion = this.alumnoService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[])=>{
      this.alumnos = alumnos;
     })

    //this.suscripcion = this.alumnoService.obtenerAlumnosObservable();

    this.alumnos$ = this.alumnoService.obtenerAlumnosObservable();


  }

  agregarAlumno(): void{
    this.alumnoService.agregarAlumnos(1);
  }

  filtrarAlumnos(): void {
    of(this.alumnos).pipe(
      map((alumnos: Alumno[])=>{
        return alumnos.filter((alumno: Alumno) => alumno.correo.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()));
      })
    ).subscribe((alumnos)=>{
      this.alumnosFiltrado = alumnos;
      console.log(this.alumnosFiltrado);
    })
  }

}

import { AlumnosListaComponent } from './components/alumnos-lista/alumnos-lista.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlumnosListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LABORATORIO IV';
  variableInput = "";

  num1:number = 0;
  num2:number = 0;
  res:number = 0;

  edad1:number = 0;
  edad2:number = 0;
  promedio:number = 0;
  suma:number = 0;


  imagen:string = "../assets/gato.png";

  cambiarTitulo(titulo: string){
    this.title = titulo;

  }

  sumar(){
    this.res = Number(this.num1) + this.num2;
  }

  calcular(){
    this.promedio = (this.edad1 + this.edad2) /2;
    this.suma = this.edad1 + this.edad2;
  }

  limpiar(){
    this.promedio = 0;
    this.suma = 0;
  }
}

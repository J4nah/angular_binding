import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  operacao: string = '+';
  resultado: number = 0;

  calcular() {
    switch (this.operacao) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.scss'
})
export class ApoliceSeguroComponent {
  segurado = {
    nome: '',
    sexo: 'masculino',
    idade: 0,
    valorAutomovel: 0
  };
  valorApolice: number | null = null;

  calcularApolice() {
    if (this.segurado.sexo === 'masculino') {
      this.valorApolice = this.segurado.idade <= 25 
        ? this.segurado.valorAutomovel * 0.15 
        : this.segurado.valorAutomovel * 0.10;
    } else {
      this.valorApolice = this.segurado.valorAutomovel * 0.08;
    }
  }
}

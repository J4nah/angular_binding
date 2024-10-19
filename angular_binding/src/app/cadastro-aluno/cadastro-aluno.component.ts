import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent {
  aluno = {
    ra: '',
    nome: '',
    email: '',
    celular: ''
  };
  alunoCadastrado: boolean = false;

  cadastrarAluno() {
    this.alunoCadastrado = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../../../shared/titulo/titulo.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationField } from '../../../helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  imports: [TituloComponent, ReactiveFormsModule, CommonModule]
})
export class PerfilComponent implements OnInit {
  [x: string]: any;

  form!: FormGroup;

  constructor(
    public fb: FormBuilder
  ) { }

  get f(): any{
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void{
    const formOptions = {
      validators: ValidationField.MustMatch('senha', 'confirmarSenha')
    };

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      funcao: ['', Validators.required],
      descricao: [''],
      senha: ['', [Validators.minLength(8), Validators.nullValidator]],
      confirmarSenha: ['', Validators.nullValidator],
    }, formOptions);
  }

  public resetForm(): void{
    this.form.reset();
  }
}

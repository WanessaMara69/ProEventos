import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ValidationField } from '../../../helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {

  form! : FormGroup;

  constructor(
    public fb: FormBuilder
  ){}

  get f(): any {
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
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      userName: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmarSenha: ['', Validators.required],
    }, formOptions);
  }
  
}

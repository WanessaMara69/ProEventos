import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './evento-detalhe.component.html',
  styleUrl: './evento-detalhe.component.scss'
})
export class EventoDetalheComponent implements OnInit{

  form!: FormGroup;

  get f(): any{
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder
  ){}
  
  ngOnInit(): void {
    this.validation();
      
  }

  public validation(): void{
    this.form = this.fb.group({
      local: ['', Validators.required],
      tema: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      dataEvento: ['', Validators.required],
      qntPessoas: ['', [Validators.required, Validators.max(120000)]],
      imagemURL: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public resetForm(): void{
    this.form.reset();
  }



}

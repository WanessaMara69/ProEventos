import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventoService } from '../../../services/evento.service';
import { Evento } from '../../../models/Evento';
import { MatSnackBar } from '@angular/material/snack-bar';


defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-evento-detalhe',
  imports: [ReactiveFormsModule, CommonModule, BsDatepickerModule],
  templateUrl: './evento-detalhe.component.html',
  styleUrl: './evento-detalhe.component.scss',
})
export class EventoDetalheComponent implements OnInit{

  evento = {} as Evento;
  form!: FormGroup;
  isAnimated = true;
  adaptivePosition = true;

  get f(): any{
    return this.form.controls;
  }

  get bsConfig(): any{
    return {isAnimated: true, 
      containerClass: 'theme-default', 
      adaptivePosition: true, 
      dateInputFormat: 'DD/MM/YYYY HH:mm a',
      showWeekNumbers: false};  
  }

  constructor(
    private fb: FormBuilder,
    private localeService: BsLocaleService,
    private router: ActivatedRoute,
    private eventoService: EventoService,
    private snackBar: MatSnackBar,
    )
    {
      this.localeService.use('pt-br');
    }
  
  ngOnInit(): void {
    this.carregarEvento();
    this.validation();
      
  }

  public carregarEvento(): void{
    const eventoIdParam = this.router.snapshot.paramMap.get('id');

    if(eventoIdParam !== null){
      this.eventoService.getEventoById(+eventoIdParam).subscribe({
        next: (evento: Evento) => {
          this.evento = {...evento};
          this.form.patchValue(this.evento);
        },
        error: (error: any) => {
          this.snackBar.open('❌ Erro ao tentar carregar eventos.', '', {
            duration: 3000,
            horizontalPosition: 'end',
            panelClass: ['snackbar-error'],
          });
          console.error(error);
        },
        complete: () => {},
    });

    }
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

  public cssValidator(campoForm: FormControl): any{
    return {'is-invalid' : campoForm.errors && campoForm.touched};
  }



}

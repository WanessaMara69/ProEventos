import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../../../models/Evento';
import { EventoService } from '../../../services/evento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DateTimeFormatPipe } from '../../../helpers/DateTimeFormat.pipe';
import { TituloComponent } from '../../../shared/titulo/titulo.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  imports: [CommonModule, CollapseModule, HttpClientModule, FormsModule, DateTimeFormatPipe, TooltipModule,
      BsDropdownModule, RouterLink],
  templateUrl: './evento-lista.component.html',
  styleUrl: './evento-lista.component.scss'
})
export class EventoListaComponent implements OnInit {
  [x: string]: any;
  modalRef!: BsModalRef;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public larguraImagem: number = 150;
  public margemImagem: number = 2;
  public exibirImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }
  
  public filtrarEventos(filtrarPor: string): Evento[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getEventos();
    
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {

    const observer ={
      next: (eventos: Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos;
      },
      error: (error : any) => {
        console.log(error);
        this.snackBar.open('❌ Erro ao carregar eventos. Tente novamente.', '', {
          duration: 3000,
          horizontalPosition: 'end',
          panelClass: ['snackbar-error'],
        })
      },
    };

    this.eventoService.getEventos().subscribe(observer);
  }

  openModal(template: TemplateRef<void>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
 
  confirm(): void {
    this.modalRef?.hide();
    this.snackBar.open('✅ Evento deletado com sucesso.', '', {
      duration: 3000,
      horizontalPosition: 'end',
      panelClass: ['snackbar-success']
    });
  }
 
  decline(): void {
    this.modalRef?.hide();
    this.snackBar.open('⚠️ Evento não deletado.', '', {
      duration: 3000,
      horizontalPosition: 'end',
      panelClass: ['snackbar-warning']
    })
  }

  detalheEvento(id : number): void{
    this.router.navigate([`eventos/detalhe/${id}`]);
  }

}

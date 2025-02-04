import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { DateTimeFormatPipe } from "../../helpers/DateTimeFormat.pipe";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TituloComponent } from "../../shared/titulo/titulo.component";


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, CollapseModule, HttpClientModule, FormsModule, DateTimeFormatPipe, TooltipModule,
    BsDropdownModule, TituloComponent],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  encapsulation: ViewEncapsulation.None
  }
)

export class EventosComponent implements OnInit {
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
        this.snackBar.open('❌ Erro ao carregar eventos. Tente novamente.', 'Fechar', {
          duration: 2000,
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
}
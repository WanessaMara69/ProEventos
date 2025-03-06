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
import { Router, RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Importe o MatProgressBarModule

@Component({
  selector: 'app-evento-lista',
  standalone: true,
  imports: [
    CommonModule, 
    CollapseModule, 
    HttpClientModule, 
    MatProgressBarModule, 
    FormsModule, 
    DateTimeFormatPipe, 
    TooltipModule,
    BsDropdownModule, 
    RouterLink,  ],
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {
  modalRef!: BsModalRef;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public larguraImagem = 150;
  public margemImagem = 2;
  public exibirImagem = true;
  public eventoId = 0;
  private _filtroLista = '';
  isLoading = false;
  isLoadingBar = false;

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarEventos();
  }

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLowerCase();
    return this.eventos.filter(
      (evento) => evento.tema.toLowerCase().includes(filtrarPor) || evento.local.toLowerCase().includes(filtrarPor)
    );
  }

  alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  carregarEventos(): void {
    this.isLoadingBar = true; // Inicia a barra de progresso
    this.eventoService.getEventos().subscribe({
      next: (eventos: Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = [...this.eventos];
      },
      error: (error: any) => {
        console.error(error);
        this.snackBar.open('❌ Erro ao carregar eventos.', '', { duration: 3000 });
      },
      complete: () => {
        this.isLoadingBar = false; // Finaliza a barra de progresso
      }
    });
  }
  

  openModal(event: Event, template: TemplateRef<any>, eventoId: number): void {
    event.stopPropagation();
    this.eventoId = eventoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
 
  confirm(): void {
    this.modalRef?.hide();
    this.isLoading = true;
  
    this.eventoService.deleteEvento(this.eventoId).subscribe({
      next: () => {
        this.eventos = this.eventos.filter(evento => evento.id !== this.eventoId);
        this.eventosFiltrados = [...this.eventos];
  
        this.snackBar.open('✅ Evento deletado com sucesso.', '', {
          duration: 3000,
          horizontalPosition: 'end',
          panelClass: ['snackbar-success']
        });
      },
      error: (error) => {
        console.error(error);
        this.snackBar.open(`❌ Erro ao tentar deletar o evento: ${error.message}`, '', {
          duration: 3000,
          horizontalPosition: 'end',
          panelClass: ['snackbar-error']
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
 
  decline(): void {
    this.modalRef?.hide();
    this.snackBar.open('Evento não deletado.', '', {
      duration: 3000,
      horizontalPosition: 'end',
      panelClass: ['snackbar-info']
    });
  }

  detalheEvento(id: number): void {
    this.router.navigate([`eventos/detalhe/${id}`]);
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, CollapseModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  larguraImagem: number = 150;
  margemImagem: number = 2;
  exibirImagem: boolean = true;
  filtroLista: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {
    this.http.get('https://localhost:7274/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error),
    );
  }
}
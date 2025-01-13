import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent{

  public eventos: any = [];
  widthImg: number = 100;
  marginImg: number = 2;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.getEventos()
  }

  public getEventos(): void{
    this.http.get('https://localhost:7274/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error),
    );
  }


}

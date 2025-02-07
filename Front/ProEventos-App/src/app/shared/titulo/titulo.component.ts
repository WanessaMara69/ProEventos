import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
  imports: [CommonModule]
})
export class TituloComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() iconClass: string = 'fa fa-user';
  @Input() subtitulo: string = 'Desde 2025';
  @Input() botaoListar = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  listar(): void{
    this.router.navigate([`/${this.titulo.toLowerCase()}/lista`]);
  }

}

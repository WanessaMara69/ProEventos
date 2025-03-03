import { Component, OnInit } from '@angular/core';
import { TituloComponent } from "../../shared/titulo/titulo.component";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [TituloComponent, MatProgressSpinner, CommonModule]
})
export class DashboardComponent implements OnInit {

  isLoading: boolean = true; // Inicialmente, o spinner estará visível

  ngOnInit() {
    // Simulação de chamada à API, que leva 3 segundos para completar
    setTimeout(() => {
      this.isLoading = false; // Após 3 segundos, o spinner desaparecerá e o conteúdo será exibido
    }, 3000);
  }
}

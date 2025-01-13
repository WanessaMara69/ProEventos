import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoComponent } from "./navegacao/navegacao.component";
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventosComponent, PalestrantesComponent, CommonModule, HttpClientModule, 
    NavegacaoComponent, CollapseDirective, CollapseModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProEventos-App';
}

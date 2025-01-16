import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoComponent } from "./navegacao/navegacao.component";
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventosComponent, 
    CommonModule, HttpClientModule, 
    NavegacaoComponent, CollapseModule, 
    CollapseDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProEventos-App';
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EventosComponent } from './eventos/eventos.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoComponent } from "./navegacao/navegacao.component";
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventoService } from './services/evento.service';
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import  {  NgxSpinnerModule  }  from  'ngx-spinner' ;
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, 
    NavegacaoComponent,
    CollapseModule, 
    CollapseDirective, 
    EventosComponent, 
    FormsModule, 
    RouterModule, 
    DateTimeFormatPipe,
    TooltipModule,
    BsDropdownModule,
    ModalModule,
    NgxSpinnerModule,
    ToastrModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EventoService, BsModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ProEventos-App';
  isLoading = true;

  constructor(){
    setTimeout(() => 
    {
      this.isLoading = false;
    }, 1000);
  }
}

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
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, CollapseModule, HttpClientModule, FormsModule, DateTimeFormatPipe, TooltipModule,
    BsDropdownModule, TituloComponent, RouterModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  encapsulation: ViewEncapsulation.None
  }
)

export class EventosComponent implements OnInit {
  ngOnInit(): void { }
}
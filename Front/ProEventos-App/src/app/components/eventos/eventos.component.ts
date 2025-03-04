import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TituloComponent } from "../../shared/titulo/titulo.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, CollapseModule, HttpClientModule, FormsModule, TooltipModule,
    BsDropdownModule, TituloComponent, RouterModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  encapsulation: ViewEncapsulation.None
  }
)

export class EventosComponent implements OnInit {

  isLoading = false;

  ngOnInit(): void { }
}
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css'],
  imports: [RouterLink]
})
export class NavegacaoComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }
}
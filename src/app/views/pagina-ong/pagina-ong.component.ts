import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { solicitacoes } from '../../solicitacoes';

@Component({
  selector: 'app-pagina-ong',
  templateUrl: './pagina-ong.component.html',
  styleUrls: ['./pagina-ong.component.css'],
})
export class PaginaOngComponent implements OnInit {
  solicitacoes = solicitacoes;
  // @ts-ignore: Object is possibly 'null'.
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // @ts-ignore: Object is possibly 'null'.
      this.id = +params.get('id');
    });
  }
}

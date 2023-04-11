import { Component } from '@angular/core';

import { solicitacoes } from '../../solicitacoes';

@Component({
  selector: 'app-pesquisa-solicitacao',
  templateUrl: './pesquisa-solicitacao.component.html',
  styleUrls: ['./pesquisa-solicitacao.component.css'],
})
export class PesquisaSolicitacaoComponent {
  solicitacoes = solicitacoes;
}

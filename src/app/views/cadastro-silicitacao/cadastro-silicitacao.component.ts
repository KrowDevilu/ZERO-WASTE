import { Component } from '@angular/core';
@Component({
  selector: 'app-cadastro-silicitacao',
  templateUrl: './cadastro-silicitacao.component.html',
  styleUrls: ['./cadastro-silicitacao.component.css'],
})
export class CadastroSilicitacaoComponent {
  createComponent() {
    const produto = document.getElementById('prod');
    let cloneProduto = produto?.cloneNode(true);
    document.getElementById('produtos')?.appendChild(cloneProduto as Node);
  }
}

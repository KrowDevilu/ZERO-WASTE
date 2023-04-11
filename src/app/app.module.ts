import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TipoUsuarioComponent } from './views/tipo-usuario/tipo-usuario.component';
import { PesquisaSolicitacaoComponent } from './views/pesquisa-solicitacao/pesquisa-solicitacao.component';
import { PaginaOngComponent } from './views/pagina-ong/pagina-ong.component';
import { CadastroSilicitacaoComponent } from './views/cadastro-silicitacao/cadastro-silicitacao.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TipoUsuarioComponent },
      { path: 'pesquisa', component: PesquisaSolicitacaoComponent },
      { path: 'paginaONG/:id', component: PaginaOngComponent },
      { path: 'cadastroSolicitacao', component: CadastroSilicitacaoComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TipoUsuarioComponent,
    PesquisaSolicitacaoComponent,
    PaginaOngComponent,
    CadastroSilicitacaoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

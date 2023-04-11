import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaSolicitacaoComponent } from './pesquisa-solicitacao.component';

describe('PesquisaSolicitacaoComponent', () => {
  let component: PesquisaSolicitacaoComponent;
  let fixture: ComponentFixture<PesquisaSolicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaSolicitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

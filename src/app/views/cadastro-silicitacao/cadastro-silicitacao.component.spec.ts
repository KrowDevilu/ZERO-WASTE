import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSilicitacaoComponent } from './cadastro-silicitacao.component';

describe('CadastroSilicitacaoComponent', () => {
  let component: CadastroSilicitacaoComponent;
  let fixture: ComponentFixture<CadastroSilicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroSilicitacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroSilicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsGerenciamentoEstadoComponent } from './rxjs-gerenciamento-estado.component';

describe('RxjsGerenciamentoEstadoComponent', () => {
  let component: RxjsGerenciamentoEstadoComponent;
  let fixture: ComponentFixture<RxjsGerenciamentoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsGerenciamentoEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsGerenciamentoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

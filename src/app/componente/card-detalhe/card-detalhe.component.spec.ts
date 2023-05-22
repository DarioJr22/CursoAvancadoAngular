import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalheComponent } from './card-detalhe.component';

describe('CardDetalheComponent', () => {
  let component: CardDetalheComponent;
  let fixture: ComponentFixture<CardDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

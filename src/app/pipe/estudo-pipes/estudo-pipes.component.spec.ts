import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoPipesComponent } from './estudo-pipes.component';

describe('EstudoPipesComponent', () => {
  let component: EstudoPipesComponent;
  let fixture: ComponentFixture<EstudoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudoPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

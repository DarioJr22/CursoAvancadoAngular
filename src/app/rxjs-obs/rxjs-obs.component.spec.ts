import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObsComponent } from './rxjs-obs.component';

describe('RxjsObsComponent', () => {
  let component: RxjsObsComponent;
  let fixture: ComponentFixture<RxjsObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

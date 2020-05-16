import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaContadorComponent } from './pantalla-contador.component';

describe('PantallaContadorComponent', () => {
  let component: PantallaContadorComponent;
  let fixture: ComponentFixture<PantallaContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesContadorComponent } from './botones-contador.component';

describe('BotonesContadorComponent', () => {
  let component: BotonesContadorComponent;
  let fixture: ComponentFixture<BotonesContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

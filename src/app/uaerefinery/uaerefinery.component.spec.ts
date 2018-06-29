import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UAERefineryComponent } from './uaerefinery.component';

describe('UAERefineryComponent', () => {
  let component: UAERefineryComponent;
  let fixture: ComponentFixture<UAERefineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UAERefineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UAERefineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

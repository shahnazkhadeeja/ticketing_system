import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartAreaComponent } from './linechart-area.component';

describe('LinechartAreaComponent', () => {
  let component: LinechartAreaComponent;
  let fixture: ComponentFixture<LinechartAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinechartAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

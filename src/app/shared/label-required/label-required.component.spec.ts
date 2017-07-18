import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelRequiredComponent } from './label-required.component';

describe('LabelRequiredComponent', () => {
  let component: LabelRequiredComponent;
  let fixture: ComponentFixture<LabelRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

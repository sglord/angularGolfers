import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGolferFormComponent } from './new-golfer-form.component';

describe('NewGolferFormComponent', () => {
  let component: NewGolferFormComponent;
  let fixture: ComponentFixture<NewGolferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGolferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGolferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

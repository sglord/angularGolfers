import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGolferComponent } from './single-golfer.component';

describe('SingleGolferComponent', () => {
  let component: SingleGolferComponent;
  let fixture: ComponentFixture<SingleGolferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGolferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGolferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringLessonComponent } from './tutoring-lesson.component';

describe('TutoringLessonComponent', () => {
  let component: TutoringLessonComponent;
  let fixture: ComponentFixture<TutoringLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoringLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

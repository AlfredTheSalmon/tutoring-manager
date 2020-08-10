import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectNavigationComponent } from './direct-navigation.component';

describe('DirectNavigationComponent', () => {
  let component: DirectNavigationComponent;
  let fixture: ComponentFixture<DirectNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

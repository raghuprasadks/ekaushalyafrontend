import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecontentmapComponent } from './coursecontentmap.component';

describe('CoursecontentmapComponent', () => {
  let component: CoursecontentmapComponent;
  let fixture: ComponentFixture<CoursecontentmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecontentmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursecontentmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

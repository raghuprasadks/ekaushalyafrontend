import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbannerComponent } from './adminbanner.component';

describe('AdminbannerComponent', () => {
  let component: AdminbannerComponent;
  let fixture: ComponentFixture<AdminbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

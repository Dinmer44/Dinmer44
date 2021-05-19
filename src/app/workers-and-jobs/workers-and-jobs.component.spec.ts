import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersAndJobsComponent } from './workers-and-jobs.component';

describe('WorkersAndJobsComponent', () => {
  let component: WorkersAndJobsComponent;
  let fixture: ComponentFixture<WorkersAndJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersAndJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersAndJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

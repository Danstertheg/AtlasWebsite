import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSoftwareComponent } from './management-software.component';

describe('ManagementSoftwareComponent', () => {
  let component: ManagementSoftwareComponent;
  let fixture: ComponentFixture<ManagementSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

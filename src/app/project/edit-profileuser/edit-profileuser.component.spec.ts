import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileuserComponent } from './edit-profileuser.component';

describe('EditProfileuserComponent', () => {
  let component: EditProfileuserComponent;
  let fixture: ComponentFixture<EditProfileuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProfileuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfileuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

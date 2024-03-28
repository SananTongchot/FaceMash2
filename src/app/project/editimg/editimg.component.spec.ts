import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimgComponent } from './editimg.component';

describe('EditimgComponent', () => {
  let component: EditimgComponent;
  let fixture: ComponentFixture<EditimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditimgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

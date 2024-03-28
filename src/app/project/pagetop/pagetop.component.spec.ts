import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetopComponent } from './pagetop.component';

describe('PagetopComponent', () => {
  let component: PagetopComponent;
  let fixture: ComponentFixture<PagetopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagetopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

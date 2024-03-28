import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgrankingComponent } from './imgranking.component';

describe('ImgrankingComponent', () => {
  let component: ImgrankingComponent;
  let fixture: ComponentFixture<ImgrankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgrankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgrankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

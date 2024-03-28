import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreimgrankComponent } from './preimgrank.component';

describe('PreimgrankComponent', () => {
  let component: PreimgrankComponent;
  let fixture: ComponentFixture<PreimgrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreimgrankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreimgrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

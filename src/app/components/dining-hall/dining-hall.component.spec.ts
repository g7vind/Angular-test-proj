import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningHallComponent } from './dining-hall.component';

describe('DiningHallComponent', () => {
  let component: DiningHallComponent;
  let fixture: ComponentFixture<DiningHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiningHallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiningHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

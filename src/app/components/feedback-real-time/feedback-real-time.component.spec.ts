import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRealTimeComponent } from './feedback-real-time.component';

describe('FeedbackRealTimeComponent', () => {
  let component: FeedbackRealTimeComponent;
  let fixture: ComponentFixture<FeedbackRealTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackRealTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackRealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

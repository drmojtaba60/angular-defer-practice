import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionListComponent } from './suggestion-list.component';

describe('SuggestionListComponent', () => {
  let component: SuggestionListComponent;
  let fixture: ComponentFixture<SuggestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

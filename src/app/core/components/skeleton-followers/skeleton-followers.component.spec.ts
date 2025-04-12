import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonFollowersComponent } from './skeleton-followers.component';

describe('SkeletonFollowersComponent', () => {
  let component: SkeletonFollowersComponent;
  let fixture: ComponentFixture<SkeletonFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonFollowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

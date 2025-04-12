import {Component, signal} from '@angular/core';
import {CardComponent} from '../../core/components/card/card.component';
import {IFollowerModel, IFollowerSimpleModel} from '../../models/ifollower.model';
import followerItems , {followers} from '../../data/followers';
import {timer} from 'rxjs';
import {SkeletonComponent} from '../../core/components/skeleton/skeleton.component';
import {SkeletonFollowersComponent} from '../../core/components/skeleton-followers/skeleton-followers.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-followers',
  imports: [
    CardComponent,
    SkeletonComponent,
    SkeletonFollowersComponent,
    NgOptimizedImage
  ],
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent {
  title = signal( 'تعقیب کنندگان');
  followers = signal<IFollowerSimpleModel[]>([]);
  loading=signal(false);
  ngOnInit() {
    this.loading.set(true);
    timer(650).subscribe(()=>
    {
      this.followers.update(value => followers);
      this.loading.update(value => false);
    });
  }

  showFollowers() {

  }
}

import {Component, OnInit, signal} from '@angular/core';
import {CardComponent} from '../../core/components/card/card.component';
import {SkeletonFollowersComponent} from '../../core/components/skeleton-followers/skeleton-followers.component';
import LatestPosts from '../../data/latest-posts';
import {Post} from '../../models/post.model';
import {finalize, timer} from 'rxjs';
import {LikeSvgComponent} from '../svgs/like-svg/like-svg.component';
import {EyeSvgComponent} from '../svgs/eye-svg/eye-svg.component';
import {SkeletonComponent} from '../../core/components/skeleton/skeleton.component';

@Component({
  selector: 'app-recent-posts',
  imports: [
    CardComponent,
    SkeletonFollowersComponent,
    LikeSvgComponent,
    EyeSvgComponent,
    SkeletonComponent
  ],
  templateUrl: './recent-posts.component.html',
  styleUrl: './recent-posts.component.css'
})
export class RecentPostsPostsComponent implements OnInit {
  title = signal<string>('آخرین پستها');
  loading=signal(false);
  readonly latestPosts = signal<Post[]>([]);
  ngOnInit() {
    this.loading.update(()=>true);
    timer(330)
      .pipe(finalize(()=> this.loading.update(()=>false)))
      .subscribe(()=>this.latestPosts.update(()=>LatestPosts))
  }
}

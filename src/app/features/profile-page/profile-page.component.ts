import { Component } from '@angular/core';
import {ProfileComponent} from '../../components/profile/profile.component';
import { RecentPostsPostsComponent} from '../../components/latest-posts/recent-posts.component';

@Component({
  selector: 'app-profile-page',
  imports: [
    ProfileComponent,
    RecentPostsPostsComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}

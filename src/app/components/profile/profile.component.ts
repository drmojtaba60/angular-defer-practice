import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import * as UserInfo from '../../data/user-info.json';
import {timer} from 'rxjs';
import {FeedbackRealTimeComponent} from '../feedback-real-time/feedback-real-time.component';
import {SimplePanelComponent} from "../simple-panel/simple-panel.component";

@Component({
  selector: 'app-profile',
    imports: [
        NgOptimizedImage,
        FeedbackRealTimeComponent,
        SimplePanelComponent
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName=signal('');
  biographyDescription=signal('');
  loading=signal(false);
  ngOnInit() {
    this.loading.set(true);
    timer(1000).subscribe(() => {
      this.loading.update(()=>false);
      this.userName.set(UserInfo.UserName);
      this.biographyDescription.update(value => (UserInfo.BiographyDescription));
    });

  }
}

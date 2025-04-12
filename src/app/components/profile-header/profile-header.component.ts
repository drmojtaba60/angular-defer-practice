import {Component, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import * as UserInfo from '../../data/user-info.json';
import {timer} from 'rxjs';

@Component({
  selector: 'app-profile-header',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
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

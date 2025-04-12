import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProfileHeaderComponent} from '../components/profile-header/profile-header.component';
import {FollowersComponent} from '../components/followers/followers.component';
import {SuggestionsComponent} from '../components/suggestions/suggestions.component';
import {SimplePanelComponent} from '../components/simple-panel/simple-panel.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    ProfileHeaderComponent,
    FollowersComponent,
    SuggestionsComponent,
    SimplePanelComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}

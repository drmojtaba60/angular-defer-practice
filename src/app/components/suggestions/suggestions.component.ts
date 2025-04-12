import {Component, signal} from '@angular/core';
import {CardComponent} from "../../core/components/card/card.component";
import {SkeletonFollowersComponent} from "../../core/components/skeleton-followers/skeleton-followers.component";
import {SuggestionListComponent} from '../suggestion-list/suggestion-list.component';

@Component({
  selector: 'app-suggestions',
  imports: [
    CardComponent,
    SkeletonFollowersComponent
  ],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {
  title = signal('پیشنهاد افراد جهت فالو');
  dynamicComponent= SuggestionListComponent;
}

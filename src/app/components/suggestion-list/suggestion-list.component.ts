import {Component, signal} from '@angular/core';
import {IFollowerSimpleModel} from '../../models/ifollower.model';
import {timer} from 'rxjs';
import {suggestionsPeople} from '../../data/followers';
import {SkeletonFollowersComponent} from '../../core/components/skeleton-followers/skeleton-followers.component';

@Component({
  selector: 'app-suggestion-list',
  imports: [
    SkeletonFollowersComponent
  ],
  templateUrl: './suggestion-list.component.html',
  styleUrl: './suggestion-list.component.css'
})
export class SuggestionListComponent {
  suggestions = signal<IFollowerSimpleModel[]>([]);
  loading=signal(false);
  ngOnInit() {
    this.loading.set(true);
    timer(1200).subscribe(()=>
    {
      this.suggestions.update(value => suggestionsPeople);
      this.loading.update(value => false);
    });
  }
}

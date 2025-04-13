import {Component, signal} from '@angular/core';
import {SkeletonComponent} from '../../core/components/skeleton/skeleton.component';
import {timer} from 'rxjs';

@Component({
  selector: 'app-simple-panel',
  imports: [
    SkeletonComponent
  ],
  templateUrl: './simple-panel.component.html',
  styleUrl: './simple-panel.component.css'
})
export class SimplePanelComponent {
  isLoadingDeferred=signal(true);

  ngOnInit() {
    timer(5000,800).subscribe((value) => {
      this.isLoadingDeferred.update(value=>!value);
    });
  }
}

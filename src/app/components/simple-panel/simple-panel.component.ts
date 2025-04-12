import { Component } from '@angular/core';
import {SkeletonComponent} from '../../core/components/skeleton/skeleton.component';

@Component({
  selector: 'app-simple-panel',
  imports: [
    SkeletonComponent
  ],
  templateUrl: './simple-panel.component.html',
  styleUrl: './simple-panel.component.css'
})
export class SimplePanelComponent {

}

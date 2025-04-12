import {Component, signal} from '@angular/core';
import {EyeSvgComponent} from '../svgs/eye-svg/eye-svg.component';
import {LikeSvgComponent} from '../svgs/like-svg/like-svg.component';
import {timer} from 'rxjs';

@Component({
  selector: 'app-feedback-realtime',
  imports: [
    EyeSvgComponent,
    LikeSvgComponent
  ],
  templateUrl: './feedback-real-time.component.html',
  styleUrl: './feedback-real-time.component.css'
})
export class FeedbackRealTimeComponent {
  likeCount = signal<number>(0);
  viewCount = signal<number>(0);
  ngOnInit(): void {
    timer(1).subscribe(()=>
    {
      this.signalRSmution();

    })
  }
  signalRSmution()
  {
    this.likeCount.update((value)=> this.getRandomInt3()+value);
    this.viewCount.set(this.getRandomInt(this.viewCount(),9999));
    timer(Math.floor(Math.random()*1000) + 1000).subscribe(()=>this.signalRSmution());
  }
  getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getRandomInt2(min:number):number {
    return Math.floor(Math.random() * (min + 1)) ;
  }
  getRandomInt3():number {
    return Math.floor(Math.random()*6);
  }
}

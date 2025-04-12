import {
  Component,
  ComponentRef,
  input,
  InputSignal, OnInit,
  SimpleChanges,
  TemplateRef, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {timer} from 'rxjs';

@Component({
  selector: 'app-card',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  title = input('');
  bodyTemplateRef = input<TemplateRef<any> | null>(null);
  bodyType=input<Type<any>>();// InputSignal<Type<any>> | undefined;// = input(null);
  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;

  ngOnInit() {
    if (this.bodyType()) {
        this.container.createComponent(this.bodyType() as Type<any>);
    }
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['bodyComponentRef']?.currentValue) {
  //     console.log(changes['bodyComponentRef'].currentValue);
  //     this.vcr.clear();
  //     this.vcr.insert(this.bodyComponentRef().hostView);
  //   }
  // }
}

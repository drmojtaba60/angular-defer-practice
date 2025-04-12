import { Component } from '@angular/core';
import {SimplePanelComponent} from "../../components/simple-panel/simple-panel.component";

@Component({
  selector: 'app-home',
    imports: [
        SimplePanelComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

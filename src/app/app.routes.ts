import { Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './features/home/home.component';
import {ProfilePageComponent} from './features/profile-page/profile-page.component';

export const routes: Routes = [
  {
    path:'',component:LayoutComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'profile',component:ProfilePageComponent},
    ]
  }
];

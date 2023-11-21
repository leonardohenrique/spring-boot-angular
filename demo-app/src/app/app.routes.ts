import {Routes} from '@angular/router';
import {HelloComponent} from "./hello/hello.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  },
];

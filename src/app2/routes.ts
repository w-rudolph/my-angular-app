import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog.component';
import { TestComponent } from './pages/test.component';


export const Pages = {
  list: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TestComponent
  ],
  default: HomeComponent,
};

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const AppRoutesConfig = {
  enableTracing: false,
  useHash: true,
  errorHandler() {
    console.log('Route Error!');
  }
};


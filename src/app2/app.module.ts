import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes, AppRoutesConfig, Pages } from './routes';
import { CommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    ...Pages.list,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes, AppRoutesConfig)
  ],
  providers: [],
  bootstrap: [Pages.default]
})
export class AppModule { }

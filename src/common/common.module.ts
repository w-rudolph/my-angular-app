import { NgModule } from '@angular/core';
import { DangerouslyShowHtmlPipe } from './pipes/html.pipe';

@NgModule({
  declarations: [
    DangerouslyShowHtmlPipe
  ],
  exports: [
    DangerouslyShowHtmlPipe
  ],
})
export class CommonModule { }

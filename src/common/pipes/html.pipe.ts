import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: '__html'
})
export class DangerouslyShowHtmlPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}
    transform(html: string, args: any[]): any {
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}

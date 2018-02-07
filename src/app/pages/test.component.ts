import { Component, OnInit, ViewChild, ContentChild, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test-cmp',
  template: `
    <div>
      <div #header>Header</div>
      <div #content><ng-content></ng-content></div>
    </div>
  `
})
export class TestComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor() { }

  @ViewChild('header') public header: ElementRef;
  @ViewChild('content') public content: ElementRef;
  @ContentChild('hh') public contentRef: ElementRef;
  ngAfterViewInit() {
    // console.log(this.header);
    // console.log(this.content);
  }
  ngAfterContentInit() {
    console.log(this.contentRef.nativeElement);
  }
  ngOnInit() {
  }

}

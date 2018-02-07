import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList, ViewContainerRef, ElementRef } from '@angular/core';
import { TestComponent } from './test.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {
  constructor() { }

  @ViewChildren(TestComponent) testComps: QueryList<TestComponent>;
  @ViewChild('ngContainer', {read: ViewContainerRef}) private ngContainer: ViewContainerRef;
  ngAfterViewInit() {
    // console.log(this.testComps.toArray());
  }
  ngOnInit() {
    console.log(this.ngContainer.element.nativeElement);
  }


}

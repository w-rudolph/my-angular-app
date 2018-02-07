import { Component, OnInit, ElementRef, Host, NgModule } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  eRf: ElementRef;
  html = `
    <br>
    <div>Hello world2!</div>
    <div style="width:100px;color:#f00" class="aa">Hello world3!</div>
    <p>Hhahahah</p>
  `;

  constructor( @Host() eRf: ElementRef) {
    this.eRf = eRf;
  }

  ngOnInit() {
    console.log(this.eRf);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'hello pavan lets do it !';
  constructor() {
    console.log('const : app comp');
  }

  ngOnInit() {
    console.log('on init : app comp');
  }
}

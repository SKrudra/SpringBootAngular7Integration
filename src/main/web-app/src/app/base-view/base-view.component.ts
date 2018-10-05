import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.css']
})
export class BaseViewComponent implements OnInit {

  constructor() { }

  navLinks=[{path:'./mgrdashboard',label:'Manager Dashboard'},
            {path:'./request',label:'Request'}];
  ngOnInit() {
  }

}

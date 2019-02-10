import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
logo = "../../assets/images/wingsters_logo.jpg";
  
constructor() { }

  ngOnInit() {
  }

}

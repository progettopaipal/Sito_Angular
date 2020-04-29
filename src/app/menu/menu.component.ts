import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public valueBg : boolean;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width > 576) {

    }
    if (window.screen.width <= 576) {
      this.valueBg = true;
      this.valueBg = false;
    }
  }

}

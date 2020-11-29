import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppTheme } from '../app.theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme = new AppTheme().theme;

  @Output()
  isDisplaySideNav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    // this.displaySideNav.emit(true);
  }

  onDrawSideNav(): void{
    this.isDisplaySideNav.emit(true);
  }

}

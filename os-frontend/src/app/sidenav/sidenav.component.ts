import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppTheme } from '../app.theme';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  theme = new AppTheme().theme;

  @Input()
  isDisplaySideNav: boolean;

  @Output()
  closeSideNav = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    // this.isDisplaySideNav
  }

  onClose(): void{
    this.closeSideNav.emit(false);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavService } from '../../service/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public menu: any[] = [];

  constructor(
    private navService : NavService
  ) { 
    this.menu = navService.nav    
  }
  ngOnInit(): void {
  }

}

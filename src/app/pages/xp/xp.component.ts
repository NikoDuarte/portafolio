import { Component, OnInit } from '@angular/core';
import { XpService } from '../../service/xp.service';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styles: [
  ]
})
export class XpComponent implements OnInit {

  public xp: any[] = []

  constructor(
    private xpService : XpService
  ) { 
    this.xp = xpService.xp
  }

  ngOnInit(): void {
  }

}

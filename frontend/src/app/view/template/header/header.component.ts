import { HeaderService } from './../../../model/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service: HeaderService
  ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.service.headerData.title;
  }

  get routeUrl(): string {
    return this.service.headerData.routeUrl;
  }

}

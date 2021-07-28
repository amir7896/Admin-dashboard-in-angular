import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/allServices/SidebarService/sidebar.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit , OnDestroy{

  constructor(private sidebarService: SidebarService) { }


  ngOnInit(): void {
    this.sidebarService.hidesidebar.next(true);
  }
  ngOnDestroy(): void {
    this.sidebarService.hidesidebar.next(false);
  }

}

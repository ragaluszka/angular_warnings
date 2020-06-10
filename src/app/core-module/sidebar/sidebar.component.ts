import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from 'src/app/shared-module/services/layout.service';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css','./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

 
  constructor(private route: ActivatedRoute,
              private pS: ProfileService,
              private router : Router) { }

  ngOnInit(): void {
 
  }

  logOut(){
    this.pS.logOut();
    this.router.navigate(['/login']);
  }

}

import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username;

  constructor(
    private Dashboard:DashboardService,
    private Router:Router
  ) { }

  ngOnInit() {
    this.username = this.Dashboard.checklogin()['sub']
    this.Dashboard.setDefult()

    
   
  }

  logout(){
    this.Dashboard.clear()
  }

  
}

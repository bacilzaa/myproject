import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appurl } from '../../app.url';
import { DashboardService } from '../dashboard.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryAll = []
  color: String
  rgbcolor: String
  name: String
  id
  selectCate
  colorStatus: boolean = false;

  constructor(
    private http: HttpClient,
    private dashSe: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.colorStatus = false
    this.id = this.dashSe.id
    if (this.dashSe.CategoryNull) {
      if (this.dashSe.getCategoryStatus) {
        this.dashSe.getCategory().then(() => {
          var Alldisplay = { id: 0, name_category: "All", user_id: this.id }
          this.categoryAll = this.dashSe.categorydata[0]
          this.categoryAll.push(Alldisplay)
          console.log(this.categoryAll)
        })
      } else {
        this.categoryAll = this.dashSe.categorydata[0]
        console.log(this.dashSe.categorydata[0], "categoryAll")
      }
    }


    if (this.dashSe.selectCurrent == 0) {
      setTimeout(() => {
        this.dashSe.selectCurrent = this.categoryAll[0]['id']
        this.selectCate = this.dashSe.selectCurrent
      }, 100)
    } else {
      this.selectCate = this.dashSe.selectCurrent
      console.log(this.selectCate)
    }
  }

  console_color() {
    console.log(this.color)
    this.HEX2RGB(this.color)



  }

  checkcolor() {
    console.log(this.colorStatus)
    return this.colorStatus
  }


  newCategory() {
    this.dashSe.getCategoryStatus = true
    return (this.http.post(`${Appurl.Localhost}/category`, { name: this.name, color: this.rgbcolor, user_id: this.id }).toPromise()).then(
      (data) => {
        console.log(data)
        alert(data['Message'])
        if (data['Status']) {
          this.dashSe.categorydata = []
          this.dashSe.selectCurrent = data['SelectNew']
          this.router.navigate(['/expense'])
        }
      }
    )

  }

  select(e) {
    this.dashSe.selectCurrent = e;
  }

  HEX2RGB(hex) {
    "use strict";
    if (hex.charAt(0) === '#') {
      hex = hex.substr(1);
    }
    if ((hex.length < 2) || (hex.length > 6)) {
      return false;
    }
    var values = hex.split(''),
      r,
      g,
      b;

    if (hex.length === 2) {
      r = parseInt(values[0].toString() + values[1].toString(), 16);
      g = r;
      b = r;
    } else if (hex.length === 3) {
      r = parseInt(values[0].toString() + values[0].toString(), 16);
      g = parseInt(values[1].toString() + values[1].toString(), 16);
      b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
      r = parseInt(values[0].toString() + values[1].toString(), 16);
      g = parseInt(values[2].toString() + values[3].toString(), 16);
      b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
      return false;
    }
    this.rgbcolor = `rgb(${r}, ${g}, ${b},0.2)`;
    console.log(this.color)
    this.colorStatus = true
  }


}

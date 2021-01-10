import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Appurl } from '../app.url';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  username; id
  categorydata = []

  selectCurrent

  CategoryNull = false
  getCategoryStatus = true
  statusToken = true
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  checklogin() {
    var token = localStorage.getItem('uid')
    var decode = jwt_decode(token)
    console.log(decode)
    return decode

  }

  getCategory() {

    console.log(this.getCategoryStatus, "status")

    return new Promise((resolve, reject) => {
      (this.http.post(`${Appurl.Localhost}/datacategory`, { user_id: this.id }).toPromise()).then(
        (data => {
          console.log(data[0], "getCategory")
          if (data[0] != undefined){
            this.CategoryNull = true
            
            if (this.categorydata[0] != undefined){ }
            else {
              this.getCategoryStatus = false
              this.categorydata.push(data)
              console.log(this.categorydata)
              this.selectCurrent = this.categorydata[0][0]['id']
              console.log(this.selectCurrent, "selectcurrent")
            }
          } else {
            alert("Your don't have Category Please insert it!")
            this.router.navigate(['/category'])
          }
          resolve(this.categorydata)
        })
      )
    })
  }

  clear() {
    this.id = null
    this.username = null
    this.getCategoryStatus = true
    this.statusToken = true
    this.categorydata = []
    this.selectCurrent = null
  }

  setDefult() {
    if (this.statusToken)
      this.statusToken = false
    var token = this.checklogin()
    this.username = token['sub']
    this.id = token['main']
    console.log(this.id)
  }
}

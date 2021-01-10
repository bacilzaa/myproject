import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service'
import { HttpClient } from '@angular/common/http';
import { Appurl } from '../../app.url';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addorupdate',
  templateUrl: './addorupdate.component.html',
  styleUrls: ['./addorupdate.component.scss']
})
export class AddorupdateComponent implements OnInit {
  categoryAll = []
  id
  selectCate
  expense_id
  description
  price

  constructor(
    private dashSe: DashboardService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.dashSe.id

    if (this.dashSe.getCategoryStatus) {
      this.dashSe.getCategory().then(() => {
        if(this.dashSe.CategoryNull){
        var Alldisplay = {id:0,name_category:"All",user_id:this.id}
        this.categoryAll = this.dashSe.categorydata[0]
        this.categoryAll.push(Alldisplay)
        console.log(this.categoryAll)
        }
      })
    } else {
        this.categoryAll = this.dashSe.categorydata[0]
        console.log(this.categoryAll)
    }

    if (this.dashSe.selectCurrent == 0) {
      setTimeout(() => {
        this.dashSe.selectCurrent = this.categoryAll[0]['id']
        this.selectCate = this.dashSe.selectCurrent
      }, 50)
    } else {
      this.selectCate = this.dashSe.selectCurrent
      console.log(this.selectCate)
    }

    var url = window.location.search;
    var id = url.split("=",2);
    this.expense_id = id[1]

    if(this.expense_id != undefined){
        (this.http.post(`${Appurl.Localhost}/getData`, { expense_id:this.expense_id}).toPromise()).then((data)=>{
          console.log(data['Data'][0]['price'])
          this.price = data['Data'][0]['price']
          this.description = data['Data'][0]['description']
        })

        console.log(this.expense_id)

    }

  }

  save() {

    (this.http.post(`${Appurl.Localhost}/AddorUpdate`, ({ cate_id: this.selectCate, des: this.description, price: this.price, user_id: this.id, id: this.expense_id })).toPromise()).then((data) => {
      alert(data['Message'])
      this.router.navigate(['/display'])
    })

  }

  select(e) {
    this.dashSe.selectCurrent = e
    this.selectCate = this.dashSe.selectCurrent
    console.log(this.dashSe.selectCurrent)
  }

}

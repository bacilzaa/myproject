import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appurl } from '../../app.url';
import { DashboardService } from '../dashboard.service'
import { Router } from '@angular/router'
import * as CanvasJS from '../../../assets/canvasjs/canvasjs.min';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  id
  selectCate
  categoryAll = []
  username
  expensez_data = []
  expense_sum
  toggle = "toggle"
  datapoint = []
  dataStatus: boolean = false


  constructor(
    private dashSe: DashboardService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.id = this.dashSe.id
      this.selectCate = this.dashSe.selectCurrent

      if (this.dashSe.getCategoryStatus) {
        this.dashSe.getCategory().then(() => {
          if (this.dashSe.CategoryNull) {
            this.selectCate = this.dashSe.selectCurrent
            var Alldisplay = { id: 0, name_category: "All", user_id: this.id }
            this.categoryAll = this.dashSe.categorydata[0]
            this.categoryAll.push(Alldisplay)
            console.log(this.categoryAll)
          }
        }).then(() => {
          if (this.dashSe.CategoryNull) {
            this.getDataAccount()
          }
        })
      } else {
        setTimeout(() => {

          this.categoryAll = this.dashSe.categorydata[0]
          this.getDataAccount()
        }, 20)

      }
    }, 500)


  }


  select(e) {

    this.dashSe.selectCurrent = e
    this.selectCate = this.dashSe.selectCurrent
    console.log(this.dashSe.selectCurrent)
    setTimeout(() => {
      this.getDataAccount()
    }, 300);
  }

  getDataAccount() {
    if (this.selectCate != undefined) {
      return new Promise((resolve, reject) => {
        (this.http.post(`${Appurl.Localhost}/getData`, { user_id: this.id, cate_id: this.selectCate }).toPromise())
          .then((data) => {
            console.log(data)
            this.expensez_data = []
            this.expense_sum = null
            this.datapoint = []
            
            if(data['Data'][0] != undefined){
              this.dataStatus = true
              setTimeout(() => {
                this.expensez_data = data['Data']
                this.expense_sum = data['SUM'][0]['SUM']
                if (this.dashSe.selectCurrent == 0) {
                  for (var arr of data['result_3']) {
                    this.datapoint.push({ y: arr['price'], name: arr['name_category'], color: arr['color'] })
                    console.log(this.datapoint)
                  }
                } else {
                  for (var arr of data['Data']) {
                    this.datapoint.push({ y: arr['price'], name: arr['description'] })
                    console.log(this.datapoint)
                  }
                }
                console.log(this.expense_sum, this.expensez_data)
              }, 300)
            }else{
              this.dataStatus = false
            }
            
          }).then(() => {
            if(this.dataStatus){
              let chart = new CanvasJS.Chart("chartContainer", {
                theme: "light2",
                animationEnabled: true,
                exportEnabled: true,
                title: {
                  text: "Monthly Expense"
                },
                data: [{
                  type: "pie",
                  showInLegend: true,
                  toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                  indexLabel: "{name} - #percent%",
                  dataPoints: this.datapoint
                }]
              });
              setTimeout(() => {
                chart.render();
              }, 300)
            }
          })
      })
    }
  }

  status: boolean = false;
  clickEvent(i) {
    if ("toggle" + i == this.toggle) {
      this.status = !this.status;
      console.log(i)
    } else {
      this.status = true;
    }
    this.toggle = "toggle" + i;
  }

  check(i) {
    if ("toggle" + i == this.toggle) {
      if (this.status) return "show"
      else return "hide"
    }
    else { return "hide" }
  }

  delete(expense_id) {
    (this.http.post(`${Appurl.Localhost}/delete`, { id: expense_id }).toPromise())
      .then(() => {
        this.getDataAccount()
      })
  }


  edit(id) {
    this.router.navigate(['/expense'], { queryParams: { id: id } })
  }




}

import { Injectable , NgZone } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Appurl} from '../../app.url';
import { AuthGuard } from '../../auth.guard'




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  auth2:any

  constructor(
    private http:HttpClient,
    private router:Router,
    private auth:AuthGuard,
    private route:ActivatedRoute,
    private ngZone:NgZone
 
  ){}

  ngOninit(){
   
  }



  login(username,password,type){
    return new Promise((resolve,reject)=>{
      (this.http.post(`${Appurl.Localhost}/login`,({username:username,password:password,type:type})).toPromise())
      .then(data=>{
        console.log(data)
        alert(data['Message'])
        if(data['Status']){
          localStorage.setItem("uid",data['Token']);
          this.auth.isLogin = true
          this.router.navigate([""]);
          this.ngZone.run(()=>this.router.navigate([""]));
          }
          resolve

      })
    })
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('uid');
    this.auth.isLogin = false;
  }
}

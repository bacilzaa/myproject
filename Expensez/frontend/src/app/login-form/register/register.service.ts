import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Appurl } from '../../app.url';
import { AuthGuard} from '../../auth.guard'

@Injectable()


export class RegisterService{

    data:object;
    
    constructor(
        private http:HttpClient,
        private router:Router,
        private auth:AuthGuard
    ){}

    ngOnInit(){

    }

    register(u,p){
        console.log(u,p)
        return new Promise((resolve,reject)=>{
            (this.http.post(`${Appurl.Localhost}/register`,({username:u,password:p})).toPromise())
            .then(data=>{
                console.log(data)
                alert(data['Message'])
                if(data['Status']){
                    localStorage.setItem("uid",data['Token']);
                    this.auth.isLogin = true
                    this.router.navigate([""]);
                }
                resolve
            })
        })
            
    }
}


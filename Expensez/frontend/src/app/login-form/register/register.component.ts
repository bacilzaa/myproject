import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service'
import { LoginService} from '../login/login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  username:String;
  password:String;



  constructor(
    private regisSe:RegisterService,
    private loginSe:LoginService

  ) { }

  ngOnInit() {
    //***formmm */
    const inputs = document.querySelectorAll(".input");


    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }


    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
    //** ******/

    this.loginSe.logout()

  }

  register(){
    this.regisSe.register(this.username,this.password)
  }

}

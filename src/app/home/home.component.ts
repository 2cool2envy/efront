import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { API } from '../services/apiService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: any;
  password: any;
  boxType:string = 'Login';
  constructor(private alertService: AlertService,private api: API) { }

  ngOnInit() {
  }
  login() {
  let userType = 'o';
  let theURL;
    if (this.email === undefined || this.email === null || this.password === undefined || this.password === null) {

      this.alertService.success('Enter details in all fields before submitting');
      return false;
    }
    else {
      if(this.boxType!=="Login")
      {
        userType ='n';
      }
      if (this.email.trim().length > 1 && this.password.length > 1) {
        console.log(this.email, this.password)
        let obj = {email : this.email , password : this.password, user : userType};
        if(userType==='o')
        {
          theURL='checkU';
        }
        else{
          theURL='addU';
        }
        this.api.getData(theURL, obj).subscribe(data=>
          {
            console.log ('data from getU get request',data);
          })
      }
      else {
        this.alertService.danger('Enter details in all fields');
        return false;
      }
    }
  }
  userTypeCheck(userType?:any) : any
  {
    if(userType==='n')
    {
      this.boxType ="Sign Up";
    }
    else if(userType ==='o')
    {
      this.boxType ="Login";
    }
    return userType
  }
}

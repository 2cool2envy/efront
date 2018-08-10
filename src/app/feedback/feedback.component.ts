import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { API } from '../services/apiService';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedback:any[];
  constructor(private api : API) { }

  ngOnInit() {
    this.api.getData('getF').subscribe(data=>
      {
        console.log ('data from getU get request',data);
        console.log("feedbcak",data);
        this.feedback = data.reverse();
      })
  }

}

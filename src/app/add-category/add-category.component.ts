import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { API } from '../services/apiService';
import { map } from 'rxjs/operators';
import { concat } from 'rxjs/internal/operators/concat';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  @Input() isEdit: boolean;
  categories: any[];
  isCatSelected: boolean = false;
  catDesc: string;
  catName: string;
  confirmButtonText:string;

  constructor(private alertService: AlertService, private api: API,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    console.log(this.isEdit + "--");
    if (this.isEdit) {
      this.api.getData('getC').subscribe(data => {
        console.log('Inside add-catergory: ', data);
        this.categories = data;
        for (var i = 0; i < this.categories.length; i++) {
          this.categories[i]['custom'] = i;
        }
        let obj = {
          'title':'Select category',
          'custom':-1,
        }
      //  this.categories.unshift(obj);
      //   console.log('this.categories', this.categories);
      });
    }

  }
  addCat(name: any, desc: any) {
    this.spinner.show();
    console.log(typeof name, desc);
    if (name.trim().length < 1 || desc.trim().length < 1) {
      console.log("i");
      this.alertService.warning('Enter details in all fields');
      return false;
    }
    else {
      let obj = { name: `${name}`, desc: `${desc}`, app : 'Shop' };
      console.log('To send ' + obj);
      this.api.postData('addC',obj).subscribe((data : any)=>
      {
        console.log ('data from addCat post request',data);
        this.spinner.hide();
        this.alertService.success(data.msg);
        // let something = data;
        // this.alertService.success(something.msg);
        this.catName ="";
        this.catDesc="";
      })
    }

  }
  catSelected(val) {
    console.log(val);
    if(val ==='-1')
    {
      this.isCatSelected = false;
      this.catName = undefined;
      this.catDesc = undefined;
      this.alertService.warning('Choose the Category');
      return false;
    }
    else 
    {
      console.log("val else",val);
      if (val !== undefined || val !== null) {
        this.isCatSelected = true;
        console.log(this.categories[val+1]);
        this.catName = this.categories[val].title;
        this.catDesc = this.categories[val].custom;
      }
           
    }
  

  }
  editCat(val) {
    if(this.catDesc===undefined || this.catName===undefined)
    {
      console.log('Error');
      this.alertService.warning('Choose the Category');
      return false;
    }
    else if (val === 'u') {
      this.confirmButtonText ='Update';
      console.log('Update');
    }
    else {
      this.confirmButtonText ='Delete';
      console.log('Delete');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
addP:boolean = false;
addC:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showHide(val){
this.addC = false;
this.addP = false;
if(val==='c') {this.addC=true}
else {this.addP=true}
  }
}

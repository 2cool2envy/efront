import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { API } from '../services/apiService';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() isEdit: boolean;
  catName: any;
  categories: any[];
  confirmButtonText: string;
  prodDesc: any;
  prodName: any;
  private imageSrc: string = '';
  base64textString = new Array();
  pCat: any[] = [
    { name: 'Car' },
    { name: 'Car' },
    { name: 'Pen' },
    { name: 'Pen' },
  ];
  pPro: any[] = [
    { name: 'Benz1', cat: 'Car' },
    { name: 'Benz2', cat: 'Car' },
    { name: 'R*', cat: 'pen' },
    { name: 'R**', cat: 'pen' }

  ];
  nProducts: any[];
  constructor(private alertService: AlertService, private api: API) { }

  ngOnInit() {
    this.api.getData('getC').subscribe(data => {
      console.log('Inside add-catergory: ', data);
      data.unshift({ name: 'Select' });
      this.categories = data;
      console.log('this.categories', this.categories);
    });
  }
  addP(name: any, desc: any, cat: any) {
    if(this.catName===undefined ||  this.catName===null)
    {
      this.alertService.warning('Choose the Catergory');
      return false;
    }
    console.log(name, desc, this.catName);
    if (name.trim().length < 1 || desc.trim().length < 1) {
      console.log("i");
      this.alertService.warning('Enter details in all fields');
      return false;
    }
    else {
      let obj = { name: `${name}`, desc: `${desc}`, cat: `${this.catName}`, img: this.base64textString };
      console.log(obj);
      this.base64textString = [];
      this.api.postData('addP', obj).subscribe((data) => {
        console.log(data);
        this.alertService.success('Product added ');
      });
    }
  }
  catChange(value) {
    console.log("value",value);
    if (value === undefined || value === null) {
      this.alertService.warning('Choose the Catergory');
      return false;
    }
    else if (value === 'Select') {
      this.alertService.warning('Choose the Catergory');
      return false;
    }
    if (this.isEdit === false) {       /* is not edit mode then take value from drop down for adding a product*/
      this.catName = value;
      console.log("not edit mode :", this.prodName);
    }
    else {
      console.log("this.catName 2 ", this.catName);
      this.nProducts = this.pPro.filter(function (entry) {
        return entry.cat.toLowerCase() === value.toLowerCase();
      });
      for (var i = 0; i < this.nProducts.length; i++) {
        this.nProducts[i]['custom'] = i;
      }
      console.log(this.nProducts);
    }


  }
  prodChange(val) {

    console.log(val);
    if (val === undefined || val === null) {
      this.alertService.warning('Choose the Catergory');
      return false;
    }
    else {
      this.prodName = this.nProducts[val].custom;
      this.prodDesc = this.nProducts[val].custom;
    }


  }
  editP(val) {

    if (val === 'u') {
      this.confirmButtonText = 'Update';
      console.log('Update');
    }
    else {
      this.confirmButtonText = 'Delete';
      console.log('Delete');
    }
  }
  handleInputChange(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  _handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    console.log(this.base64textString);
  }
  onChange(event: any, input: any) {
    let files = [].slice.call(event.target.files);

    input.value = files.map(f => f.name).join(', ');
  }
  test(e) {
    console.log(e.file);
  }
}

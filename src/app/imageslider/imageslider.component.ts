import { Component, OnInit } from '@angular/core';
import { API } from '../services/apiService';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {
  base64textString = new Array();
  constructor(private api: API) { }

  ngOnInit() {

    console.log(this.base64textString);
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

  // removeImage() {
  //   this.api.postData('addI').subscribe((data) => {

  //   });
  // }
  removeImage(val) {
    console.log("val",val);
    this.base64textString.splice(val,1);
    console.log(this.base64textString);
  }

  submitImages()
  {
    console.log("this.base64textString", this.base64textString);
    let x = this.base64textString;
    if(this.base64textString !==null || this.base64textString !==undefined)
    {
      let obj = { img: `${this.base64textString}};
      this.api.postData('addI',this.base64textString).subscribe((data)=>
    {
      console.log('req from addI',data);
    });
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editP:boolean = false;
  editC: boolean = false;
  constructor() { }
  category: any[] = [
    { name: 'Truck', desc: 'Some big wheels and big engine !' },
    { name: 'Truck', desc: 'Some big wheels and big engine !' },
    { name: 'Truck', desc: 'Some big wheels and big engine !' },
    { name: 'Truck', desc: 'Some big wheels and big engine !' }

  ];
  ngOnInit() {
  }
showHide(val){
  this.editP = false;
  this.editC = false;
  if(val==='c'){this.editC=true}
  else {this.editP = true;}
}
}

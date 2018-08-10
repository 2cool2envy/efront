import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  demo: any = [
    { 'name': 'martin', 'cat': 'Skies1' },
    { 'name': 'lock', 'cat': 'Skies2' },
    { 'name': 'top', 'cat': 'ko' },
    { 'name': 'down', 'cat': 'opk' },
    { 'name': 'downtown', 'cat': 'droksh' },
    { 'name': 'hero', 'cat': 'random' },
    { 'name': 'ahero', 'cat': 'dom element' },
  ];
  constructor() { }

  ngOnInit() {
    let x = this.demo.filter((name) => {
      return name === 'lock';
    });
    console.log(x);
  }


}

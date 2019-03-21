import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  name;
  veggieList;

  constructor() {}

  ngOnInit() {
    this.name = 'Amitabh Bachhan';
    this.veggieList = [
      {name: 'Tomato', price: 24.5},
      {name: 'Bottle Gourd', price: 20},
      {name: 'Brinjal', price: 22},
      {name: 'Capsicum', price: 40},
      {name: 'Potato', price: 25}
    ];
  }

}

import { Component, OnInit } from '@angular/core';

const PI = 3.142;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';
  radius: number;
  area: number;

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
    console.log(this.clickCounter);
  }

  showMessage() {
    alert(this.name);
  }

  calcArea() {
    if(this.radius === undefined) {
      alert('Please enter radius!!!');
      return false;
    }
    this.area = PI * this.radius ** 2;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }

}

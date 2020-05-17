import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regisImages : string[];
  regisCurrent : number;
  galPos : number;

  isPrev : boolean;
  isNext : boolean;

  title : string;
  width : Number;
  height : Number;

  constructor() {
    this.title= Globals.mainTitle;

    let imgPath : string = "assets/RegisPics/";
    
    this.regisImages = [
      imgPath + "Regis1.jpg",
      imgPath + "Regis2.jpg",
      imgPath + "Regis3.jpg"
    ]
    this.regisCurrent = 1;

    this.width = 3840;
    this.height = 2160;

    this.isPrev = false;
    this.isNext = false;

    this.galPos = 0;
  }

  ngOnInit(): void {
  }

  prev(){
    this.galPos += 100;
  }

  next(){
    this.galPos -= 100;
  }
}

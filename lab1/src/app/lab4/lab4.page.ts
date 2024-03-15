import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Furniture } from './class/Furniture';
import { Wardrobe } from './class/Wardrobe';
import { Sofa } from './class/Sofa';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab4Page implements OnInit {
  furniture: Furniture[] = [];

  constructor() { }

  ngOnInit() {
  }

  getRandomInt() {
    return Math.floor(Math.random() * 100 + 1)
  }

  calculate(nn: any) {
    this.furniture = new Array();
    let n = parseInt(nn);
    let numOfW = 1; 
    let numOfS = 1; 

    for (let i = 0; i < n; ++i) {
      if (i % 2 === 0) {
        this.furniture.push(new Wardrobe(`W${numOfW++}`, this.getRandomInt()));
      }
      else {
        this.furniture.push(new Sofa(`S${numOfS++}`, this.getRandomInt()));
      }
    }

    this.furniture.forEach((el) => {
      el.calculatePrice();
      console.log(el.show());
    });
  }
}

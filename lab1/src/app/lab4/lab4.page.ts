import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Furniture } from './class/Furniture';
import { Wardrobe } from './class/Wardrobe';
import { Sofa } from './class/Sofa';
import { Table } from './class/Table';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab4Page implements OnInit {
  furniture: Furniture[] = [];
  averageWardrobePrice: number = 0;
  averageSofaPrice: number = 0;
  showAverage: boolean = false;

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

    let sumWardrobePrice = 0;
    let sumSofaPrice = 0;

    this.furniture.forEach((el, i) => {
      el.calculatePrice();
      if (i % 2 === 0) {
        sumWardrobePrice += el.price;
      } else {
        sumSofaPrice += el.price;
      }

      console.log(el.show());
    });

    this.averageWardrobePrice = numOfW > 0 ? this.calculateAverage(sumWardrobePrice, --numOfW) : 0;
    this.averageSofaPrice = numOfS > 0 ? this.calculateAverage(sumSofaPrice, --numOfS) : 0;

    this.showAverage = true;
  }

  calculateAverage(sum: number, n: number) {
    return sum / n;
  }
}

export { Wardrobe, Sofa, Table };


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_BAGS } from 'src/app/mock-data/bags';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css'],
})
export class BagsComponent implements OnInit {
  bags: Product[] = [];
  filterColors: string[] = [];
  bagsInfo: any = {
    name: 'Bags',
    description: 'Top quality bags for you.',
  };

  ngOnInit(): void {
    this.bags = MOCK_BAGS;
    this.bags.forEach((bag) => {
      bag.colors.forEach((color) => {
        if (!this.filterColors.includes(color)) {
          this.filterColors.push(color);
        }
      });
    });
  }
}

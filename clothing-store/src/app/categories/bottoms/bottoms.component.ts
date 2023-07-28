import { Component } from '@angular/core';
import { MOCK_BOTTOMS } from 'src/app/mock-data/bottoms';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css'],
})
export class BottomsComponent {
  bottoms: Product[] = [];
  filterColors: string[] = [];
  bottomsInfo: any = {
    name: 'Bottoms',
    description: 'The best bottoms on the market.',
  };

  ngOnInit(): void {
    this.bottoms = MOCK_BOTTOMS;
    this.bottoms.forEach((bottom) => {
      bottom.colors.forEach((color) => {
        if (!this.filterColors.includes(color)) {
          this.filterColors.push(color);
        }
      });
    });
  }
}

import { Component } from '@angular/core';
import { MOCK_TOPS } from 'src/app/mock-data/tops';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css'],
})
export class TopsComponent {
  tops: Product[] = [];
  filterColors: string[] = [];
  topsInfo: any = {
    name: 'Tops',
    description: 'The best tops on the market.',
  };

  ngOnInit(): void {
    this.tops = MOCK_TOPS;
    this.tops.forEach((top) => {
      top.colors.forEach((color) => {
        if (!this.filterColors.includes(color)) {
          this.filterColors.push(color);
        }
      });
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Input() colors: string[] = [];
  price: number = 0;

  filterSettings: any = {
    colorsShown: true,
    priceShown: true,
  };

  priceChanges(price: HTMLInputElement) {
    this.price = Number(price.value);
  }

  colorChanges(checkbox: HTMLInputElement) {
    if (checkbox.checked) {
      this.colors.push(checkbox.value);
    } else {
      this.colors.splice(this.colors.indexOf(checkbox.value), 1);
    }
  }

  toggleFilters(filterName: string) {
    this.filterSettings[filterName] = !this.filterSettings[filterName];
  }
}

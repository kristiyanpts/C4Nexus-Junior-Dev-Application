import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filterService: FiltersService
  ) {}

  @Input() colorsInput: string[] = [];
  colorFiltered: string[] = [];
  price: number = 1;

  filterSettings: any = {
    colorsShown: true,
    priceShown: true,
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (params: any) => {
        if (params.hasOwnProperty('color') && params.hasOwnProperty('price')) {
          if (params.color != '') {
            this.colorFiltered = params.color.split(',');
          } else {
            this.colorFiltered = [];
          }
          this.price = params.price;
        } else {
          this.colorFiltered = [];
          this.price = 1;
        }
      },
    });
  }

  get isMenuShown(): boolean {
    return this.filterService.areFiltersShown;
  }

  priceChanges(price: HTMLInputElement) {
    this.price = Number(price.value);
    this.navigateParams();
  }

  colorChanges(checkbox: HTMLInputElement) {
    if (checkbox.checked && !this.colorFiltered.includes(checkbox.value)) {
      this.colorFiltered.push(checkbox.value);
    } else {
      this.colorFiltered.splice(this.colorFiltered.indexOf(checkbox.value), 1);
    }
    this.navigateParams();
  }

  navigateParams(): void {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: { color: this.colorFiltered.join(','), price: this.price },
    });
  }

  toggleFilters(filterName: string) {
    this.filterSettings[filterName] = !this.filterSettings[filterName];
  }
}

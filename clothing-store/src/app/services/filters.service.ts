import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  areFiltersShown: boolean = false;
  constructor() {}

  toggleFilters(): void {
    this.areFiltersShown = !this.areFiltersShown;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FiltersService } from 'src/app/services/filters.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private filterService: FiltersService,
    private notificationsService: ToastrService
  ) {}

  @Input() products: Product[] = [];
  @Input() listingInfo: any = {};
  productsLoaded: Product[] = [];
  productsToLoad: number = 5;
  maxProducts: number = 0;

  colorFilters: string[] = [];
  priceFilter: number = 0;
  sortSelected: string = '';

  sortProductsFunctions: any = {
    'a-z': (products: Product[]) =>
      products.sort((a, b) => a.name.localeCompare(b.name)),
    'z-a': (products: Product[]) =>
      products.sort((a, b) => b.name.localeCompare(a.name)),
    'price-ascend': (products: Product[]) =>
      products.sort((a, b) => a.price - b.price),
    'price-descend': (products: Product[]) =>
      products.sort((a, b) => b.price - a.price),
  };

  ngOnInit(): void {
    this.maxProducts = this.products.length;
    this.productsLoaded = this.products.slice(0, this.productsToLoad);
    this.route.queryParams.subscribe({
      next: (params: any) => {
        if (params.hasOwnProperty('color') && params.hasOwnProperty('price')) {
          if (params?.color != '') {
            this.colorFilters = params.color.split(',');
          } else {
            this.colorFilters = [];
          }
          this.priceFilter = params?.price;
          this.filterProducts();
        } else {
          this.colorFilters = [];
          this.priceFilter = 1;
          this.filterProducts();
        }
      },
    });
  }

  getStarRating(rating: number) {
    let ratings: string[] = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratings.push('rated');
      } else {
        ratings.push('');
      }
    }

    return ratings;
  }

  loadMore(): void {
    if (this.productsToLoad + 10 > this.maxProducts) {
      this.productsToLoad = this.maxProducts;
    } else {
      this.productsToLoad += 10;
    }

    this.productsLoaded = this.products.slice(0, this.productsToLoad);
    this.filterProducts();
  }

  sortProducts(select?: HTMLSelectElement, reSort?: boolean) {
    if (reSort == true) {
      this.sortSelected = this.sortSelected;
    } else {
      this.sortSelected = select?.value || this.sortSelected;
    }
    this.productsLoaded = this.sortProductsFunctions[this.sortSelected](
      this.productsLoaded
    );
  }

  filterProducts(): void {
    this.productsLoaded = this.products.slice(0, this.productsToLoad);

    if (this.colorFilters.length > 0) {
      this.colorFilters.forEach(
        (c) =>
          (this.productsLoaded = this.productsLoaded.filter((p) =>
            p.colors.includes(c)
          ))
      );
    }

    this.productsLoaded = this.productsLoaded.filter(
      (p) => p.price >= this.priceFilter
    );

    this.sortProducts(undefined, true);
  }

  toggleFilters() {
    this.filterService.toggleFilters();
  }

  buyProduct() {
    this.notificationsService.success(
      'Product has been added to your cart',
      'Success'
    );
  }
}

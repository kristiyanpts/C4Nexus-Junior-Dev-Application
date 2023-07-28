import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  @Input() products: Product[] = [];
  productsUnchaged: Product[] = [];
  productsToLoad: number = 10;
  maxProducts: number = 0;

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
    this.productsUnchaged = this.products;
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
  }

  sortProducts(select: HTMLSelectElement) {
    this.products = this.productsUnchaged;
    this.products = this.sortProductsFunctions[select.value](this.products);
  }
}

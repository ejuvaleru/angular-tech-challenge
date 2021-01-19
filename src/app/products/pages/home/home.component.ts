import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocationService } from 'src/app/core/services/location.service';
import { ProductService } from 'src/app/core/services/product.service';

import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $products: Observable<Product[]>;

  // Order by price filter
  sortOptionSelected: string;
  category: String = '';

  // Category filter
  categoryOptionSelected: string;

  searchString: string = ''

  constructor(
    private productService: ProductService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.$products = this.productService.getAllProducts();
    this.locationService.$defaultLocation.subscribe(dLocation => {
      if (localStorage.getItem('defaultLocation') != 'United States') {
        this.$products = this.productService.getInternationalProducts();
      } else {
        this.$products = this.productService.getAllProductsApi();
      }
    })
    this.sortOptionSelected = localStorage.getItem('sortOption') || SortOptions.DEFAULT;
    this.categoryOptionSelected = localStorage.getItem('categoryOption') || 'all';
    this.searchString = localStorage.getItem('search') || '';
    this.checkLocalStorageForCache();
  }

  checkLocalStorageForCache() {
    if (localStorage.getItem('categoryOption')) {
      this.onSelectCategoryOption(localStorage.getItem('categoryOption'));
    }
    if (localStorage.getItem('sortOption')) {
      this.filterProducts(localStorage.getItem('sortOption'));
    }
    if (localStorage.getItem('search')) {
      this.onSearchProduct(localStorage.getItem('search'))
    }
  }

  // Order the products by their price
  filterProducts(sortOption: String) {
    if (sortOption != SortOptions.DEFAULT) {
      this.$products = this.$products.pipe(map(products => {
        if (sortOption === SortOptions.LOWER) return products.sort((a, b) => a.price - b.price);
        else if (sortOption === SortOptions.HIGHEST) return products.sort((a, b) => b.price - a.price);
        else if (sortOption === SortOptions.POPULAR) return products.filter(p => p.isTopSales === true);
        else {
          return [];
        };
      }));
    } else {
      this.$products = this.productService.$products;
    }
  }

  onSelectOrderOption(newOption: string) {
    localStorage.setItem('sortOption', newOption);
    this.sortOptionSelected = newOption;
    this.filterProducts(this.sortOptionSelected)
  }

  // Remove all the items from the local storage and set to the default options of filtering products
  resetAllFilterOptions() {
    localStorage.removeItem('sortOption');
    localStorage.removeItem('categoryOption');
    localStorage.removeItem('search');
    this.sortOptionSelected = SortOptions.DEFAULT;
    this.categoryOptionSelected = 'all';
    this.searchString = '';
    this.$products = this.productService.getAllProducts();
  }

  // Filter the products by a category
  onSelectCategoryOption(newOption: string) {
    localStorage.setItem('categoryOption', newOption);
    this.categoryOptionSelected = newOption;
    if (this.categoryOptionSelected != 'all') {
      this.$products = this.productService.getProductsByCategory(this.categoryOptionSelected);
    }
    else {
      this.resetAllFilterOptions();
      this.$products = this.productService.getAllProducts();
    }
  };

  // Find a products by their name
  onSearchProduct(text: string) {
    localStorage.setItem('search', text);
    this.searchString = text;
    if (this.searchString != '') {
      this.$products = this.$products.pipe(map(products => products.filter(p => p.title.toLowerCase().includes(this.searchString.toLowerCase()))));
    }
  }

}

export enum SortOptions {
  DEFAULT = 'default',
  LOWER = 'lower',
  HIGHEST = 'highest',
  POPULAR = 'popular'
}

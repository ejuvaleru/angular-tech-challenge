import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  $products: Observable<Product[]>;

  constructor(
    private http: HttpClient
  ) {
    this.$products = this.getAllProductsApi();
  }

  getAllProductsApi(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.products_api}`)
  }

  getAllProducts(): Observable<Product[]> {
    return this.$products;
  }

  getInternationalProducts(): Observable<Product[]> {
    this.$products = this.getAllProductsApi();
    return this.$products.pipe(map(products => products.filter(p => p.isInternational === true)))
  }

  getProductById(id: number) {
    if (this.$products) return this.$products.pipe(map(products => products.filter(p => p.id === id)));
    else {
      this.$products = this.getAllProductsApi();
      return this.$products.pipe(map(products => products.filter(p => p.id === id)))
    }
  }

  getProductsByCategory(categoryName: String, limit = false): Observable<Product[]> {
    if (localStorage.getItem('defaultLocation') != 'United States') {
      this.$products = this.getInternationalProducts();
    } else {
      this.$products = this.getAllProductsApi();
    }
    if (limit) {
      return this.$products.pipe(map(products => products.filter(p => p.category === categoryName).slice(0, 3)))
    } else {
      return this.$products.pipe(map(products => products.filter(p => p.category === categoryName)))
    }

  }
}

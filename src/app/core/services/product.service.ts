import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.products_api}/products`)
  }

  getProductById(id: String) {
    return this.http.get<Product>(`${environment.products_api}/products/${id}`);
  }

  getProductsByCategory(categoryName: String, limit = false): Observable<Product[]> {
    if (limit) {
      return this.http.get<Product[]>(`${environment.products_api}/products/category/${categoryName}?limit=3`)
    } else {
      return this.http.get<Product[]>(`${environment.products_api}/products/category/${categoryName}`)
    }
  }
}

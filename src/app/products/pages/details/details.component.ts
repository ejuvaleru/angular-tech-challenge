import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productData: Product;
  productId: String;
  $productsLikeThis: Observable<Product[]>;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');

      if (this.productId) {
        this.productService.getProductById(Number(this.productId)).subscribe((products: Product[]) => {
          this.productData = products[0];
          this.$productsLikeThis = this.productService.getProductsByCategory(this.productData.category, true)
        });
      }
    });

  }

}

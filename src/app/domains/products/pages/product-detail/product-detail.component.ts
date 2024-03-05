import { Component, inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/models/product.model';
import { error } from 'console';
import { EventEmitter } from 'stream';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  router = inject(Router);
  cartService = inject(CartService)
  productService = inject(ProductsService);
  idRotuter!: number;
  product!: Product;

  ngOnInit(): void {
    this.idRotuter = Number (this.router.url.split('/')[2]);
    this.productService.getProductId(this.idRotuter).subscribe({
      next: ((product: Product )=> this.product = product),
      error: ((error: Error) => console.log("Error en producto", error))
    })
  }

  addToCartHandler(product: Product){
    this.cartService.addToCart(product);
  }
}

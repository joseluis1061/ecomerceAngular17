import { Component, inject, Input, OnInit, Output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../shared/services/products.service';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  @Input() pathId?: string;

  router = inject(Router);
  cartService = inject(CartService)
  productService = inject(ProductsService);
  product = signal<Product | null>(null);
  cover = signal('');

  ngOnInit(): void {
    if(this.pathId){
      this.productService.getProductId(this.pathId).subscribe({
        next: ((product: Product )=> {
          this.product.set(product)
          if (product.images.length > 0) {
            this.cover.set(product.images[0])
          }
      }),
        error: ((error: Error) => console.log("Error en producto", error))
      })
    }
  }

  addToCartHandler(){
    const product = this.product();
    if(product !== null){
      this.cartService.addToCart(product);
    }
  }

  onChangeCover(url: string): void {
    this.cover.set(url);
  }
}

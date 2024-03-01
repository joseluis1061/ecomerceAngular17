import { Component, OnChanges, OnInit, AfterViewInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductsService } from '../../../shared/services/products.service';
import { error } from 'console';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductsService);

  img: string = "https://picsum.photos/640/640?r="+Math.random();

  productList =signal<Product[]>([]);

  ngOnInit(): void {
      this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.productList.set(products);
        },
        error: (error) => {
          console.error("Error en petición: ", error);
        }
      })
  }


  fromChild(product: Product){
    this.cartService.addToCart(product);
  }
}

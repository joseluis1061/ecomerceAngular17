import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  // img: string = "https://picsum.photos/640/640?r="+Math.random();
  @Input({required:true}) product!: Product;

  @Output() addToCartEvent = new EventEmitter<Product>();

  addToCartHandler(product: Product){
    this.addToCartEvent.emit(product);
  }

}

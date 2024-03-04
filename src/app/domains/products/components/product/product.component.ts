import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../../shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { RemoveQuotesPipe } from '../../../shared/pipes/remove-quotes.pipe';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RemoveQuotesPipe],
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

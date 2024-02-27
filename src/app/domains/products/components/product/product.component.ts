import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  // img: string = "https://picsum.photos/640/640?r="+Math.random();
  @Input({required:true}) img: string = '';
  @Input({required:true}) price: number = 0;
  @Input() title: string = '';

  @Output() addToCartEvent = new EventEmitter<string>();

  addToCartHandler(title: string){
    this.addToCartEvent.emit(title);
  }

}

import { Component, OnChanges, OnInit, AfterViewInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent  {
  private cartService = inject(CartService);

  img: string = "https://picsum.photos/640/640?r="+Math.random();

  productList =signal<Product[]>([]);

  constructor(){
    let productsList: Product[] = [
      {
        image: "https://picsum.photos/640/640?r="+Math.random(),
        price: Math.floor(Math.random()*1000),
        title: 'Product_1'
      },
      {
        image: "https://picsum.photos/640/640?r="+Math.random(),
        price: Math.floor(Math.random()*1000),
        title: 'Product_2'
      },
      {
        image: "https://picsum.photos/640/640?r="+Math.random(),
        price: Math.floor(Math.random()*1000),
        title: 'Product_3'
      },
      {
        image: "https://picsum.photos/640/640?r="+Math.random(),
        price: Math.floor(Math.random()*1000),
        title: 'Product_4'
      },
      {
        image: "https://picsum.photos/640/640?r="+Math.random(),
        price: Math.floor(Math.random()*1000),
        title: 'Product_5'
      },
      {
        image: "https://picsum.photos/640/640?r="+Math.random(),
        price: Math.floor(Math.random()*1000),
        title: 'Product_6'
      },
    ]
    this.productList.update(previoProduct => [...previoProduct, ...productsList])
  }


  fromChild(product: Product){
    this.cartService.addToCartSignal(product);
  }
}

import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);

  total = computed(()=>{
    const cart = this.cart();
    return cart.reduce((contador, product)=>{
      contador = contador + product.price;
      return contador;
    }, 0)
  })

  constructor() { }

  addToCartSignal(product: Product){
    console.log("Producto: ", product)
    this.cart.update(preview => [...preview, product])
  }
}

import { Component, Input, signal, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cartList = this.cartService.cart;

  hiddenSideMenu: boolean = true;
  totalPrice = this.cartService.total;

  toogleSideMenu(): void{
    this.hiddenSideMenu = !this.hiddenSideMenu;
  }
  deleteProductCart(product:Product){
    this.cartService.deleteToCart(product);
  }

}

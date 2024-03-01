import { Component, Input, signal, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges {
  @Input() cartList: Product[] = []

  hiddenSideMenu: boolean = true;
  totalPrice = signal<number>(0);


  ngOnChanges(changes: SimpleChanges): void{
    if(changes){
      const products = changes['cartList'].currentValue;
      let price = products.reduce((total: number, product: Product) => {
        return total = total + product.price;
      }, 0);
      this.totalPrice.set(price);

    }
  }

  toogleSideMenu(): void{
    this.hiddenSideMenu = !this.hiddenSideMenu;
  }

}

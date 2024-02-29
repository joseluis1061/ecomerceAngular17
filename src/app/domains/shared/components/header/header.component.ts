import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() cartList: Product[] = []

  hiddenSideMenu: boolean = true;

  toogleSideMenu(): void{
    this.hiddenSideMenu = !this.hiddenSideMenu;
  }

}

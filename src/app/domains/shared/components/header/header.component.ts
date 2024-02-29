import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleCart: boolean = true;

  onToggleCart (){
    console.log("Cambio", this.toggleCart)
    this.toggleCart = !this.toggleCart;
  }

}

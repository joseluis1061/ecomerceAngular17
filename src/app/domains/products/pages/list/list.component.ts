import { Component, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent  {
  img: string = "https://picsum.photos/640/640?r="+Math.random();


  fromChild(title: string){
    console.log("Product title", title);
  }
}

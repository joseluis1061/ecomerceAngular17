import { Component, OnChanges, OnInit, inject, AfterViewInit, signal, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Category, Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductsService } from '../../../shared/services/products.service';
import { CategoriesService } from '../../../shared/services/categories.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit, OnChanges {
  @Input() category_id?: string;
  private cartService = inject(CartService);
  private productService = inject(ProductsService);
  productList =signal<Product[]>([]);
  private categoriesService = inject(CategoriesService)
  categoryList = signal<Category[]>([])

  //img: string = "https://picsum.photos/640/640?r="+Math.random();


  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    const category_id = changes["category_id"]["currentValue"]
    this.filterProductCategory(category_id);
  }

  private getProducts(){
    this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.productList.set(products);
        },
        error: (error) => {
          console.error("Error en petición: ", error);
        }
      })
  }

  private filterProductCategory(categoryid: string){
    this.productService.getProducts(categoryid)
      .subscribe({
        next:(products) => {
          //console.log(products)
          this.productList.set(products)
        }
      })
  }

  private getCategories(){
    this.categoriesService.getAllCategory()
      .subscribe({
        next: (categories) => {
          this.categoryList.set(categories);
        },
        error: (error) => {
          console.error("Error en petición: ", error);
        }
      })
  }

  /*
  filterProductCategory(categoryid: number){
    this.categoriesService.getProductsByCategory(categoryid).subscribe({
      next:(product)=>{
        this.productList.set(product)
      }
    })
  }
  */
  fromChild(product: Product){
    this.cartService.addToCart(product);
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Product } from '../models/product.model';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private http = inject(HttpClient);
  url: string = "https://api.escuelajs.co/api/v1/categories";

  getAllCategory(){
    return this.http.get<Category[]>(`${this.url}`);
  }

  getProductsByCategory(idCategory: number){
    return this.http.get<Product[]>(`${this.url}/${idCategory}/products`)
    .pipe(
      map(products=> this.transformProducts(products))
    );
  }

  private transformProducts(products: Product[]): Product[] {
    return products.map(product => {
      // Realiza la transformación en cada producto aquí
      const transformedImages = product.images.map(image => {
        let modifiedImage = image.replace(/"/g, ''); // Elimina comillas dobles
        modifiedImage = modifiedImage.replace(/\[/g, '').replace(/\]/g, ''); // Elimina corchetes
        return modifiedImage;
      });

      return {
        ...product,
        images: transformedImages
      };
    });
  }

}

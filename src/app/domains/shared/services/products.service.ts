import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products= signal<Product[]>([]);
  url: string = "https://api.escuelajs.co/api/v1/products";
  private http = inject(HttpClient);

  getProducts(){
    return this.http.get<Product[]>(this.url).pipe(
      map(products => this.transformProducts(products))
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

import { Injectable, inject, signal } from '@angular/core';
import { Product, Category } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products= signal<Product[]>([]);
  url: string = "https://api.escuelajs.co/api/v1/products";
  private http = inject(HttpClient);

  getProducts(categoryId?: string){
    const urlParam = new URL(this.url);
    if(categoryId){
      urlParam.searchParams.set("categoryId", categoryId)
    }
    return this.http.get<Product[]>(urlParam.toString()).pipe(
      map(products => this.transformProducts(products))
    );
  }

  getProductId(id: string){
    return this.http.get<Product>(`${this.url}/${id}`).pipe(
      map(product => this.transformProduct(product))
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

  private transformProduct(product: Product): Product {
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

  }
}

import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products= signal<Product[]>([]);
  url: string = "https://api.escuelajs.co/api/v1/products";
  private http = inject(HttpClient);

  getProducts(){
    return this.http.get<Product[]>(this.url);
  }
}

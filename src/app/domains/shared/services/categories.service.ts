import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private http = inject(HttpClient);
  url: string = "https://api.escuelajs.co/api/v1/categories";

  getAllCategory(category: string){
    return this.http.get<Category[]>(`${this.url}`);
  }

}

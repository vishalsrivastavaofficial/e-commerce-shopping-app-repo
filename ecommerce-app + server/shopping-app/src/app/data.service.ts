import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './store/models/product.model';
import { Category } from './store/models/category.model';
import { Banner } from './store/models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseURL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.baseURL}/products`);
  }

  getCategories() {
    return this.http.get<Category[]>(`${this.baseURL}/categories`);
  }

  getBanners() {
    return this.http.get<Banner[]>(`${this.baseURL}/banners`);
  }
}

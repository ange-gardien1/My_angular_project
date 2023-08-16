import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './modules/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  data = "http://localhost:3000/product";


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.data);
  }
  getflowerDetails(productId: number): Observable<Products> {
    return this.http.get<Products>(`${this.data}/${productId}`);
  }
  deleteFlowerById (id: number): Observable <any>{
    return this.http.delete (`${this.data}/${id}`);
  }
  editFlower (Product: Products): Observable <Products>{
    return this.http.put<Products>(`${this.data}/${Product.id}`,Product);
  }
  addFlower(newProduct: Products): Observable<Products> {
    return  this.http.post<Products>(this.data, newProduct);
  }
  searchFlowerByName(name:string): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.data}/?q=${name}`);
  }
}

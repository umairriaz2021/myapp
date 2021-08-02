import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {ProductType} from './product-type'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private Http: HttpClient ) { }
  
  showAllProducts(){
    const url = "http://localhost:3000/products";
    return this.Http.get(url);
  }
  createProducts(productBody:ProductType){
    const url = "http://localhost::3000/products";
    return this.Http.post(url,productBody);
  }
  getProducts(productId:ProductType){
    const url = "http://localhost:3000/products?id="+productId;
    return this.Http.get(url);
  }
  updateProduct(productId:ProductType, productBody:ProductType){
    const url = "http://localhost::3000/products/"+productId;
    return this.Http.put(url,productBody);  
  }
  deleteProduct(productId:ProductType){
    const url = "http://localhost::3000/products/"+productId;
    return this.Http.delete(url);
  }
  searchProductByCat(categoryId:ProductType){
    const url = "http://localhost:3000/products?categoryId="+categoryId;
    return this.Http.get(url);
  }

  searchProductByDate(dateParams:ProductType){
    const url = "http://localhost::3000/products/date/"+dateParams;
    return this.Http.get(url);
  }
  getCategories():Observable<any>{
    const catUrl = "http://localhost:3000/categories";
    return this.Http.get(catUrl);
  }


}

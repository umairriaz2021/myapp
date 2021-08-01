import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface productType {
  productId: number,
  catId: number,
  productName: string,
  description: string,
  rating:string,
  price:number,
  productImage: string,
  isAvailable:boolean,
  color:string,
  review:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private Http: HttpClient ) { }
   
  createProducts(productBody:productType){
    const url = "http://localhost::3000/products";
    return this.Http.post<productType>(url,productBody);
  }
  getProducts(productId:productType){
    const url = "http://localhost::3000/products/"+productId;
    return this.Http.get<productType>(url);
  }
  updateProduct(productId:productType, productBody:productType){
    const url = "http://localhost::3000/products/"+productId;
    return this.Http.put<productType>(url,productBody);  
  }
  deleteProduct(productId:productType){
    const url = "http://localhost::3000/products/"+productId;
    return this.Http.delete<productType>(url);
  }
  searchProductByCat(catId:productType){
    const url = "http://localhost::3000/products/category/"+catId;
    return this.Http.get<productType>(url);
  }

  searchProductByDate(dateParams:productType){
    const url = "http://localhost::3000/products/date/"+dateParams;
    return this.Http.get<productType>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  constructor(private proService:ProductsService, private http: HttpClient ) { }
  productData:any = "";
  ngOnInit(): void {
    
  }
  addProduct(form:any){
    
    let products:any = {
      'id':4,
      'name':form.title,
      'description':form.desc,
      'rating': form.rating,
      'categoryId': form.allcats,
      'review':form.reviews,
      'vendor_name':form.vendors,
      'image':'',
      'is_available':form.is_available,
      'warranty':form.warranty  
    }
    //console.log(products);
    
    this.proService.createProducts(products).subscribe(data => console.log(data));
  
  }
  
}

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
  url:any = 'http://localhost:4200/assets/images/nd.png';
  imgName:any = '';
  onSelectFile(e:any){
    //this.imgName = e.target.files[0];
    var imgName = e.target.files[0];
    if(e.target.files){
    var reader =  new FileReader();
    
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event:any)=>{
          this.url = event.target.result;
    }
    }
  }
  ngOnInit(): void {
    
  }
  addProduct(form:any){
    
    let products:any = {
   
      'name':form.title,
      'description':form.desc,
      'rating': form.rating,
      'categoryId': form.allcats,
      'review':form.reviews,
      'vendor_name':form.vendors,
      'image':`http://localhost:4200/assets/images/`,
      'is_available':form.is_available,
      'warranty':form.warranty  
    }
     //console.log(products);
    
    this.proService.createProducts(products).subscribe(data => console.log(data));
  
  }
  
}

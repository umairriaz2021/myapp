import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private proService: ProductsService, private http: HttpClient, public commonService: CommonService) { }
  productData: any = "";
  url: any = 'http://localhost:4200/assets/images/nd.png';
  imgName: any = '';
  ngOnInit(): void {
  }
  addProduct(form: any) {
    let products: any = {
      'name': form.title,
      'description': form.desc,
      'rating': form.rating,
      'categoryId': form.allcats,
      'review': form.reviews,
      'vendor_name': form.vendors,
      'image': this.url,
      'is_available': form.is_available,
      'warranty': form.warranty
    }
    //console.log(products);
    this.proService.createProducts(products).subscribe(data => console.log(data));
  }
  onSelectFile(e: any) {
    debugger
    let a = this.commonService.convertToBase64(e);
     this.url = a;
    // if (e.target.files) {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(e.target.files[0]);
    //   reader.onload = (event: any) => {
    //     this.url = reader.result;
    //   }
    // }
  }
}

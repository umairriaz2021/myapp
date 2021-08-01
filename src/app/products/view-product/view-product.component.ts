import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private proService: ProductsService) { }
  ProductID:any = 0;
  proData:any = "";
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data =>this.ProductID = data.id);
    this.proService.getProducts(this.ProductID).subscribe(data => this.proData = data);
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  productId = 0;
  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => this.productId = data.id);  
    
  }

}

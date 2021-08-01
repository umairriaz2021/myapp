import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
  ProductID = 0;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data =>this.ProductID = data.id);
  }

}

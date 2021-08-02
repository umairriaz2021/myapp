import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.css']
})
export class ViewProductsByCategoryComponent implements OnInit {
  searchCategory:any = "";
  catList:any = "";
  constructor(private activeRoute: ActivatedRoute, private proService: ProductsService ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
    this.searchCategory = data.id;
    this.proService.searchProductByCat(this.searchCategory).subscribe(categories => {
      this.catList = categories;
    });
    
  });  

 
  
  }

}

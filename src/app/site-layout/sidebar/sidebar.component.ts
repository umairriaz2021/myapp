import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
catList:any = "";
  constructor(private proService: ProductsService) { }

  ngOnInit(): void {
    this.proService.getCategories().subscribe(data => this.catList = data);
  }

}

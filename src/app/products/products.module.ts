import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import {SiteLayoutModule} from '../site-layout/site-layout.module';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductsComponent,
    ViewProductsByDateComponent,
    ViewProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SiteLayoutModule
  ],
  exports:[
    ProductsComponent,
    ViewProductComponent,
    ViewAllProductsComponent
  ]
})
export class ProductsModule { }

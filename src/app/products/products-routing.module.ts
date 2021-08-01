import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'add-products', component: AddProductComponent },
  { path: 'view-products/:id', component: ViewProductComponent},
  { path: 'update-products/:id', component: UpdateProductComponent},
  { path: 'delete-product', component: DeleteProductComponent},
  { path: 'search-by-category/:id', component: ViewProductsByCategoryComponent},
  { path: 'search-by-date', component: ViewProductsByDateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

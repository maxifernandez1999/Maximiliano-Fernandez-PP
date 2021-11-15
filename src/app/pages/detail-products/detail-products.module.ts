import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { EatablePipe } from 'src/app/shared/pipes/eatable.pipe';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [
    DetailProductsComponent,
    ProductsTableComponent,
    EatablePipe,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailProductsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { EatablePipe } from 'src/app/shared/pipes/eatable.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { OriginComponent } from './components/origin/origin.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DetailProductsComponent,
    ProductsTableComponent,
    EatablePipe,
    DetailComponent,
    OriginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DetailProductsModule { }

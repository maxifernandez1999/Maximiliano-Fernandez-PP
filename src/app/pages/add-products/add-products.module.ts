import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddProductsComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AddProductsModule { }

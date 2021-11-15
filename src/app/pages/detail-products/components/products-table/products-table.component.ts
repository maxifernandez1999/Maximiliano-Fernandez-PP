import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {this.getProducts()}

  public getProducts(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductService, private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  public sendDataToCommunicatorService(product:Product):void{
    this.communicatorService.setData(product);
  }
}

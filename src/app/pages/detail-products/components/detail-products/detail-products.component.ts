import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
})
export class DetailProductsComponent implements OnInit {
  public products: Product[] = [];
  constructor() {}

  ngOnInit(): void {}

}

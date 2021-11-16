import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss'],
})
export class OriginComponent implements OnInit {
  public product: Product;
  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.getDataToCommunicatorService();
  }
  public getDataToCommunicatorService(): void {
    this.communicatorService.communicator$.subscribe((response) => {
      this.product = response;
    });
  }
}

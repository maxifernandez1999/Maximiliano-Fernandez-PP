import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public product: Product;
  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {this.getDataToCommunicatorService()}

  public getDataToCommunicatorService(): void {
    this.communicatorService.communicator$.subscribe((response) => {
      this.product = response;
    });
  }
}

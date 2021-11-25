import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/shared/models/container';
import { ContainerService } from 'src/app/shared/services/container.service';
import Swal from'sweetalert2';
@Component({
  selector: 'app-load-container',
  templateUrl: './load-container.component.html',
  styleUrls: ['./load-container.component.scss']
})
export class LoadContainerComponent implements OnInit {
  container:Container;
  containers: Container[] = [];
  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.getContainers();
  }
  public getContainers(): void {
    this.containerService.getContainer().subscribe((response) => {
      response.forEach((res) => {
        let container: Container = {
          id: res.id,
          code: res.data().code,
          mark: res.data().mark,
          lot: res.data().lot,
        };
        this.containers.push(container);
      });
    });
  }
  public loadProducts(container:Container){
    this.container = container;
  }

}

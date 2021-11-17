import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/shared/models/container';
import { ContainerService } from 'src/app/shared/services/container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  containers: Container[] = [];
  currentContainer: Container;
  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {
    this.getContainers();
  }
  public getDataToCreateComponent(event:Container):void{
    this.containers.push(event);
  }
  public updateDeleteContainer(container:Container):void{
    this.currentContainer = container;
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
}

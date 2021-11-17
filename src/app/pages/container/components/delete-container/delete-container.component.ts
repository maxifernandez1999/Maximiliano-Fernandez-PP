import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/shared/models/container';
import { ContainerService } from 'src/app/shared/services/container.service';

@Component({
  selector: 'app-delete-container',
  templateUrl: './delete-container.component.html',
  styleUrls: ['./delete-container.component.scss'],
})
export class DeleteContainerComponent implements OnInit {
  @Input('dataToContainerComponent') dataToContainerComponent: Container;

  code: string;
  disable: boolean = true;
  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    if (this.dataToContainerComponent !== undefined) {
      this.code = this.dataToContainerComponent.code;
      this.disable = false;
    }
  }
  public deleteContainer():void{
    this.containerService.deleteContainer(this.dataToContainerComponent.id).then(response => {
      alert('Deleted');
      window.location.reload();
    }).catch(error => {
      console.log(error);
    })
  }
  public cancel():void{
    alert('Cancel');
    window.location.reload();
  }
}

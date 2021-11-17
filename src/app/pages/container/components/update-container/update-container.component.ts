import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/shared/models/container';
import { ContainerService } from 'src/app/shared/services/container.service';

@Component({
  selector: 'app-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.scss']
})
export class UpdateContainerComponent implements OnInit, OnChanges {
  @Input('dataToContainerComponent') dataToContainerComponent:Container; 
  containerUpdateForm: FormGroup;
  container:Container;
  constructor(
    private fb: FormBuilder,
    private containerService: ContainerService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  ngOnChanges():void{
    this.setDataToContainer(this.dataToContainerComponent);
  }
  get markValue(): string {
    return this.containerUpdateForm.get('mark').value;
  }
  get lotValue(): string {
    return this.containerUpdateForm.get('lot').value;
  }
  public get form(): any {
    return this.containerUpdateForm.controls;
  }
  initForm() {
    this.containerUpdateForm = this.fb.group({
      mark: ['', [Validators.required, Validators.maxLength(30)]],
      lot: ['', [Validators.required, Validators.max(99999)]],
    });
  }
  public setDataToContainer(container:Container):void{
    if(this.containerUpdateForm !== undefined){
      this.containerUpdateForm.setValue({
        mark: this.dataToContainerComponent.mark,
        lot:  this.dataToContainerComponent.lot
      });
    }
  }
  public updateContainer(): void {
    this.container = {
      code: "",
      mark: this.markValue,
      lot: this.lotValue,
    };
    this.containerService.updateContainer(this.container,this.dataToContainerComponent.id).then(response => {
      window.location.reload();
    }).catch(error => {
      console.log(error);
    })
  }

}

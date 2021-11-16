import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/shared/models/container';
import { ContainerService } from 'src/app/shared/services/container.service';

@Component({
  selector: 'app-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.scss']
})
export class UpdateContainerComponent implements OnInit {
  @Input('dataToContainerComponent') dataToContainerComponent:Container; 
  containerUpdateForm: FormGroup;
  container:Container;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.setDataToContainer(this.dataToContainerComponent);
  }
  get codeValue(): string {
    return this.containerUpdateForm.get('code').value;
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
      code: ['', [Validators.required, Validators.minLength(6)]],
      mark: ['', [Validators.required, Validators.maxLength(30)]],
      lot: ['', [Validators.required, Validators.max(99999)]],
    });
  }
  public setDataToContainer(container:Container):void{
    // this.containerUpdateForm.setValue({
    //   code: "container.code",
    //   mark:" container.mark",
    //   lot:  "container.lot"
    // });
  }
  public updateContainer(): void {
    this.container = {
      code: this.codeValue,
      mark: this.markValue,
      lot: this.lotValue,
    };
    // this.containerService.updateContainer(this.container).then(response => {
    //   console.log(response);
    // }).catch(error => {
    //   console.log(error);
    // })
  }

}

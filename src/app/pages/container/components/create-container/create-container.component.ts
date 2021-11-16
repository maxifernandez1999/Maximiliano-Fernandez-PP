import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/shared/models/container';
import { ContainerService } from 'src/app/shared/services/container.service';

@Component({
  selector: 'app-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss'],
})
export class CreateContainerComponent implements OnInit {
  containerForm: FormGroup;
  container:Container;
  @Output() sendDataToContainerComponent:any = new EventEmitter<Container>();
  constructor(
    private fb: FormBuilder,
    private containerService: ContainerService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  private emit():void{
    this.sendDataToContainerComponent.emit(this.container);
  }
  get codeValue(): string {
    return this.containerForm.get('code').value;
  }
  get markValue(): string {
    return this.containerForm.get('mark').value;
  }
  get lotValue(): string {
    return this.containerForm.get('lot').value;
  }
  public get form(): any {
    return this.containerForm.controls;
  }
  initForm() {
    this.containerForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]],
      mark: ['', [Validators.required, Validators.maxLength(30)]],
      lot: ['', [Validators.required, Validators.max(99999)]],
    });
  }
  public addContainer(): void {
    this.container = {
      code: this.codeValue,
      mark: this.markValue,
      lot: this.lotValue,
    };
    this.containerService.addContainer(this.container).then(response => {
      this.emit();
    }).catch(error => {
      console.log(error);
    })
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { CreateContainerComponent } from './components/create-container/create-container.component';
import { UpdateContainerComponent } from './components/update-container/update-container.component';
import { DeleteContainerComponent } from './components/delete-container/delete-container.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContainerComponent,
    CreateContainerComponent,
    UpdateContainerComponent,
    DeleteContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContainerModule { }

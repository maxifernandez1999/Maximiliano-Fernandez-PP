import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadContainerComponent } from './components/load-container/load-container.component';
import { ContainerModule } from '../container/container.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalLoadComponent } from './components/modal-load/modal-load.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoadContainerComponent,
    ModalLoadComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LoadContainerModule { }

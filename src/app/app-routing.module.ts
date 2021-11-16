import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './pages/add-products/components/add-products/add-products.component';
import { ContainerComponent } from './pages/container/components/container/container.component';
import { DetailProductsComponent } from './pages/detail-products/components/detail-products/detail-products.component';
import { LoginComponent } from './pages/login/components/login/login.component';
import { WelcomeComponent } from './pages/welcome/components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add',
    component: AddProductsComponent
  },
  {
    path: 'detail',
    component: DetailProductsComponent
  },
  {
    path: 'container',
    component: ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

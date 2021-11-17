import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './pages/add-products/components/add-products/add-products.component';
import { ContainerComponent } from './pages/container/components/container/container.component';
import { DetailProductsComponent } from './pages/detail-products/components/detail-products/detail-products.component';
import { LoginComponent } from './pages/login/components/login/login.component';
import { WelcomeComponent } from './pages/welcome/components/welcome/welcome.component';
import { AuthGuard } from './shared/guards/auth.guard';

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
    component: AddProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail',
    component: DetailProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'container',
    component: ContainerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

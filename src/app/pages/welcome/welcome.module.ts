import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GithubTableComponent } from './components/github-table/github-table.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    GithubTableComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HttpClientModule
  ]
})
export class WelcomeModule { }

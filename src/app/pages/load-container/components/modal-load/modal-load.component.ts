import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/shared/models/container';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-modal-load',
  templateUrl: './modal-load.component.html',
  styleUrls: ['./modal-load.component.scss']
})
export class ModalLoadComponent implements OnInit {
  @Input('containerInput') containerInput:Container;
  products:Product[] = [];
  containerAddForm:FormGroup;
  constructor(private productService: ProductService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    this.getProducts();
  }
  public getProducts(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  public get form(): any {
    return this.containerAddForm.controls;
  }
  ngOnChanges():void{
    this.initForm();
  }
  initForm() {
    if (this.containerInput === undefined) {
      this.containerAddForm = this.fb.group({
        quantity: ['', [Validators.required, Validators.max(10000)]]
      });
    }else{
      this.containerAddForm = this.fb.group({
        quantity: ['', [Validators.required, Validators.max(parseInt(this.containerInput.lot))]]
      });
    }
    
  }

}

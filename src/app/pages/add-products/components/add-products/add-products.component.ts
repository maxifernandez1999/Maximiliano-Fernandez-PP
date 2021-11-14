import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  productsForm: FormGroup;
  constructor(private fb: FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {this.initForm()}
  initForm() {
    this.productsForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.maxLength(30)]],
      price: ['', [Validators.required, Validators.max(99999)]],
      stock: ['', [Validators.required]],
      eatable: ['', [Validators.required]],
      origin: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }
  get codeValue(): string {
    return this.productsForm.get('code').value;
  }
  get descriptionValue(): string {
    return this.productsForm.get('description').value;
  }
  get priceValue(): string {
    return this.productsForm.get('price').value;
  }
  get stockValue(): string {
    return this.productsForm.get('stock').value;
  }
  get eatableValue(): boolean {
    return this.productsForm.get('eatable').value;
  }
  get originValue(): string {
    return this.productsForm.get('origin').value;
  }
  public get form(): any {
    return this.productsForm.controls;
  }
  public addProduct():void{
    let product:Product = {
      code: this.codeValue,
      description: this.descriptionValue,
      price: this.priceValue,
      stock: this.stockValue,
      origin: this.originValue,
      eatable: this.eatableValue
    }
    console.log(product);
    this.productService.addProduct(product).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

}

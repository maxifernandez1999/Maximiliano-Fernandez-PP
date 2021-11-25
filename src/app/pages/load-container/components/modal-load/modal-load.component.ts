import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/shared/models/container';
import { Product } from 'src/app/shared/models/product';
import { ContainerService } from 'src/app/shared/services/container.service';
import { ProductService } from 'src/app/shared/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-load',
  templateUrl: './modal-load.component.html',
  styleUrls: ['./modal-load.component.scss'],
})
export class ModalLoadComponent implements OnInit {
  @Input('containerInput') containerInput: Container;
  products: Product[] = [];
  stockProduct: string;
  productID: string;
  containerAddForm: FormGroup;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private containerService: ContainerService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getProducts();
  }
  // public getProducts(): void {
  //   this.productService.getProductWithID().subscribe((response) => {
  //     this.products = response;
  //   });
  // }
  public getProducts(): void {
    this.productService.getProductWithID().subscribe((response) => {
      response.forEach((res) => {
        let product: Product = {
          id: res.id,
          code: res.data().code,
          description: res.data().description,
          price: res.data().price,
          stock: res.data().stock,
          eatable: res.data().eatable,
          origin: res.data().origin,
          pathOrigin: res.data().pathOrigin,
        };
        this.products.push(product);
      });
    });
  }
  public getProductStock(): void {
    this.products.filter((product) => {
      if (product.code === this.selectValue) {
        this.stockProduct = product.stock;
        this.productID = product.id;
      }
    });
  }
  public get form(): any {
    return this.containerAddForm.controls;
  }
  get quantityValue(): string {
    return this.containerAddForm.get('quantity').value;
  }
  get selectValue(): string {
    return this.containerAddForm.get('codeProduct').value;
  }
  ngOnChanges(): void {
    this.initForm();
  }
  initForm() {
    if (this.containerInput === undefined) {
      this.containerAddForm = this.fb.group({
        quantity: ['', [Validators.required, Validators.max(10000)]],
        codeProduct: ['', [Validators.required]],
      });
    } else {
      this.containerAddForm = this.fb.group({
        quantity: [
          '',
          [
            Validators.required,
            Validators.max(parseInt(this.containerInput.lot)),
          ],
        ],
        codeProduct: ['', [Validators.required]],
      });
    }
  }
  public addStockContainer(): void {
    let stock: string = this.quantityValue;
    this.getProductStock();
    if (parseInt(this.stockProduct) < parseInt(stock)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There is no stock available for this product',
      });
    } else {
      let newStock: string = stock;
      let stockProductNew: number =
        parseInt(this.stockProduct) - parseInt(stock);
      let newLot: number = parseInt(this.containerInput.lot) - parseInt(stock);
      this.containerService
        .updateContainerWithStock(
          this.containerInput.id,
          newLot.toString(),
          newStock
        )
        .then((response) => {
          this.productService
            .updateProduct(this.productID, stockProductNew.toString())
            .then((response) => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'The products have been added to the container',
                showConfirmButton: false,
                timer: 1500,
              });
            });
        });
    }
  }
}

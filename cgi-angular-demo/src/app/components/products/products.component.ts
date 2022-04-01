import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsServices} from "../../resources/products.services";
import {Product, ProductRequest} from "../../resources/products.types";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  /* -- CONSTRUCTOR -- */

  constructor(

    protected _productServices: ProductsServices
  ) {}

  /* -- PROPERTIES -- */

  public form: FormGroup = new FormGroup({
      description: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    },
    {updateOn: 'change'}
  );
  public products: Product[] = [];

  private _editing = false;


/* -- PUBLIC METHODS -- */

  public ngOnInit(): void {
    this._retrieveProducts();
  }

  // public openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  // }
  public onProductEdit(product: Product): void {
    this._editing = true;

    this.form.patchValue({
      description: product.description,
      name: product.name,
      price: product.price
    })
  }

  public onProductRemove(product: Product): void {
    if (product && product.id)
      this._productServices.removeProduct().subscribe(() => this._retrieveProducts());
    console.log(product)
  }

  public onSubmit(): void {
    const body: ProductRequest = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price
    };

    if (this._editing) {


      this._productServices.updateProduct(body).subscribe(() => {

        this._retrieveProducts();
      });
    } else {
      this._productServices.createProduct(body).subscribe(() => {

        this._retrieveProducts()
      });
    }


  }


  /* -- PRIVATE METHODS -- */

  private _getProducts(): void {
    this.products = this._productServices.products;
  }

  private _retrieveProducts(): void {
    this._productServices.retrieveProducts().subscribe(() => this._getProducts());
  }

  // private _triggerSnackBar(message: string): void {
  //   this._snackBar._openedSnackBarRef
  // }


}

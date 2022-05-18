import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../resources/products.types";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  /* -- CONSTRUCTOR -- */

  constructor() { }

  /* -- EVENTS -- */

  @Output() productEdit = new EventEmitter<Product>();
  @Output() productRemove = new EventEmitter<Product>();

  /* -- PROPERTIES -- */
  @Input() public product?: Product;

  /* -- PUBLIC METHODS -- */

 public ngOnInit(): void {}

  public onProductRemove(): void{
   this.productRemove.emit(this.product)
  }

  public onProductEdit(): void {
   this.productEdit.emit(this.product)
  }
}

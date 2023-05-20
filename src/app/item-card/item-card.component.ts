import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() product: any;
  @Input() productsCart: any[]
  @Input() selectedCurrency: string;
  @Output() addToCartClicked: EventEmitter<any> = new EventEmitter<any>();
  quantity: number = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    for (let i = 0; i < this.quantity; i++) {
    this.productsCart.push(this.product);
  }
  this.quantity=1;
  alert("Se han añadido productos a su carro");
}
}
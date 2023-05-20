import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  @Input() productsCart: any[]; // Propiedad de entrada para el array de productos
  @Output() volverClickeado = new EventEmitter<void>();

  // Resto del código...

  removeFromCart(item: any) {
    // Quitar el producto del array de productos
    const index = this.productsCart.indexOf(item);
    if (index !== -1) {
      this.productsCart.splice(index, 1);
    }
  }

  // Resto del código...
}
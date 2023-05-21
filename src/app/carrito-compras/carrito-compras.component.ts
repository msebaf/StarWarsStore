import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent {
  @Input() productsCart: any[]; 
  @Output() volverClickeado = new EventEmitter<void>();
  montoTotal: number = 0;

  ngOnInit() {
    
    this.calculateMontoTotal();
  }

  removeFromCart(item: any) {
    
    const index = this.productsCart.indexOf(item);
    if (index !== -1) {
      this.productsCart.splice(index, 1);
      
      this.calculateMontoTotal();
    }
  }

  calculateMontoTotal() {
    this.montoTotal = 0;
    for (let i = 0; i < this.productsCart.length; i++) {
      this.montoTotal += this.productsCart[i].price;
    }
  }

  compraExitosa() {
    alert('Compra realizada con éxito');
    while(this.productsCart.length > 0) {
      this.removeFromCart(this.productsCart[0]);
    }
    
    
  }
}
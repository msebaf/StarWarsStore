import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Output() carritoClickeado: EventEmitter<void> = new EventEmitter<void>();
  @Input() productsCart: any[]

  onCarritoClick() {
    this.carritoClickeado.emit();
  }
}
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Output() toggleCart = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendToggleCart() {
    this.toggleCart.emit();
  }
}

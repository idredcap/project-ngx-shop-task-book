import {Component, Input, EventEmitter, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls:   ['./shop-card.component.scss']
})
export class ShopCardComponent {
  @Input()  public product: ICartProduct = {} as ICartProduct;
  @Output() public increment = new EventEmitter();
  @Output() public decrement = new EventEmitter();

  public decrementProductInCart(): void {
    this.decrement.emit();
  }

  public incrementProductInCart(): void {
    this.increment.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'shared/mocks/1-components/product';
// import { Ipro } from '../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() public product: IProduct = {} as IProduct;
  @Output() public goToProduct: EventEmitter<any> = new EventEmitter();

  public redirectTo(): void {
    this.goToProduct.emit('Переход на компонент товара');
  }
}

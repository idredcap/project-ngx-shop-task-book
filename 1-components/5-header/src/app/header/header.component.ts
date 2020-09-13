import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Output() goToBasket: EventEmitter<any> = new EventEmitter<any>();
  public counter = 5;

  public redirectTo(): void {
    this.goToBasket.emit();
  }
}

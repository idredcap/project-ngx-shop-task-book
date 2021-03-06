import {
  ICategory,
  ISubCategory,
} from './../../../../../shared/interfaces/categories.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  public currentIndex: number | null = null;

  public hover(index: number): void {
    this.currentIndex = index;
  }
  public categorySelect(): void {}
}

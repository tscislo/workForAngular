import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ],
  declarations: [ShoppingListComponent]
})
export class ShoppingListModule { }

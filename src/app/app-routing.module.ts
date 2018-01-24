import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'shopping-list',
      loadChildren: './ui/shopping-list/shopping-list.module#ShoppingListModule'
    },
    {
        path: 'user',
        loadChildren: './ui/user/user.module#UserModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

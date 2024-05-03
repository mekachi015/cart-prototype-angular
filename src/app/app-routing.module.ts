import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [

  {path: 'cart', component: CartPageComponent},
  {path: 'products', component: ProductsPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

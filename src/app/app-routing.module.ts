import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MovieCategoriesComponent } from './movie-categories/movie-categories.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  // {path: 'categories',
  //   children: [
  //     { path: ':id',
  //       children: [
  //         {
  //           path: '',
  //           component: MovieCategoriesComponent,
  //         },
  //         {
  //           path: 'action/:id'
  //         },
  //         {
  //           path: 'thriller/:id'
  //         },
  //         {
  //           path: 'comedy/:id'
  //         },
  //         {
  //           path: 'sci-fi/:id'
  //         }
  //       ]}
  //   ]},
  {path: 'categories/:id', component: MovieCategoriesComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'check-out', component: CheckoutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80] // [x, y]
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

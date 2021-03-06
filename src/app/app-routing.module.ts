import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MovieCategoriesComponent } from './movie-categories/movie-categories.component';
import { MovieComponent } from './movie/movie.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {path: 'categories/:id', component: MovieCategoriesComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'admin', component: AdminPageComponent},
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

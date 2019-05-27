import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCategoriesComponent } from './movie-categories/movie-categories.component';
import { MovieComponent } from './movie/movie.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ShoppingCardService } from './service/shopping-card.service';
import { CounterComponent } from './counter/counter.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    PageNotFoundComponent,
    MovieCategoriesComponent,
    MovieComponent,
    ProductModalComponent,
    CounterComponent,
    RegisterFormComponent,
    HeroImageComponent,
    AdminPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [ ShoppingCardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

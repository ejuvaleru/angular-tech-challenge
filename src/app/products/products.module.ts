import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

import { ProductcardComponent } from './components/productcard/productcard.component';
import { CountryPopupComponent } from '../shared/components/country-popup/country-popup.component';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, ProductcardComponent, CountryPopupComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,      
    NgbModule,
    TranslateModule
  ],
})
export class ProductsModule { }

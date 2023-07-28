import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { ListingComponent } from './listing/listing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    ListingComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    ListingComponent,
  ],
})
export class SharedModule {}

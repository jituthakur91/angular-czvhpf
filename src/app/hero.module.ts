import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListingComponent } from './components/hero-listing/hero-listing.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroRoutingModule } from './components/hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule
  ],
  declarations: [HeroListingComponent, HeroDetailComponent]
})
export class HeroModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListingComponent } from './hero-listing/hero-listing.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    { path: '', component: HeroListingComponent },
    { path: 'details', component: HeroDetailComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [NotFoundComponent]
})
export class HeroRoutingModule { }

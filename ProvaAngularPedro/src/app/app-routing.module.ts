import { PricingComponent } from './pricing/pricing.component';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { IndexComponent } from './index/index.component';
import { BlocksComponent } from './blocks/blocks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent },
  {
  path: 'index',
  component: IndexComponent },

{path: 'blocks',
component: BlocksComponent },

{path: 'cards',
component:  CardsComponent },

{path: 'forms',
component: FormsComponent },

{path: 'pricing',
component: PricingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

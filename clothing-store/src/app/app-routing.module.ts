import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagsComponent } from './categories/bags/bags.component';
import { TopsComponent } from './categories/tops/tops.component';
import { BottomsComponent } from './categories/bottoms/bottoms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bags' },
  {
    path: 'bags',
    component: BagsComponent,
    title: 'Bags | Clothing Store',
  },
  {
    path: 'tops',
    component: TopsComponent,
    title: 'Tops | Clothing Store',
  },
  {
    path: 'bottoms',
    component: BottomsComponent,
    title: 'Bottoms | Clothing Store',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

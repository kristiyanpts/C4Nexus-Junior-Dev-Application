import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagsComponent } from './categories/bags/bags.component';
import { TopsComponent } from './categories/tops/tops.component';
import { BottomsComponent } from './categories/bottoms/bottoms.component';
import { WatchesComponent } from './categories/watches/watches.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bags' },
  {
    path: 'bags',
    component: BagsComponent,
  },
  {
    path: 'tops',
    component: TopsComponent,
  },
  {
    path: 'bottoms',
    component: BottomsComponent,
  },
  {
    path: 'watches',
    component: WatchesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

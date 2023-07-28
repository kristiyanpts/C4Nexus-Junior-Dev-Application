import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagsComponent } from './bags/bags.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { WatchesComponent } from './watches/watches.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BagsComponent,
    TopsComponent,
    BottomsComponent,
    WatchesComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class CategoriesModule {}

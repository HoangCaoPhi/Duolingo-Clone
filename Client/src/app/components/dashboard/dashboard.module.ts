import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DxButtonModule, DxProgressBarModule, DxTextAreaModule } from 'devextreme-angular';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';


@NgModule({
  declarations: [DashboardComponent, StoriesDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxButtonModule,
    DxTextAreaModule,
    DxProgressBarModule
  ]
})
export class DashboardModule { }

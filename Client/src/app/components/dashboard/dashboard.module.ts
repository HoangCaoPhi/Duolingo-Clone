import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DxButtonModule, DxCheckBoxModule, DxProgressBarModule, DxTextAreaModule, DxTooltipModule } from 'devextreme-angular';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, StoriesDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxButtonModule,
    DxTextAreaModule,
    DxProgressBarModule,
    DxTooltipModule,
    DxCheckBoxModule,
    SharedModule
  ]
})
export class DashboardModule { }

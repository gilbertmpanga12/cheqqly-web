import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {  MatCardModule,
  MatIconModule, MatButtonModule, MatDividerModule,
  MatTooltipModule
  } from '@angular/material';
const dashboardRoutes: Routes = [{
path: '',
component: DashboardComponent
}];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(dashboardRoutes),
    MatCardModule,
  MatIconModule, MatButtonModule, MatDividerModule,
  MatTooltipModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

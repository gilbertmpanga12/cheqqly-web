import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotificationsComponent} from './notifications.component';
import {  MatCardModule,
  MatIconModule, MatButtonModule, MatTableModule,
  MatPaginatorModule, MatDividerModule, MatProgressSpinnerModule
  } from '@angular/material';
const notsRoutes: Routes = [{
path: '',
component: NotificationsComponent
}];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(notsRoutes),
    MatCardModule,
    MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule,
    MatDividerModule, MatProgressSpinnerModule
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WithdrawComponent} from './withdraw.component';
import {  MatCardModule,
  MatIconModule, MatButtonModule, MatDividerModule, MatInputModule,
  MatFormFieldModule, MatSelectModule, MatProgressBarModule
  } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
const withdrawRoutes: Routes = [{
path: '',
component: WithdrawComponent
}];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(withdrawRoutes),
    MatCardModule,
    MatIconModule, MatButtonModule, MatDividerModule,
    MatInputModule,
    MatFormFieldModule, ReactiveFormsModule,
    MatSelectModule, MatProgressBarModule
  ],
  declarations: [WithdrawComponent]
})
export class WithdrawModule { }

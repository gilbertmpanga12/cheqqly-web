import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {  MatCardModule,
  MatIconModule, MatButtonModule, MatDividerModule,
  MatInputModule, MatFormFieldModule, MatProgressSpinnerModule
  } from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

const settingsRoutes: Routes = [{
path: '',
component: SettingsComponent
}];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(settingsRoutes),
    MatCardModule,
    MatIconModule, MatButtonModule, MatDividerModule,
    MatInputModule, MatFormFieldModule,
    ReactiveFormsModule, MatProgressSpinnerModule, FormsModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }

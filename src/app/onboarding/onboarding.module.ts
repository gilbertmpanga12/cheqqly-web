import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnboardingComponent} from './onboarding.component';
import {Routes, RouterModule} from '@angular/router';
import {MatStepperModule,
  MatButtonModule, MatCardModule,
  MatFormFieldModule, MatInputModule,
  MatProgressBarModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

const onboardingRoutes: Routes = [{
path: '',
component: OnboardingComponent
}];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(onboardingRoutes),
    MatStepperModule, MatButtonModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, MatProgressBarModule,
    MatSelectModule
  ],
  declarations: [OnboardingComponent]
})
export class OnboardingModule { }

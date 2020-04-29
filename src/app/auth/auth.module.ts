import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SigUpComponent } from './sig-up/sig-up.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {MainserviceService} from '../services/mainservice.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule,  MatCardModule,
  MatDividerModule, MatInputModule,
  MatFormFieldModule, MatIconModule,
  MatButtonModule, MatProgressBarModule} from '@angular/material';
const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: '',
      component: SignInComponent
    }, {
      path: 'register',
      component: SigUpComponent
    }]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(AuthRoutes),
    AngularFireAuthModule, ReactiveFormsModule,
    MatToolbarModule,  MatCardModule,
    MatDividerModule, MatInputModule, MatFormFieldModule,
    MatIconModule, MatButtonModule, MatProgressBarModule
  ],
  declarations: [AuthComponent, SignInComponent, SigUpComponent],
  providers: [MainserviceService]
})
export class AuthModule { }

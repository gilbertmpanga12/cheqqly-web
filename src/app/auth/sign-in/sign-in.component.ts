import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../../services/mainservice.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInGroup: FormGroup;
  year: any = new Date().getFullYear();
  showSignIn: boolean = true;
  showLoader: boolean = false;
  constructor(private service: MainserviceService, private fb: FormBuilder,
    private router: Router, private af: AngularFireAuth) { }

  ngOnInit() {
    this.showLoader = !!localStorage.getItem('showLoader');
    this.af.authState.subscribe(user => {
      if (user !== null && user.metadata.creationTime == user.metadata.lastSignInTime) {
        this.router.navigate(['/welcome']);
        // user.getIdTokenResult().then(result => {
        //  localStorage.setItem('projectName', `${result.claims.currentProject}`);
        //  });
      } else if (user !== null && user.metadata.creationTime !== user.metadata.lastSignInTime) {
          this.router.navigate(['/app']);
      }
    });
    this.signInGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  signinAccount() {

    this.setLoader('true');
    const formData: any = this.signInGroup.getRawValue();
    this.service.signInUserWithEmail(formData.email, formData.password).then(() => {
     this.router.navigate(['/app']);
    }).catch(error => {
      this.removeLoader();
      alert(error.message);
    });
  }
  gmailLogin() {
    this.setLoader('true');
    return this.service.googleSignIn().then(() => {
      this.router.navigate(['/app']);
    }).catch(err => {
      this.removeLoader();
      alert(err.message);
    });

  }
  setLoader(val) {
    this.showLoader = true;
    localStorage.setItem('showLoader', val);
 }
 removeLoader(): void {
   this.showLoader = false;
   localStorage.removeItem('showLoader');
 }
}

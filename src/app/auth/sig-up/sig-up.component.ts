import { Component, OnInit } from '@angular/core';
import { MainserviceService } from '../../services/mainservice.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.css']
})
export class SigUpComponent implements OnInit {
  signUpGroup: FormGroup;
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
    this.signUpGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  registeUser(): void{
    this.setLoader('true');
    const formData: any = this.signUpGroup.getRawValue();
   this.service.signUpWithEmail(formData.email, formData.password).then(() => {
    this.router.navigate(['/app']);
   }).catch(error => {
     this.removeLoader();
     alert(error.message);
   });
  }
  setLoader(val): void {
    this.showLoader = true;
    localStorage.setItem('showLoader', val);
 }
 removeLoader(): void {
   this.showLoader = false;
   localStorage.removeItem('showLoader');
 }
 gmailLogin(): Promise<any> {
  this.setLoader('true');
  return this.service.googleSignIn().then(() => {
    this.router.navigate(['/app']);
  }).catch(err => {
    this.removeLoader();
    alert(err.message);
  });

}
}

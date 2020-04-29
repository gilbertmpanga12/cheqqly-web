import { Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
// import {trigger, animate, style, group, query, transition} from '@angular/animations';
import {Router} from '@angular/router';
import {MainserviceService} from '../services/mainservice.service';
import { MatStepper } from '@angular/material/stepper';
import {countries} from './countries';
// import {MatStepperNext} from '@angular/material';
/*
animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.2s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
            ], { optional: true }),
            // and now reveal the enter
            query(':enter', animate('0.2s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
    ])
    ])
  ]
*/
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: [
'./onboarding.component.css'
  ]
})
export class OnboardingComponent implements OnInit {
  isDoneOnBoarding: boolean = true;
  profileGroup: FormGroup;
  countries: any = countries;
  @ViewChild('ref') stepper: MatStepper;
  showLoader: boolean = false;
constructor(private fb: FormBuilder,
  private router: Router, private service: MainserviceService) {

}
ngOnInit() {
this.profileGroup = this.fb.group({
firstName: ['', Validators.required],
lastName: ['', Validators.required],
businessName: ['', Validators.required],
country: ['', Validators.required]
});

}

closeStepper() {
  this.isDoneOnBoarding = false;
}
gotoDashboard(): void{
this.router.navigate(['/app']);
}
makeProfile(){
  this.showLoader = true;
  const formData = this.profileGroup.getRawValue();
  this.service.createAccountProfile(formData).subscribe((results: any) => {
    this.showLoader = false;
    this.service.snackNotifications(results.message);
    this.stepper.next();
}, error => {
  this.showLoader = false;
  this.service.snackNotifications(error.message);
  this.stepper.previous();
});
}



}


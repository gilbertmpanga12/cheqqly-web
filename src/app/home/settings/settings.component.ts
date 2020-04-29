import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../../services/mainservice.service';
import {FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  is_form_active = false;
  hide: boolean = true;
  hide2: boolean = true;
  fullNamesGroup: FormGroup;
  phoneNumberGroup: FormGroup;
  emailGroup: FormGroup;
  showLoader: boolean = false;
  showLoader2: boolean;
   showLoader3: boolean;
  userName: any;
  merchantId: any;
  email: any;
  phoneNumber: any;
  showTextLoader: any = true;
  constructor(private service: MainserviceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.merchantId = this.service.merchantId;
    this.service.getProfile(this.service.merchantId).subscribe((usr: any) => {
      this.showTextLoader = false;
      this.userName = usr.firstName + ' ' + usr.lastName;
      this.email = usr.email ? usr.email : 'Not set yet';
      this.phoneNumber = usr.phoneNumber ? usr.phoneNumber : 'Not set yet';
  }, err => {
    this.service.snackNotifications(err.message);
  });

    this.fullNamesGroup = this.fb.group({
      firstName: '',
      lastName: ''
    });
    this.phoneNumberGroup = this.fb.group({
      phoneNumber: ''
    });
    this.emailGroup = this.fb.group({
      email: ''
    });
  }
  onEdit() {
this.is_form_active = true;
  }
  isShown() {
    this.hide = false;
  }
  isShown2() {
    this.hide2 = false;
  }

  cancelEdit() {
    this.hide = true;
    this.emailGroup.reset();
  }
  cancelEdit2() {
    this.hide2 = true;
    this.phoneNumberGroup.reset();
  }

  resetViews() {
  this.is_form_active = false;
  this.fullNamesGroup.reset();
  }

  editPhoneNumber() {
    this.showLoader3 = true;
    const formData = this.phoneNumberGroup.getRawValue();
    this.service.phoneNumber(formData).subscribe((message: any) => {
      this.service.snackNotifications(message.message);
      this.showLoader3 = false;
      this.phoneNumberGroup.reset();
      this.cancelEdit();
    }, error => {
      this.showLoader3 = false;
        this.service.snackNotifications(error.message);
    });
  }
  editEmail() {
    this.showLoader2 = true;
    const formData = this.emailGroup.getRawValue();
    this.service.updateEmail(formData).subscribe((message: any) => {
      this.showLoader2 = false;
      this.service.snackNotifications(message.message);
      this.emailGroup.reset();
      this.cancelEdit2();
    }, error => {
      this.showLoader2 = false;
        this.service.snackNotifications(error.message);
    });
  }
    updateNames() {
      this.showLoader = true;
      const formData = this.fullNamesGroup.getRawValue();
      this.service.updateNames(formData).subscribe((message: any) => {
        this.service.snackNotifications(message.message);
        this.showLoader = false;
        this.fullNamesGroup.reset();
        this.onEdit();
      }, error => {
        this.showLoader = false;
          this.service.snackNotifications(error.message);
      });
    }

}

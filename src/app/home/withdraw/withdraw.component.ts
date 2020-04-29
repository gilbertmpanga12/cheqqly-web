import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MainserviceService} from '../../services/mainservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
withdrawGroup: FormGroup;
showLoader: boolean = false;
revenue: any;
showTextLoader: any = true;
ops = [
  'Western Union',
  'Revolut',
  'World Remmit'
];
  constructor(private fb: FormBuilder,
    private service: MainserviceService, private router: Router) { }

  ngOnInit() {
    this.service.getTotalRevenue(this.service.merchantId).subscribe((data: any) => {
      this.revenue = `$${data.total}`;
      this.showTextLoader = false;
    }, err => {
      this.service.snackNotifications(err.message);
      this.showTextLoader = false;
    });
    this.withdrawGroup = this.fb.group({
      withdrawOptions: [''],
      customWithdraw: [''],
      reason: [''],
      amount: ['', Validators.required],
      bankAccount: ''
    });
  }
cancel() {
  this.withdrawGroup.reset();
  this.router.navigate(['/app']);
}
sendWithdrawRequest() {
this.showLoader = true;
let dataObj = this.withdrawGroup.getRawValue();
this.service.requestWithdraw(dataObj).subscribe((results: any) => {
  this.showLoader = false;
  this.service.snackNotifications(results.message);
  this.router.navigate(['/app']);
}, err => {
  this.showLoader = false;
  this.service.snackNotifications(err.message);
});
}
}

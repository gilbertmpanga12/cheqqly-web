import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  firebaseAuthState: any = null;
  tokenResult: any;
  firebaseId: any;
  // email: any;
  constructor(private af: AngularFireAuth,
    private http: HttpClient, private snackBar: MatSnackBar) {
      this.af.authState.subscribe(user => {
        if (user !== null) {
          this.firebaseAuthState = user;
          this.firebaseId = user.uid;
          // this.email = user.email;
          user.getIdTokenResult().then(result => {
            this.tokenResult =  result.token;
          });
        }
      });
    }
  signUpWithEmail(email, password) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }
  signInUserWithEmail(email, password) {
     return this.af.auth.signInWithEmailAndPassword(email, password);
  }
  googleSignIn() {
    return this.af.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  get isAuthenticated() {
    return this.firebaseAuthState !== null;
  }
  get getToken() {
    return this.tokenResult;
  }
  get merchantId() {
    return this.firebaseId;
  }
  logout() {
    return this.af.auth.signOut();
  }
  charge(dataObj: any) {
    return this.http.post(`${environment.baseUrl}/app/charge`, dataObj);
  }
  updateNames(dataObj: any) {
    return this.http.post(`${environment.baseUrl}/app/edit-name`, dataObj);
  }
  updateEmail(dataObj: any) {
    return this.http.put(`${environment.baseUrl}/app/edit-email`, dataObj);
  }
  phoneNumber(dataObj: any) {
    return this.http.put(`${environment.baseUrl}/app/edit-phone`, dataObj);
  }
  snackNotifications(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 4000,
    });
  }
  createAccountProfile(dataObj) {
    return this.http.post(`${environment.baseUrl}/app/new-account`, dataObj);
  }
  requestWithdraw(dataObj) {
    return this.http.post(`${environment.baseUrl}/app/request-withdraw`, dataObj);
  }
  getProfile(merchantId) {
    return this.http.get(`${environment.baseUrl}/app/get-profile?merchantId=${merchantId}`);
  }
  getAllTransactions(merchantId) {
    return this.http.get(`${environment.baseUrl}/app/get-transactions?merchantId=${merchantId}`);
  }

  getTotalRevenue(merchantId) {
    return this.http.get(`${environment.baseUrl}/app/total-revenue?merchantId=${merchantId}`);
  }
  getAllNotifications(merchantId) {
    return this.http.get(`${environment.baseUrl}/app/all-notifications?merchantId=${merchantId}`);
  }

}

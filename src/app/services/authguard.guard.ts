import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {MainserviceService} from './mainservice.service';
import {Router} from '@angular/router';

import {map} from 'rxjs/operators';
import {take} from 'rxjs/operators';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private af: AngularFireAuth,
    private service: MainserviceService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isAuthenticated) {
      return true;
    }
    return this.af.authState.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
          if (!loggedIn) {
              this.router.navigate(['/auth']);
          }
      })
    );
  }
}

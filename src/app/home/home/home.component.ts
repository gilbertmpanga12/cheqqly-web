import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MainserviceService } from '../../services/mainservice.service';

// import { Observable } from 'rxjs';

import { ActivatedRoute, NavigationEnd} from '@angular/router';
import { map, filter, mergeMap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DocsComponent} from '../docs/docs.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title:  any = 'Dashboard';
userName: any;
notifications: any;

isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public router: Router,
    private service: MainserviceService,
    private activatedRoute: ActivatedRoute, public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
    ) { }

  ngOnInit() {
    this.service.getProfile(this.service.merchantId).subscribe((usr: any) => {
        this.userName = usr.businessName;

    }, err => {
      this.service.snackNotifications(err.message);
    });
    this.service.getAllNotifications(this.service.merchantId).subscribe((notification: any) => {
      this.notifications = notification;

  }, err => {
    this.service.snackNotifications(err.message);
  });
   this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map((route) => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data)
   ).subscribe((event) => {

    this.title = event.state;
   });



  }
  signOut() {
    this.service.logout();
    localStorage.removeItem('showLoader');
    this.router.navigate(['/auth']);
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  goToSettings() {
    this.router.navigate(['/app/settings']);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DocsComponent, {
      width: '400px',
      maxHeight: '480px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


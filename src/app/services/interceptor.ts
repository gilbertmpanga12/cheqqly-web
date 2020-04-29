import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {MainserviceService} from './mainservice.service';
@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private af: AngularFireAuth, private service: MainserviceService) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq;
    newReq = req.clone({setHeaders: {Authorization: this.service.getToken},
    body: {...req.body, merchantId: this.service.merchantId}
    });
    return next.handle(newReq);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';
import {MainRoutes} from './main_routes';
import {AuthguardGuard} from './services/authguard.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home/home.component';
import {DocsComponent} from './home/docs/docs.component';
import {MainserviceService} from './services/mainservice.service';
import { MatListModule, MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatToolbarModule,
  MatSidenavModule, MatInputModule, MatFormFieldModule, MatDialogModule,
  MatBadgeModule, MatDividerModule, MatSnackBarModule ,
  MatExpansionModule
} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './services/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent
  ],
  imports: [ MatDividerModule,
    BrowserModule, RouterModule.forRoot(MainRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, BrowserAnimationsModule ,
    MatListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
     MatToolbarModule, MatSidenavModule, MatInputModule, MatFormFieldModule, MatBadgeModule,
      MatDialogModule,
      LayoutModule, HttpClientModule, MatSnackBarModule, MatExpansionModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  }, MainserviceService, AuthguardGuard ],
  bootstrap: [AppComponent],
  entryComponents: [DocsComponent]
})
export class AppModule { }

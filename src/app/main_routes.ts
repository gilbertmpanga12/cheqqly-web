import {Routes} from '@angular/router';
import {AuthguardGuard} from './services/authguard.guard';
import {HomeComponent} from './home/home/home.component';
export const MainRoutes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [AuthguardGuard],
    children: [
      {
        path: '',
        loadChildren: './home/dashboard/dashboard.module#DashboardModule',
        data: { state: 'Dashboard'}
      },
      {
        path: 'transactions',
        loadChildren: './home/notifications/notifications.module#NotificationsModule',
        data: { state: 'Notifications'}
      },
      {
        path: 'settings',
        loadChildren: './home/settings/settings.module#SettingsModule',
        data: { state: 'Settings'}
      },
      {
        path: 'request-withdraw',
        loadChildren: './home/withdraw/withdraw.module#WithdrawModule',
        data: {state: 'Withdraw'}
      }
    ]
  },
  {
    path: 'welcome',
    loadChildren: './onboarding/onboarding.module#OnboardingModule',
    canActivate: [AuthguardGuard]
  },
  {
    path: 'documentation',
    loadChildren: './documentation/documentation.module#DocumentationModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

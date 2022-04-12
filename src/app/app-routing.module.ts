import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './register/signup-page.component';
import { LoginPageComponent } from './login/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingPageComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path: 'signup-page',
    component: SignupPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'booking-page',
    component: BookingPageComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

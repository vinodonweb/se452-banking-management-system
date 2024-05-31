import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddDepositComponent } from './components/add-deposit/add-deposit.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddWithdrawComponent } from './components/add-withdraw/add-withdraw.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PopmessageComponent } from './components/popmessage/popmessage.component';
<<<<<<< HEAD
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
=======
import { DashboardComponent } from './components/dashboard/dashboard.component';

>>>>>>> ca28aad8abcc14d9f8f196a082dee77557269395

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'deposit',component:TasksComponent},
<<<<<<< HEAD
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},

=======
  {path: 'dashboard',component:DashboardComponent},
>>>>>>> ca28aad8abcc14d9f8f196a082dee77557269395
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddDepositComponent,
    AboutComponent,
    FooterComponent,
    AddWithdrawComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    PopmessageComponent,
<<<<<<< HEAD
    SignupComponent,
    LoginComponent,
=======
    DashboardComponent,
>>>>>>> ca28aad8abcc14d9f8f196a082dee77557269395
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

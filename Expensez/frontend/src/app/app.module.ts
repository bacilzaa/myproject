import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-form/login/login.component';
import { RegisterComponent } from './login-form/register/register.component';

import { RegisterService} from './login-form/register/register.service';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { RouterModule,Routes} from '@angular/router';

import { HttpClientModule} from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard} from './auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddorupdateComponent } from './dashboard/addorupdate/addorupdate.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { DisplayComponent } from './dashboard/display/display.component';




const appRoutes:Routes =[
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"category",component:CategoryComponent,canActivate:[AuthGuard]},
  {path:"expense",component:AddorupdateComponent,canActivate:[AuthGuard]},
  {path:"display",component:DisplayComponent,canActivate:[AuthGuard]},
  {path:"**",redirectTo:"display"}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LoginFormComponent,
    AddorupdateComponent,
    CategoryComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

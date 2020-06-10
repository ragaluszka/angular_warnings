import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { Komp1Component } from './komp1/komp1.component';
import { Komp2Component } from './komp2/komp2.component';
//import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import {  ListsWarningComponent } from './lists-warning/lists-warning.component';
import {  DetalsWarningComponent } from './detals-warning/detals-warning.component';
import { AppComponent } from './app.component';
import { WarningResolve } from './warning-resolve.service';
import { ProfileGuard } from './profile/profile.guard';

const routes : Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'listswarnings'},
  {path : 'komp1', component: Komp1Component},
  {path : 'komp2', component: Komp2Component},
  {path : 'listswarnings', component: ListsWarningComponent, canActivate:[ProfileGuard]},
  {path : 'listswarnings/detailwarning/:id', component: DetalsWarningComponent, resolve: {war : WarningResolve }, canActivate:[ProfileGuard]},
 // {path : 'login', component:  LoginComponent},
  {path : 'login', component:  ProfileComponent},

];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule,]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OsobyService } from './osoby.service';
import {AppRoutingModule} from './app-routing.module';
import { Komp1Component } from './komp1/komp1.component';
import { Komp2Component } from './komp2/komp2.component';
//import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ChildComponent } from './child/child.component';
import { ListsWarningComponent } from './lists-warning/lists-warning.component';
import { DetalsWarningComponent } from './detals-warning/detals-warning.component';
import { WarningsService } from './warnings.service';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
//import {HttpModule} from "@angular/http";
import { CoreModule } from './core-module/core.module';
import { SharedModule } from './shared-module/shared.module';
import { WarningResolve } from './warning-resolve.service';
import { ProfileModule } from './profile/profile.module';
import { ProfileService } from './profile/profile.service';
import { ProfileGuard } from './profile/profile.guard';
import { LayoutService } from './shared-module/services/layout.service';
//import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    Komp1Component,
    Komp2Component,
    ChildComponent,
    ListsWarningComponent,
    DetalsWarningComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //HttpModule,
    CoreModule,
    SharedModule,
    ProfileModule,
  ],
  providers: [OsobyService,WarningsService,WarningResolve,ProfileService,ProfileGuard,LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }

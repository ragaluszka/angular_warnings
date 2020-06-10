import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  login = '';
  password ='';
  profile : User;

  constructor( private pS: ProfileService, 
               private router : Router ) { }

  onSubmit(){
    this.pS.login(this.login,this.password).then (this.onSubmitSuccess.bind(this),this.onSubmitFailure)
  }

  private onSubmitSuccess(){
    this.router.navigate(['/listswarnings']);
  }
  private onSubmitFailure(){
    console.log('login or password is incorrect, plase try again!');
  }
  /*              
  ngOnInit(): void {
   // this.pS.getUserProfile();
  }*/

}

import { Component, OnInit } from '@angular/core';
import { ProfilAuth } from '../modele/profil-auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : ProfilAuth;
  login ='';
  password='';

  //constructor(private auth : AuthService ) { }
  constructor( ) { }
  ngOnInit(): void{
   // this.auth.getUser().subscribe() ;
  }

}

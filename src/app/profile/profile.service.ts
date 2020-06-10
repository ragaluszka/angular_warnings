import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user';
import { map } from 'rxjs/operators';
import { LayoutService } from '../shared-module/services/layout.service';
//import { resolve } from 'dns';
//import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private apiUrl ="http://127.0.0.1:8000/stdwarnings/auth/";
  private token: String;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

 //user : ProfilAuth;

  private credentials ={ 
    login: '',
    password:''
    }
    
  private isUserLogged = false;

  constructor( private http:HttpClient, private layoutService: LayoutService) { }

  login(login,password){
    return new Promise((resolve,rejects)=>{
      var auth = {
        "username": `${login}`,
        "password": `${password}`
    } ;

    //Wysylamy do serwera poświadczenia i oczekujemy tokena
    //gdy jest ok to zwracamy resolve() które jest przechwytywane 
    //w profile.component.ts w onSubmit() przez fun. 
    //.then (this.onSubmitSuccess.bind(this),this.onSubmitFailure)
    //this.onSubmitSuccess.bind(this) = resolve()
    //this.onSubmitFailure = rejects()
    this.http.post(this.apiUrl,auth,{headers: this.httpHeaders})
    .toPromise().then(data => {
      if (data['token'])
      {
        this.isUserLogged = true;
        this.layoutService.showSidebar();
        console.log('dane logowania='+data['username']);
        resolve()
      }
    },
       err => rejects())


    /*
    console.log(auth);
    this.http.post(this.apiUrl,auth,{headers: this.httpHeaders})
    .subscribe(data => {this.token=data['token'];console.log(this.token);});
    });
    */
      /*this.http.post(this.apiUrl,auth,{headers: this.httpHeaders}).pipe((res) => this.token=res['token']));
      console.log("token:"+this.token );
      if (this.token)
      {
        this.isUserLogged = true;
        resolve();
      }else {
        rejects();
      }*/
      
      /*
      if (login === this.credentials.login && password === this.credentials.password)
      {
        this.isUserLogged = true;
        resolve();
      }else {
        rejects();
      };
      */
    })}
  //)}

  logOut(){
    this.isUserLogged = false;
    this.layoutService.hideSidebar();
  }
  
  isLogged(){
    return this.isUserLogged;
  }
 /*
  getUserProfile(data):Observable<User>{ 
   
     console.log(data);
     var test2 = {
       "name": `${data.name}`,
       "opis": `${data.opis}`
   } ;
   console.log(test2);
   return this.http.post(this.apiUrl,test2,{headers: this.httpHeaders})
   .pipe(map((res : Warning) => res));
   }
 */
}

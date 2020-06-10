import { Injectable } from '@angular/core';
import {Warning} from './modele/warning';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
//import {Http, RequestOptions, Headers} from "@angular/http";
//import { Observable } from 'rxjs';
import {Observable, throwError, of} from "rxjs";
import { map , retry,catchError,tap} from 'rxjs/operators';
import 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WarningsService {
 


 /* private warnings: Warning[] = [
  {id:0, nazwa:"warning1"},
  {id:1, nazwa:"warning2"},
  {id:2, nazwa:"warning3"},]*/
  private apiUrl ="http://127.0.0.1:8000/stdwarnings/warningsfull-serializer/";
  //private warnings: Warning;
  //private warning: Warning;
  private token: String ='3cffe621fbbdafecfd000d1f244d6993dc07675f'
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization': `Token ${this.token}`});


  //private httpHeaders = new Headers({'Authorization': `Token ${this.token}`})
  constructor(private http : HttpClient) {}
  //constructor(private http : Http) {}
  /*
  allWarnings():Warning[]{
    const warningsAPI = this.http.get("http://127.0.0.1:8000/stdwarnings/warningsfull-serializer/");//Zwracany Observable
    console.log(warningsAPI);
    return this.warnings;
  };*/

  /*
  allWarnings():Observable<any>{
    return this.http.get("http://127.0.0.1:8000/stdwarnings/warningsfull-serializer/",{headers: this.httpHeaders})
  };*/
   
  allWarnings():Observable<Warning[]>{
    return this.http.get<Warning[]>(this.apiUrl,{headers: this.httpHeaders}).pipe(map((res:Warning[]) => res));
  };
  /*
  allWarnings():Observable<Warning[]>{
    return this.http.get(this.apiUrl,{headers: this.httpHeaders}).pipe(map((res) => res.json()));
  };
  */
  /*
  getWarning(id:number): Warning{
    return this.warnings[id];
  }*/

  
  getWarning(id:number): Observable<Warning>{
    return this.http.get<Warning>(this.apiUrl + id,{headers: this.httpHeaders})
    .pipe(map((res : Warning) => res));
  }

  addWarning(data):Observable<Warning>{ 
   //console.log(data);
   /*
    var test = {name: "s2rrrttx444422",opis: "asa"};
     var test1 = data; 
    var serializedForm = JSON.stringify(data);
    console.log(test);
    console.log(test1);
    console.log(data);
    console.log(JSON.stringify(data));
    console.log(JSON.parse(JSON.stringify(data)));
 */
    //const obj = {name, opis};
    
    //console.log(obj);
    //console.log(this.http.post<Warning>(this.apiUrl,serializedForm,{headers: this.httpHeaders})
    //);
    //return this.http.post<Warning>(this.apiUrl,data,{headers: this.httpHeaders});
    //let data1 = JSON.parse(JSON.stringify(data));
   // var test = {name: data.name,opis: data.opis};
    console.log(data);
    var test2 = {
      "name": `${data.name}`,
      "opis": `${data.opis}`
  } ;
  console.log(test2);
  return this.http.post(this.apiUrl,test2,{headers: this.httpHeaders})
  .pipe(map((res : Warning) => res));
  }

  updateWarning(id:number, data): Observable<Warning>{
    var test2 = {
      "name": `${data.name}`,
      "opis": `${data.opis}`,
      "voltage": ''
  } ;
    return this.http.put<Warning>(this.apiUrl + id + "/",test2,{headers: this.httpHeaders})
    .pipe(map((res : Warning) => res));
  }

  deleteWarning(id:number): Observable<Warning>{
    //var id : number = id;
    return this.http.delete<Warning>(this.apiUrl + id + "/",{headers: this.httpHeaders})
    .pipe(map((res : Warning) => res));
  }
  
  /*
  addWarning(data) : Observable<Warning> {
    return this.http.post<Data>(this.apiUrl,data,{headers: this.httpHeaders})
    .pipe(map((res : Warning) => res));

  }
*/

/*
getWarning(id:number): Observable<Warning>{
  return this.http.get(this.apiUrl + id,{headers: this.httpHeaders})
  .pipe(map((res) => res.json()));
}

addWarning(data) : Observable<Warning> {
  return this.http.post(this.apiUrl,data,{headers: this.httpHeaders})
  .pipe(map((res) => res.json()));

}
*/
   
  
}

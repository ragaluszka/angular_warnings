import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  observable$ = new Observable (observer => {observer.next();});
  //dataobservable$ = new Observable (observer => { setInterval( () => observer.next(new Date()), 1000)});

  bazaosoby = [
    {imie:'aaa', wiek: 11},
    {imie:'bbb', wiek: 22}
 ]
  constructor() { }

  wszystkieOsoby(){
    return this.bazaosoby;
  }
}

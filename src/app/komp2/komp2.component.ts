import { Component, OnInit } from '@angular/core';
import { OsobyService } from '../osoby.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-komp2',
  templateUrl: './komp2.component.html',
  styleUrls: ['./komp2.component.css']
})
export class Komp2Component implements OnInit {

  constructor( private oS: OsobyService) { }
  
  cena = 5;
  //data$ = this.oS.dataobservable$; 
  ngOnInit(): void {
    this.oS.observable$.subscribe( dane =>{ this.cena = 10})
  }

}

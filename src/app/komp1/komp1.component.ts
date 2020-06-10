import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-komp1',
  templateUrl: './komp1.component.html',
  styleUrls: ['./komp1.component.css']
})
export class Komp1Component implements OnInit {

  kwota =4.45
  constructor(private route: ActivatedRoute) { }
  wyslij =  function () { console.log(this.naszForm.value);}

  naszForm = new FormGroup ({
    imie : new FormControl(''),
    nazwisko : new FormControl(''),
  })

  ngOnInit(): void {
    //this.kwota = +this.route.snapshot.paramMap.get('kwota')
  }

  zmiennakomp1: Boolean = false;  
  zzewnatrz(nowaDana: boolean){ this.zmiennakomp1=nowaDana;}

}

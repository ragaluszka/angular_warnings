import { Component, OnInit, OnDestroy } from '@angular/core';
import { OsobyService } from './osoby.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'
import { LayoutService } from './shared-module/services/layout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  
  isSidebarVisible : boolean = false;

  wyswietl = true;
  title = 'warnings-angular';
  zmienna = 'jakas';
  data = new Date(1990,1,2);

  kwota =4.45

  constructor (private osobyService:OsobyService,
    private route: ActivatedRoute, private lS: LayoutService
    ){}
 
  wyslij =  function () { console.log(this.naszForm.value);}
  osoby = [];

 
  ngOnInit() {
    console.log('jestem');
    this.osoby = this.osobyService.wszystkieOsoby();
    //this.kwota = +this.route.snapshot.paramMap.get('kwota')
    this.lS.sidebarSource$.subscribe((isVisible) => {this.isSidebarVisible = isVisible;})
    console.log('isVisible='+this.isSidebarVisible);
  }

  ngOnDestroy() {
    console.log('zniszczony');
  }
}

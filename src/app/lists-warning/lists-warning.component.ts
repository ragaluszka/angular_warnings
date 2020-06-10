import { Component, OnInit } from '@angular/core';
import {Warning} from '../modele/warning';
import {WarningsService} from '../warnings.service';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-lists-warning',
  templateUrl: './lists-warning.component.html',
  styleUrls: ['./lists-warning.component.css']
})
export class ListsWarningComponent implements OnInit {

  warnings : Warning[]; 
  warningForm : FormGroup;
  warning : Warning;
  

  constructor( private ws:WarningsService,
               private formBuilder : FormBuilder ) { }

  /*
  ngOnInit(): void {
    this.warnings= this.ws.allWarnings();
    console.log(this.warnings);
  }*/

  ngOnInit(): void {
    //subscribe - musi być zwrócone Observable()
    this.loadWarnings();
    //console.log(this.warnings);
    this.warningForm = this.buildWarningForm();
  }

  loadWarnings():void{
    this.ws.allWarnings().subscribe((dane) => {this.warnings = dane},(error) => {console.log(error)});
  }

  addWarning(){
    //subscribe - nic nie przyjmujemy z serwisy a co chcemy zrobić po dodaniu this.loadWarning załadować listę warnings
    //console.log(this.warningForm.value);
    //var formData: any = new FormData();
    //formData.append("name", this.warningForm.get('name').value);
    //formData.append("opis", this.warningForm.get('opis').value);
    //console.log(formData);
    //var data : Warning;
  
    //data = JSON.parse(JSON.stringify(formData));
    //console.log(data);
    //this.ws.addWarning(this.warningForm.value).subscribe(() => { this.loadWarnings()}); 
    //let war = this.warningForm.value;
    //console.log("ok");
    //console.log(this.warningForm.value);
    //this.warningForm.reset;
    this.ws.addWarning(this.warningForm.value).subscribe(() => { this.loadWarnings()}); 
    this.warningForm.reset();
  }
  
  removeWarning(warning : Warning, event){
    //aby nie wywolywać pokazania detali zatrzymujemy jeszcze jeden (click)
    event.stopPropagation();
    var id : number = warning.id.valueOf();
    console.log('id', id);
    this.ws.deleteWarning(id).subscribe(() => { this.loadWarnings()});
  }
  


  buildWarningForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      opis: ''
    })
  }

}

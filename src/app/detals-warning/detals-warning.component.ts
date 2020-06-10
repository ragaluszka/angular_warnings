import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute,Router } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import { Warning } from '../modele/warning';
import { WarningsService } from '../warnings.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';




@Component({
  selector: 'app-detals-warning',
  templateUrl: './detals-warning.component.html',
  styleUrls: ['./detals-warning.component.css']
})
export class DetalsWarningComponent implements OnInit {
  
  warning : Warning;
  warningForm : FormGroup;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private ws: WarningsService,
               private location: Location, 
               private formBuilder : FormBuilder
               ) { }

  ngOnInit(): void {
    this.loadWarning();
    this.warningForm = this.buildWarningForm();
  }

  loadWarning(){
    
    this.warning = this.route.snapshot.data['war'];
    //Używany warning-resolvs.ts
    //const id = this.route.snapshot.paramMap.get('id');
    //console.log('id', id);
    //this.fs.getWarning(Number(id)).subscribe((dana)=>{this.warning=dana});
    console.log(this.warning);
  }

  
  updateWarning(){
    console.log(this.warning.id);
    var id : number = this.warning.id.valueOf();
    this.ws.updateWarning( id , this.warningForm.value).subscribe(() => { this.router.navigate(['/listswarnings/']); }); 
    
  }


  cofnij(){this.location.back()};

  buildWarningForm() {
    return this.formBuilder.group({
      name: [this.warning.name, [Validators.required, Validators.maxLength(255)]],
      opis: [this.warning.opis]
    })
  }

}

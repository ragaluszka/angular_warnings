import { WarningsService } from './warnings.service';
import { Warning } from './modele/warning';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class WarningResolve implements Resolve<Warning>{
    constructor (private ws:WarningsService){}

    resolve (route : ActivatedRouteSnapshot){
        return this.ws.getWarning(route.params['id']);
    }
}
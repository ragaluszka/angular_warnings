
import { Voltage } from './voltage';

export interface Warning {
    id: Number;
    //nazwa: String;
    name: String;
    opis: String;
    voltage?:Array<Voltage>;
    direction? : String;
  }
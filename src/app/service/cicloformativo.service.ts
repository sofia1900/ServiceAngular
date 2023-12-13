import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CicloformativoService {

  constructor() { }
  showAlert (msg : String){
    alert("ALUMNOS " + msg)

  }
}

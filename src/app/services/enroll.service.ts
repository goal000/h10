import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }
  onEnrolled(title:string){
    alert(title)
  }
}

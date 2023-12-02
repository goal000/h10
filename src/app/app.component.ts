import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { EnrollService } from './services/enroll.service';
import { FetchDataService } from './fetch-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EnrollService,FetchDataService]
})
export class AppComponent {
  title = 'ex4';
  constructor(private enrollService:EnrollService,private fetchService:FetchDataService){}
  form = new FormGroup({
    username : new FormControl("")
  })
  login(){
    console.log(this.form.value);
    
  }
  list:any[] = []class
  addTask(text:string){
    this.list.push({id:this.list.length+1,name:text})
  }
  removeTask(id:number){
    this.list = this.list.filter((itemId)=>itemId.id!=id)
    console.log(this.list,id);
  }
  onEnroll(){
    this.enrollService.onEnrolled(this.title)

  }
  userList:any[] = []
  ngOnInit():void{
    this.fetchService.getUser().subscribe(user => console.log("sad",user)
    )
  }
}

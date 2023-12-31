import { Component } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';
import { BackEndService } from '../back-end.service';
import {  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  listofData: Data[]=[]
  @Output() isLogout= new EventEmitter<void>()
  constructor(private DataService:DataService,private backendservice:BackEndService){}

  ngOnInit():void{
    
   this.fetchData();
  
  }
  private fetchData(){
    this.backendservice.fetchData().subscribe((data)=>{
      this.listofData=data;
    })
  }
  
  logout(){
    this.isLogout.emit()
  }
}




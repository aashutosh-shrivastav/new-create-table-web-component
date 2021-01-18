import { Component, OnChanges ,Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TableService} from './table-comp.service';


@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css'],

})
export class TableCompComponent implements OnInit {

  @Input() ColData:any;
  @Input() TableName:string  = "" ;
  @Input() DataUrl: string  = "";
  
  UserData:any;
  //
 
  constructor(private _tableService: TableService) {
  
   }


  

  ngOnInit() {
    this.loadUsers();
  }
 
  loadUsers(){
    this._tableService.getUsers(this.DataUrl)
                      .subscribe((data)=>{
                        console.log("data type " + data);
                        this.UserData = data;})
  }
  

}

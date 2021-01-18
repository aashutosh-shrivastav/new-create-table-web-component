import { Component, OnChanges ,Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TableService} from './table-comp.service';


@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class TableCompComponent implements OnInit {

  @Input() ColData:any;
  @Input() TableName:string |undefined;
  @Input() DataUrl: string = '';
  
  GridData:any;
  
 
  constructor(private tableService: TableService) {
  
   }

  ngOnInit() {
   this.loadGrid();
   console.log(this.ColData);
   console.log(this.GridData);
   console.log(this.DataUrl);


  }
  loadGrid(){
    this.tableService.getData(this.DataUrl).subscribe((data:any)  => { this.GridData = data; })

  }

}

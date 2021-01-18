import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }
  title = 'test2';
  dataurl: string = "http://jsonplaceholder.typicode.com/users";
  coldata  = [
    {field:"id",header:" Sr. No."},
    {field:"name",header: " Name"},
    
    {field:"email",header: "Email"},
    {field:"phone",header: "Phone No."},
    {field:"website",header: "Website"}
  ];
    




}

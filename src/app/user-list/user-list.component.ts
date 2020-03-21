import { Component, OnInit } from '@angular/core';
// import users from '../../assets/dummydata.json';
import users from '../../assets/dummydata_sm.json';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {  
  public usersList:{FIRST_NAME:string, LAST_NAME:string, PHONE:number, EMAIL:string, BIRTH_DATE:Date, ADDRESS:string, ZIP:string, CITY:string}[] = users;

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import users from '../assets/dummydata.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyUsers';
  public usersList:{FIRST_NAME:string, LAST_NAME:string, PHONE:number, EMAIL:string, BIRTH_DATE:Date, ADDRESS:string, ZIP:string, CITY:string}[] = users;
}
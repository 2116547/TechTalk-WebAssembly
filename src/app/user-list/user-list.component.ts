import { Component, OnInit } from '@angular/core';
// import users from '../../assets/dummydata.json';
import users from '../../assets/dummydata_md.json';

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

  sort(header) {
    console.log(`Bubble sorting ${header} in JavaScript...`);
    var t0 = performance.now();
    this.bubbleSort(this.usersList, header)
      .then(() => {
        var t1 = performance.now();
        console.log(`Sorting done, it took ${(t1 - t0).toFixed(2)}ms`);
      });
  }
  
  bubbleSort(array, header) {
    return new Promise(function(resolve, reject) {
      var swapped;
      do {
        swapped = false;
        for (var i = 0; i < array.length - 1; i++) {
          if (array[i][header] > array[i + 1][header]) {
            var temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            swapped = true;
          }
        }
      } while (swapped);
      resolve();
    });
  }
}

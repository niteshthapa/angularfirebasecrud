import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Student{
  id:number,
  age:number,
  salary:number,
  des:number
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  url:string ="https://authangular-7-2ea5d-default-rtdb.europe-west1.firebasedatabase.app/data.json";
  constructor(private _http:HttpClient){}
students:Student[]= [ ]

  ngOnInit(): void {
    let response;
    this._http.get(this.url).subscribe(res=>{
      response = JSON.stringify(res);
      this.students = JSON.parse(response)
      console.log( this.students)
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  Form: FormGroup;
  isSubmit: boolean = false;
  student: any;
  editMode: any = false;
  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpClient) { }
  ngOnInit(): void {
    this.Form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'des': new FormControl('', [Validators.required]),
      'age': new FormControl('', [Validators.required]),
    });
    this._activatedRoute.paramMap.subscribe(res => {
      this.getStudenDetails(+res.get('id'))
    })
    this._activatedRoute.queryParamMap.subscribe(res => {
      this.editMode = res.get('editMode')
      this.Form.patchValue(this.student)
    })
  }
  getStudenDetails(id: number) {
    this._http.get(`https://authangular-7-2ea5d-default-rtdb.europe-west1.firebasedatabase.app/data/${id}.json`).subscribe(res => {
      this.student = res;
      this.Form.patchValue(this.student)
    })
  }
  updateData(student: any) {
    this.isSubmit = true;
    if (this.Form.valid) {
      let updatedObj = { ...this.Form.value, id: student.id }
      this._http.put(`https://authangular-7-2ea5d-default-rtdb.europe-west1.firebasedatabase.app/data/${student.id}.json`, updatedObj).subscribe(res => {
        this.getStudenDetails(student.id)
      });
    }
    else {
      return;
    }
  }
}

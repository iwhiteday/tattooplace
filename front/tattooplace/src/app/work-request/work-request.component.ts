import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-work-request',
  templateUrl: './work-request.component.html',
  styleUrls: ['./work-request.component.scss']
})
export class WorkRequestComponent implements OnInit {
  formGroup1: FormGroup;
  formGroup2: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      requestType: ['', Validators.required]
    });
    this.formGroup2 = this._formBuilder.group({
      description: ['', Validators.required]
    });
  }

}

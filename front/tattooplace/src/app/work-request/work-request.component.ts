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
  formGroup3: FormGroup;

  masters = [
    { id: 1, name: 'John Doe', works: 5, avg_rating: 4.1, avatar: '' },
    { id: 2, name: 'Jane Doe', works: 12, avg_rating: 4.9, avatar: '' },
    { id: 3, name: 'Babe Doe', works: 45, avg_rating: 4.3, avatar: '' }
  ];

  styles = [
    { id: 1, name: 'Реализм', src: '', description: '' },
    { id: 2, name: 'Графика', src: '', description: '' },
    { id: 3, name: 'Нео-трад', src: '', description: '' },
    { id: 4, name: 'Олд скул', src: '', description: '' },
    { id: 5, name: 'Традиционная', src: '', description: '' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      requestType: ['', Validators.required]
    });
    this.formGroup2 = this._formBuilder.group({
      master: ['', Validators.required]
    });
    this.formGroup3 = this._formBuilder.group({
      description: ['', Validators.required]
    });
  }

  masterSelected():boolean {
    return this.formGroup1.controls.requestType.value == 'master'
  }

}

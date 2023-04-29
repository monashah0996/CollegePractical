import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-symptom-form',
  templateUrl: './symptoms-form.component.html',
  styleUrls: ['./symptoms-form.component.css']
})
export class SymptomFormComponent implements OnInit {
  symptomForm!: FormGroup;
  submitted: boolean = false;
  showError: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.symptomForm = this.formBuilder.group({
      fever: ['', Validators.required],
      cough: ['', Validators.required],
      appetite: ['', Validators.required],
      smell: ['', Validators.required],
      abdominal: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.symptomForm.invalid) {
      this.showError = true;
      return;
    }
    this.submitted = true;
  }
}

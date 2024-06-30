import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public showRules = false;

  public landingForm = new FormGroup({
    code: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(5),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor() {}

  get code() {
    return this.landingForm.get('code');
  }

  get name() {
    return this.landingForm.get('name');
  }

  public toggleRules() {
    this.showRules = !this.showRules;
  }

  public onSubmit() {
    console.log("submitted", this.landingForm.value);
  }
}

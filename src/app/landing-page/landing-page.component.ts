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
    code: new FormControl('',),
    name: new FormControl('')
  });

  public toggleRules() {
    this.showRules = !this.showRules;
  }

  public onSubmit() {
    console.log("success", this.landingForm.value);
  }
}

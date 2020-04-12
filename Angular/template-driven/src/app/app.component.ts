import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  showComponent = false;
  title = 'template-driven';
  subscriptionDefault = 'advanced';
  formData = {
    email: '',
    subscription: '',
    password: ''
  };


  @ViewChild('form') signupForm: NgForm;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // };

  ngOnInit() {
    console.log(this.signupForm);
  }

  ngAfterViewInit() {
    console.log(this.signupForm);
  }

  onSubmit() {
    // this.formData = this.signupForm;
    console.log(this.signupForm.value);
  }
}

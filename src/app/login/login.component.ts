import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  loginFormValidate() {
    this.myForm = this.fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
       
      }
    );
  }
  ngOnInit(): void {
    this.loginFormValidate();
  }

 doLoginFormSubmit() {
  if (this.myForm.invalid) {
    return;
  }
  this.router.navigateByUrl('productHome');
}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  loginEmailForm: FormGroup;

  email: string;

  constructor() {}

  ngOnInit() {
  this.loginEmailForm = new FormGroup({
   email: new FormControl('',[Validators.required, Validators.email]),
  });
}

  onSubmit(){
    console.log(this.loginEmailForm.value);
    this.loginEmailForm.reset();
  }
}

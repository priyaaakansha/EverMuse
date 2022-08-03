import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-new-pwd',
    templateUrl: './new-pwd.page.html',
    styleUrls: ['./new-pwd.page.scss'],
  })
  export class NewPwdPage implements OnInit {

  newPwdForm: FormGroup;

    valid: boolean;
    matched: boolean;

  constructor() {}

  ngOnInit() {
  this.newPwdForm = new FormGroup({
    password1: new FormControl('', Validators.compose([
      Validators.minLength(8), Validators.maxLength(12),
      Validators.required,
    ])),
    password2: new FormControl('', Validators.compose([
      Validators.minLength(8), Validators.maxLength(12),
      Validators.required,
    ])),
  });
}

  onSubmit()
  {
    this.checkval();
    this.checkmatch();
    if(this.valid){
    if(this.matched)
    {
      return true;
    }
    document.getElementById('match').innerHTML = 'do not match';
    return false;
  }
  else{
    document.getElementById('match').innerHTML = 'invalid pwd';
  }
  }
  checkval()
  {
    if(this.newPwdForm.valid)
    {
      this.valid=true;
      return true;
    }
    this.valid=false;
    return false;
  }
  checkmatch()
  {
    if(this.newPwdForm.value.password1 === this.newPwdForm.value.password2)
        {
          this.matched=true;
          return true;
        }
        else
        {
          this.matched=false;
          return false;
        }
  }

}

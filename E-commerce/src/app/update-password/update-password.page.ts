import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})

export class UpdatePasswordPage implements OnInit {

  newPwdForm: FormGroup;
  user=JSON.parse(sessionStorage.getItem('user'));
    valid: boolean;
    matched: boolean;

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) {}

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

async success() {
  const alert = await this.alertCtrl.create({
    header: 'Success',
    message: 'Your password has been changed successfully!',
  });
  await alert.present();
}

async close() {
  this.modalCtrl.dismiss();
}

  onSubmit()
  {
    this.checkval();
    this.checkmatch();
    if(this.valid){
    if(this.matched)
    {
      this.user.password=this.newPwdForm.value.password1;
      sessionStorage.setItem('user',JSON.stringify(this.user));
      return true;
    }
    document.getElementById('match').innerHTML = 'do not match';
    return false;
    }
    else{
      document.getElementById('match').innerHTML = 'invalid pwd';
    }
    // this.close();
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
          // document.getElementById('match').innerHTML = 'do not match';
          return false;
        }
  }

}


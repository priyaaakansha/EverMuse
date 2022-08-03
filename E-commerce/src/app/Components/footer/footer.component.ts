import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  user = JSON.parse(sessionStorage.getItem('user'));
  email: string;
  subscription = JSON.parse(localStorage.getItem('subsribersList')) || [];

  constructor(private alertCtrl: AlertController) {}

  ngOnInit(){
    console.log(this.subscription);
  }

  openFacebook()
  {
    window.open('https://www.facebook.com/', '_system');
  }

  openInsta()
  {
    window.open('https://www.instagram.com/', '_system');
  }

  openYoutube()
  {
    window.open('https://www.youtube.com/', '_system');
  }

  openPinterest()
  {
    window.open('https://in.pinterest.com/', '_system');
  }

  valid()
  {
    if(this.email.includes('@'))
    {
      if(this.email.indexOf('@') <= 0 || this.email.indexOf('@') === this.email.length - 1)
      {
        document.getElementById('valid').innerHTML='Please enter a valid email address';
        return false;
      }
      document.getElementById('valid').innerHTML='';
      return true;
    }
    else
    {
      document.getElementById('valid').innerHTML='Please enter a valid email address';
      return false;
    }
  }

  async subscribe() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'You have successfully subscribed to our newsletter!',
    });
    await alert.present();
  }

  onSubmit()
  {
    console.log(this.email);
    if(this.valid())
    {
      this.subscription.push(this.email);
      localStorage.setItem('subscribersList', this.subscription);
      this.subscribe();
    }
    this.email='';
  }

}

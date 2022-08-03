import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  private tutorialHidden = true;
  constructor() { }

  ngOnInit() {
  }

  showText(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('tutorial').hidden = false;

    }
    else if(this.tutorialHidden === false){
      this.tutorialHidden = true;
      document.getElementById('tutorial').hidden = true;
    }
  }

  showText1(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('tutorial1').hidden = false;

    }
    else if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById('tutorial1').hidden = true;
    }

  }

  showText2(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('tutorial2').hidden = false;

    }
    else if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById('tutorial2').hidden = true;
    }

  }

  showText3(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('tutorial3').hidden = false;

    }
    else if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById('tutorial3').hidden = true;
    }

  }

  showText4(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('tutorial4').hidden = false;

    }
    else if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById('tutorial4').hidden = true;
    }

  }

  showText5(){
    if(this.tutorialHidden === true){
      this.tutorialHidden = false;
      document.getElementById('tutorial5').hidden = false;

    }
    else if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById('tutorial5').hidden = true;
    }

  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.page.html',
  styleUrls: ['./help-center.page.scss'],
})
export class HelpCenterPage implements OnInit {
help: Array<any> = [
  '../../assets/images/Help/orders.png',
  '../../assets/images/Help/faq.png',
  '../../assets/images/Help/main.png',
];

faq = this.help[1];
orders = this.help[0];
main = this.help[2];

  constructor() { }

  ngOnInit() {
    console.log(this.faq);
  }

}

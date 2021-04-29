import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  NewPrice: number;
  OldValue: number;
  FinAmount: number;
  InRate: number;
  TIP: number;
  MonthlyPay: number;
  PayTerm: number;
  MPmessage: string;
  constructor(public navCtrl: NavController) {}

 calculateMonthlyPay () {
    this.FinAmount = this.NewPrice-this.OldValue;
    this.InRate = 0.013;
    this.TIP = (this.FinAmount*this.InRate)*this.PayTerm;
    this.MonthlyPay = (this.FinAmount + this.TIP) / this.PayTerm;
    this.MonthlyPay = parseFloat(this.MonthlyPay.toFixed(2));

    
  
  }

}
